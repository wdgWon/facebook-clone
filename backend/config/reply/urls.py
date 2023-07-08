from django.urls import path, include
from rest_framework import routers
from .views import ReplyViewSet


router = routers.DefaultRouter()
router.register("", ReplyViewSet)

urlpatterns = [
    path("reply/", include(router.urls)),
]
