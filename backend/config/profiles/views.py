from rest_framework.response import Response
from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from .serializers import FriendSerializer, UserProfileSerializer
from rest_framework import serializers
from rest_framework import viewsets


class FriendViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()

    def get_serializer_class(self):
        return FriendSerializer

    def list(self, request, *args, **kwargs):
        user_id = CustomUser.objects.get(email=request.user)
        messages = FriendRequest.objects.filter(receiver=user_id).order_by(
            "-created_at"
        )
        messages = self.filter_queryset(messages)

        serializer = self.get_serializer(messages, many=True)
        return Response(serializer.data)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def perform_create(self, serializer):
        # 인증된 사용자의 CustomUser 인스턴스를 사용하여 UserProfile을 저장합니다.
        serializer.save(profile_user=self.request.user)
