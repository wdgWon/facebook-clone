from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from .models import CustomUser
from dj_rest_auth.serializers import LoginSerializer


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        style={"input_type": "password"}, write_only=True, label="비밀번호"
    )
    password2 = serializers.CharField(
        style={"input_type": "password"}, write_only=True, label="비밀번호 확인"
    )

    class Meta:
        model = CustomUser
        fields = [
            "email",
            "name",
            "password",
            "password2",
        ]

    def save(self, request):
        user = CustomUser(
            email=self.validated_data["email"],
            name=self.validated_data["name"],
        )

        password = self.validated_data["password"]
        password2 = self.validated_data["password2"]

        if password != password2:
            raise serializers.ValidationError({"password": "Passwords must match."})
        user.set_password(password)
        user.save()
        return user


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required=True, allow_blank=False)
    password = serializers.CharField(style={"input_type": "password"}, write_only=True)

    class Meta:
        model = CustomUser
        fields = ["email", "password"]

    def authenticate(self, **options):
        return authenticate(self.context["request"], **options)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")
        if email and password:
            user = authenticate(
                email=email,
                password=password,
            )
            if not user:
                msg = "Incorrect credentials."
                raise serializers.ValidationError(msg, code="authorization")
        attrs["user"] = user
        return attrs


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["name", "email"]
        read_only_fields = ("email", "name")
