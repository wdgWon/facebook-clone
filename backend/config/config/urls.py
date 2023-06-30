from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularJSONAPIView
from drf_spectacular.views import SpectacularRedocView
from drf_spectacular.views import SpectacularSwaggerView
from drf_spectacular.views import SpectacularYAMLAPIView

urlpatterns = [
    path("docs/json/", SpectacularJSONAPIView.as_view(), name="schema-json"),
    path("docs/yaml/", SpectacularYAMLAPIView.as_view(), name="swagger-yaml"),
    # Open API Document UI로 조회: Swagger, Redoc
    path(
        "docs/swagger/",
        SpectacularSwaggerView.as_view(url_name="schema-json"),
        name="swagger-ui",
    ),
    path(
        "docs/redoc/",
        SpectacularRedocView.as_view(url_name="schema-json"),
        name="redoc",
    ),
    path("admin/", admin.site.urls),
    path("api/", include("dj_rest_auth.urls")),
    path("api/register/", include("dj_rest_auth.registration.urls")),
    path("api/", include("profiles.urls")),
    path("api/", include("post.urls")),
    path("api/", include("reply.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
