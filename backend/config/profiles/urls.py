from django.urls import path, include
from rest_framework import routers
from .views import FriendViewSet, ProfileViewSet, SearchViewSet, MyPageView


# router = routers.DefaultRouter()
# router.register("friends", FriendViewSet)
# router.register("", ProfileViewSet)
# router.register("search", SearchViewSet)

# urlpatterns = [
#     path(
#         "profiles/<int:pk>/",
#         ProfileViewSet.as_view(
#             {"get": "retrieve", "put": "update", "delete": "destroy"}
#         ),
#         name="user-profile-detail",
#     ),
#     path("profiles/", include(router.urls)),
# ]


router = routers.DefaultRouter()
router.register("friends", FriendViewSet)
router.register("profiles", ProfileViewSet, basename="profile")
router.register("search", SearchViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("mypage/", MyPageView.as_view(), name="my-page"),
]
