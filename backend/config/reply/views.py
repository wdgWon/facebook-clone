from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import ReplySerializer
from .models import Reply


class ReplyViewSet(viewsets.ModelViewSet):
    model = Reply
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer

    def create(self, request, *args, **kwargs):
        request_data = request.data.copy()
        request_data["writer"] = request.user.id
        serializer = self.get_serializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        saved_profile = serializer.save(writer=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)
