from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["name"]


class UserProfileSerializer(serializers.ModelSerializer):
    profile_user_name = serializers.StringRelatedField(
        source="profile_user.name", read_only=True
    )

    class Meta:
        model = UserProfile
        fields = [
            "profile_user_name",
            "myself",
            "mobile_phone",
            "company",
            "education",
            "residence",
            "birth_place",
            "friends",
            "profile_image",
        ]


class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = "__all__"
