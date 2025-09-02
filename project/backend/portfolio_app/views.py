from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import (
    Profile, SkillCategory, Project, 
    Course, Achievement, ContactMessage
)
from .serializers import (
    ProfileSerializer, SkillCategorySerializer, ProjectSerializer,
    CourseSerializer, AchievementSerializer, ContactMessageSerializer
)

class ProfileView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
    def get_object(self):
        return Profile.objects.first()

class SkillCategoryListView(generics.ListAPIView):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class CourseListView(generics.ListAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class AchievementListView(generics.ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

@api_view(['POST'])
def contact_message_create(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {'message': 'Thank you for your message! I will get back to you soon.'}, 
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)