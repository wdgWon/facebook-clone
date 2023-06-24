from rest_framework.response import Response
from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from .serializers import FriendSerializer, UserProfileSerializer
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework import status


class FriendViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendSerializer

    def list(self, request, *args, **kwargs):
        user_id = CustomUser.objects.get(email=request.user)
        messages = FriendRequest.objects.filter(receiver=user_id).order_by(
            "-created_at"
        )
        messages = self.filter_queryset(messages)

        serializer = self.get_serializer(messages, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        sender = request.user
        print("SENDER: ", sender)
        receiver_id = kwargs.get("user_id", None)
        print("RECEIVER: ", receiver_id)
        receiver = get_object_or_404(CustomUser, id=receiver_id)
        print("GET OBJCET: ", receiver)

        if not FriendRequest.objects.filter(sender=sender, receiver=receiver).exists():
            friend_request = FriendRequest(sender=sender, receiver=receiver)
            friend_request.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ProfileViewSet(viewsets.ModelViewSet):
    """유저 프로필 CRUD"""

    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def perform_create(self, serializer):
        serializer.save(profile_user=self.request.user)
