from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("dj_rest_auth.urls")),
    path("api/register/", include("dj_rest_auth.registration.urls")),
]
