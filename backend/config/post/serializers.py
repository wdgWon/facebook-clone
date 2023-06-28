from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            "title",
            "content",
            "image",
        ]


class PostRetrieveSerializer(serializers.ModelSerializer):
    writer_name = serializers.StringRelatedField(source="writer.name", read_only=True)

    class Meta:
        model = Post
        fields = [
            "writer_name",
            "title",
            "content",
            "image",
            "like",
            "created_at",
            "updated_at",
        ]
