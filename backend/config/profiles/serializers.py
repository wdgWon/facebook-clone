from accounts.models import CustomUser
from .models import UserProfile, FriendRequest
from rest_framework import serializers


class FriendSerializer(serializers.ModelSerializer):
    receiver_name = serializers.StringRelatedField(
        source="receiver.name", read_only=True
    )
    sender_name = serializers.StringRelatedField(source="sender.name", read_only=True)
    when_request = serializers.SerializerMethodField()

    class Meta:
        model = FriendRequest
        fields = [
            "id",
            "sender_name",
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
    friends = serializers.SerializerMethodField()

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
            "profile_image",
            "friends",
            "friend_request",
        ]

    def get_friends(self, obj):
        """친구 목록 딕셔너리 형태에서 리스트 형태로 언패킹"""
        friends_list = [friend.profile_user.name for friend in obj.friends.all()]
        return friends_list


class UserProfileSearchSerializer(serializers.ModelSerializer):
    profile_user_id = serializers.PrimaryKeyRelatedField(
        source="profile_user.id", read_only=True
    )
    profile_user_name = serializers.StringRelatedField(
        source="profile_user.name", read_only=True
    )
    # is_friend = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "profile_user_id",
            "profile_user_name",
            "profile_image",
        ]
