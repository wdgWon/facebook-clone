from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from rest_framework import serializers


class FriendSerializer(serializers.ModelSerializer):
    receiver_name = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    when_request = serializers.SerializerMethodField()

    class Meta:
        model = FriendRequest
        fields = [
            "id",
            "receiver_name",
            "is_accepted",
            "when_request",
        ]

    def get_when_request(self, obj):
        created_at = obj.created_at.date()
        return created_at

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["id"] = instance.pk
        return representation


class UserSerializer(serializers.ModelSerializer):
    friend_request = FriendSerializer()

    class Meta:
        model = CustomUser
        fields = ["name", "friend_request"]


class UserProfileSerializer(serializers.ModelSerializer):
    profile_user_name = serializers.StringRelatedField(
        source="profile_user.name", read_only=True
    )
    friend_requests_sent = FriendSerializer(
        many=True, read_only=True, source="profile_user.requests_sent"
    )
    friend_requests_received = FriendSerializer(
        many=True, read_only=True, source="profile_user.requests_received"
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
            "friend_requests_sent",
            "friend_requests_received",
        ]
