from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from rest_framework import serializers
from accounts.serializers import UserDetailSerializer


class UserProfile(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):
    profile = UserProfile()

    class Meta:
        model = CustomUser
        fields = ["name", "profile"]


class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = "__all__"
