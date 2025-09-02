from django.urls import path
from .views import (
    ProfileView, SkillCategoryListView, ProjectListView,
    CourseListView, AchievementListView, contact_message_create
)

urlpatterns = [
    path('profile/', ProfileView.as_view(), name='profile'),
    path('skills/', SkillCategoryListView.as_view(), name='skills'),
    path('projects/', ProjectListView.as_view(), name='projects'),
    path('courses/', CourseListView.as_view(), name='courses'),
    path('achievements/', AchievementListView.as_view(), name='achievements'),
    path('contact/', contact_message_create, name='contact'),
]