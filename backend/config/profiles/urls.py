from django.urls import path, include, re_path
from rest_framework import routers
from .views import FriendViewSet, ProfileViewSet


router = routers.DefaultRouter()
router.register("friends", FriendViewSet)
router.register("", ProfileViewSet, basename="mypage")

urlpatterns = [
    path(
        "profiles/<int:pk>/",
        ProfileViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
        name="user-profile-detail",
    ),
    path("profiles/", include(router.urls)),
]
