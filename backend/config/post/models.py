from django.db import models
from accounts.models import CustomUser
from profiles.models import UserProfile


class Post(models.Model):
    writer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, help_text="작성자")
    title = models.CharField(max_length=500, help_text="제목")
    content = models.TextField(help_text="내용")
    image = models.ImageField(
        upload_to="post/%Y/%m/", blank=True, null=True, help_text="이미지 업로드"
    )
    like = models.PositiveSmallIntegerField(default=0, help_text="좋아요")
    like_people = models.ManyToManyField(
        CustomUser, related_name="like_people", help_text="좋아요를 누른 사람들"
    )
    created_at = models.DateTimeField(auto_now_add=True, help_text="생성 일자")
    updated_at = models.DateTimeField(auto_now=True, help_text="수정 일자")

    class Meta:
        db_table = "post"
        ordering = ["-created_at"]
        verbose_name = "게시글"
        verbose_name_plural = "게시글"
