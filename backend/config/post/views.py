from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import PostCreateSerializer, PostSerializer
from .models import Post


class PostViewSets(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        commentList = instance.reply_set.all()

        serializer = self.get_serializer(instance)

        return Response(serializer.data)

    @action(detail=True, methods=["patch"], name="like")
    def like(self, request, pk=None):
        """게시물 좋아요 버튼 클릭 했을 때 액션"""
        post = self.get_object()
        user = request.user

        if post.like_people.filter(id=user.id).exists():
            post.like_people.remove(user.id)
            post.like -= 1
        else:
            post.like_people.add(user.id)
            post.like += 1

        post.save()
        return Response(status=status.HTTP_200_OK)

    def create(self, request, *args, **kwargs):
        request_data = request.data.copy()
        request_data["writer"] = request.user.id
        serializer = self.get_serializer(data=request_data)
        serializer.is_valid(raise_exception=True)
        saved_profile = serializer.save(writer=request.user)

        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def get_serializer_class(self):
        if self.action in ("create", "update"):
            return PostCreateSerializer

        return PostSerializer
