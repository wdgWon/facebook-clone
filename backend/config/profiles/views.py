from rest_framework.response import Response
from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from .serializers import (
    FriendSerializer,
    UserProfileSerializer,
    UserProfileSearchSerializer,
)
from rest_framework import viewsets, status
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.filters import SearchFilter
from rest_framework.generics import RetrieveUpdateAPIView


class FriendViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer

    def list(self, request, *args, **kwargs):
        """자신한테 온 친구 요청 목록"""
        user_id = CustomUser.objects.get(email=request.user)
        messages = FriendRequest.objects.filter(receiver=user_id).order_by(
            "-created_at"
        )
        messages = self.filter_queryset(messages)

        serializer = self.get_serializer(messages, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=["get"], url_path="accept-friend-request")
    def accept_friend_request(self, request, *args, **kwargs):
        """친구 요청 수락 한 경우"""
        friend_request_id = kwargs["pk"]
        friend_request = get_object_or_404(
            FriendRequest, id=friend_request_id, receiver=request.user
        )
        print(friend_request.is_accepted)
        if not friend_request.is_accepted:
            # 친구 요청을 수락하고 is_accepted 를 True로 변경
            friend_request.is_accepted = True
            friend_request.save()

            # UserProfile의 friends에 서로 추가
            sender_profile = UserProfile.objects.get(profile_user=friend_request.sender)
            receiver_profile = UserProfile.objects.get(
                profile_user=friend_request.receiver
            )

            sender_profile.friends.add(receiver_profile)
            receiver_profile.friends.add(sender_profile)

            sender_profile.save()
            receiver_profile.save()

            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ProfileViewSet(viewsets.ModelViewSet):
    """유저 프로필 CRUD"""

    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def create(self, request, *args, **kwargs):
        """유저 프로필 업데이트"""
        request_data = request.data.copy()
        request_data["profile_user"] = request.user.id
        serializer = self.get_serializer(data=request_data)
        serializer.is_valid(raise_exception=True)

        user_instance = CustomUser.objects.get(id=request.user.id)
        saved_profile = serializer.save(profile_user=user_instance)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_queryset(self):
        """요청 한 접근자의 프로필 정보 가져오기"""
        if self.action == "retrieve":
            user_id = self.kwargs["pk"]
            return UserProfile.objects.filter(profile_user=user_id)
        return UserProfile.objects.all()

    def get_object(self):
        """프로필 유저의 정보를 접근할 때 커스텀 유저 고유 번호로 접근"""
        queryset = self.get_queryset()
        custom_user_id = self.kwargs["pk"]
        obj = get_object_or_404(queryset, profile_user_id=custom_user_id)
        return obj

    @action(detail=True, methods=["get"], url_path="mypage")
    def my_page_view(self, request, pk=None):
        user_id = request.user.id

    @action(detail=True, methods=["get"], url_path="friend_request")
    def send_friend_request_action(self, request, pk=None):
        """친구 요청 액션"""
        return self.send_friend_request()

    def send_friend_request(self):
        """친구 요청"""
        request = self.request
        sender = request.user
        pk = self.kwargs["pk"]
        receiver = get_object_or_404(CustomUser, id=pk)

        # 조건 검사 분기 - 1. 친구 요청을 받는 사람이 자기 자신이 아닐 경우, 2. 이미 친구 요청을 보낸 경우
        if (
            receiver != sender
            and not FriendRequest.objects.filter(
                sender=sender, receiver=receiver, is_accepted=True
            ).exists()
            and not FriendRequest.objects.filter(
                sender=receiver, receiver=sender, is_accepted=False
            ).exists()
            and not FriendRequest.objects.filter(
                sender=receiver, receiver=sender, is_accepted=True
            ).exists()
        ):
            friend_request = FriendRequest(sender=sender, receiver=receiver)
            friend_request.save()

            friend_request_profile = UserProfile.objects.get(profile_user=sender)
            friend_request_profile.friend_request = True
            friend_request_profile.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(status=status.HTTP_400_BAD_REQUEST)


class MyPageView(RetrieveUpdateAPIView):
    model = UserProfile
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get_object(self):
        queryset = self.get_queryset()
        user_id = self.request.user.id
        obj = get_object_or_404(queryset, profile_user_id=user_id)

        return obj


class SearchViewSet(viewsets.ReadOnlyModelViewSet):
    model = UserProfile
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSearchSerializer
    filter_backends = [SearchFilter]
    search_fields = ["profile_user__name"]
