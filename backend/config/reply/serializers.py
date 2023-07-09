from rest_framework import serializers
from .models import Reply


class ReplySerializer(serializers.ModelSerializer):
    user_name = serializers.StringRelatedField(source="writer.name", read_only=True)

    class Meta:
        model = Reply
        fields = [
            "post",
            "user_name",
            "comment",
        ]
