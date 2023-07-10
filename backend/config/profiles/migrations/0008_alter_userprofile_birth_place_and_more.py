# Generated by Django 4.2.2 on 2023-07-09 12:40

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('profiles', '0007_userprofile_friend_request_alter_userprofile_friends_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='birth_place',
            field=models.CharField(default='', help_text='출생지', max_length=255),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='company',
            field=models.CharField(default='', help_text='직장', max_length=100),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='education',
            field=models.CharField(default='', help_text='학력', max_length=50),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='friends',
            field=models.ManyToManyField(blank=True, default='', help_text='친구 목록', to='profiles.userprofile'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='mobile_phone',
            field=models.CharField(default='', help_text='연락처', max_length=32, validators=[django.core.validators.RegexValidator(regex='\\d{2,3}-\\d{3,4}-\\d{4}')]),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='myself',
            field=models.TextField(default='', help_text='소개글'),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='profile_user',
            field=models.OneToOneField(default='', on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='userprofile',
            name='residence',
            field=models.CharField(default='', help_text='거주지', max_length=255),
        ),
    ]