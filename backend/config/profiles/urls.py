from django.urls import path, include
from rest_framework import routers
from .views import FriendViewSet, ProfileViewSet, SearchViewSet, MyPageView


router = routers.DefaultRouter()
router.register("friends", FriendViewSet)
router.register("profiles", ProfileViewSet, basename="profile")
router.register("search", SearchViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("mypage/", MyPageView.as_view(), name="my-page"),
]
