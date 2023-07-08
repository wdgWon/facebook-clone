# Generated by Django 4.2.2 on 2023-06-28 12:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("post", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="post",
            old_name="LikesPeople",
            new_name="like_people",
        ),
        migrations.AlterField(
            model_name="post",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True, help_text="생성 일자"),
        ),
        migrations.AlterField(
            model_name="post",
            name="updated_at",
            field=models.DateTimeField(auto_now=True, help_text="수정 일자"),
        ),
    ]