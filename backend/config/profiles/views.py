from .models import UserProfile, FriendRequest
from .serializers import FriendSerializer, UserProfileSerializer
from rest_framework import serializers
from rest_framework import viewsets


class FriendViewSet(viewsets.ModelViewSet):
    queryset = FriendRequest.objects.all()

    def get_serializer_class(self):
        return FriendSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
