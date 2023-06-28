from rest_framework import serializers
from .models import Post
from datetime import datetime, timezone


class PostSerializer(serializers.ModelSerializer):
    writer_name = serializers.StringRelatedField(source="writer.name", read_only=True)
    created_time = serializers.SerializerMethodField()
    like_people_limit = serializers.SerializerMethodField()

    class Meta:
        model = Post
        exclude = ["updated_at", "created_at"]

    def get_created_time(self, obj):
        return time_since_created(obj.created_at)

    def get_like_people_limit(self, obj):
        peoples = list(obj.like_people.all())
        if len(peoples) >= 3:
            return "다수가 좋아요를 클릭함"
        return [str(people) for people in peoples]


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "title",
            "content",
            "image",
        ]


def time_since_created(created_at):
    now = datetime.now(timezone.utc)
    time_delta = now - created_at
    total_seconds = int(time_delta.total_seconds())
    hours = total_seconds // 3600

    if hours == 0:
        return "방금 전"
    elif hours > 24:
        return created_at.date()
    else:
        return f"{hours}시간 전"
