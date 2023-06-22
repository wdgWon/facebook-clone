from django.urls import path, include
from . import views
from rest_framework import routers
from .views import FriendViewSet, ProfileViewSet


router = routers.DefaultRouter()
router.register("friends", FriendViewSet)
router.register("profiles", ProfileViewSet)


urlpatterns = [
    path("profiles/", include(router.urls)),
]
