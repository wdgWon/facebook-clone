from django.db import models
from accounts.models import CustomUser
from django.core.validators import RegexValidator


class UserProfile(models.Model):
    """
    1. 유저 외래 키 값
    2. 소개
    3. 전화번호
    4. 직장
    5. 학력
    6. 거주지
    7. 출생지
    8. 친구목록
    """

    profile_user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    myself = models.TextField(help_text="소개글")
    mobile_phone = models.CharField(
        max_length=32,
        help_text="연락처",
        validators=[RegexValidator(regex=r"\d{2,3}-\d{3,4}-d{4}")],
    )
    company = models.CharField(max_length=100, help_text="직장")
    education = models.CharField(max_length=50, help_text="학력")
    residence = models.CharField(max_length=255, help_text="거주지")
    birth_place = models.CharField(max_length=255, help_text="출생지")
    friends = models.ManyToManyField("self", blank=True)
    profile_image = models.ImageField(blank=True, null=True, upload_to="uploads")


class FriendRequest(models.Model):
    sender = models.ForeignKey(
        CustomUser,
        related_name="requests_sent",
        on_delete=models.CASCADE,
        help_text="친구 요청 발신",
    )
    receiver = models.ForeignKey(
        CustomUser,
        related_name="requests_received",
        on_delete=models.CASCADE,
        help_text="친구 요청 수신",
    )
    created_at = models.DateTimeField(auto_now_add=True, help_text="친구 요청 발생 시간")
    is_accepted = models.BooleanField(default=False, help_text="친구 요청 수락 여부")
