# Generated by Django 4.2.2 on 2023-06-22 06:29

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("profiles", "0002_friendrequest_is_accepted"),
    ]

    operations = [
        migrations.AlterField(
            model_name="friendrequest",
            name="receiver",
            field=models.ForeignKey(
                help_text="친구 요청 수신",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="requests_received",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="friendrequest",
            name="sender",
            field=models.ForeignKey(
                help_text="친구 요청 발신",
                on_delete=django.db.models.deletion.CASCADE,
                related_name="requests_sent",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
