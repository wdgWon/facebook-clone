# Generated by Django 4.2.2 on 2023-06-24 09:59

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("profiles", "0005_alter_userprofile_birth_place_and_more"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="friendrequest",
            options={"verbose_name": "친구 요청", "verbose_name_plural": "친구 요청"},
        ),
        migrations.AlterModelOptions(
            name="userprofile",
            options={"verbose_name": "프로필", "verbose_name_plural": "프로필"},
        ),
        migrations.AlterField(
            model_name="userprofile",
            name="mobile_phone",
            field=models.CharField(
                help_text="연락처",
                max_length=32,
                validators=[
                    django.core.validators.RegexValidator(
                        regex="\\d{2,3}-\\d{3,4}-\\d{4}"
                    )
                ],
            ),
        ),
    ]
