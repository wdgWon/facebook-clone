# Generated by Django 4.2.2 on 2023-06-24 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0006_alter_friendrequest_options_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="userprofile",
            name="friend_request",
            field=models.BooleanField(default=False, help_text="친구 요청"),
        ),
        migrations.AlterField(
            model_name="userprofile",
            name="friends",
            field=models.ManyToManyField(
                blank=True, help_text="친구 목록", to="profiles.userprofile"
            ),
        ),
        migrations.AlterField(
            model_name="userprofile",
            name="profile_image",
            field=models.ImageField(
                blank=True, help_text="프로필 사진", null=True, upload_to="uploads"
            ),
        ),
    ]
