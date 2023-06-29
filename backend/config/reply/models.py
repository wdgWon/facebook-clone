from django.db import models
from post.models import Post
from accounts.models import CustomUser


class Reply(models.Model):
    writer = models.ForeignKey(CustomUser, on_delete=models.CASCADE, help_text="댓글 작성자")
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, blank=True, null=True, help_text="댓글 작성중인 게시글"
    )
    comment = models.TextField(help_text="댓글")
    created_at = models.DateTimeField("생성 일자", auto_now_add=True)
    updated_at = models.DateTimeField("수정 일자", auto_now=True)

    class Meta:
        db_table = "reply"
        ordering = ["-created_at"]
        verbose_name = "댓글"
        verbose_name_plural = "댓글"
