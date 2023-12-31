# Generated by Django 4.2.2 on 2023-06-28 09:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Post",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(help_text="제목", max_length=500)),
                ("content", models.TextField(help_text="내용")),
                (
                    "image",
                    models.ImageField(
                        blank=True,
                        help_text="이미지 업로드",
                        null=True,
                        upload_to="post/%Y/%m/",
                    ),
                ),
                ("like", models.PositiveSmallIntegerField(default=0, help_text="좋아요")),
                (
                    "created_at",
                    models.DateTimeField(auto_now_add=True, help_text="CREATE DT"),
                ),
                (
                    "updated_at",
                    models.DateTimeField(auto_now=True, help_text="UPDATE DT"),
                ),
                (
                    "LikesPeople",
                    models.ManyToManyField(
                        help_text="좋아요를 누른 사람들",
                        related_name="like_people",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "writer",
                    models.ForeignKey(
                        help_text="작성자",
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "verbose_name": "게시글",
                "verbose_name_plural": "게시글",
                "db_table": "post",
                "ordering": ["-created_at"],
            },
        ),
    ]
