from rest_framework import serializers
from .models import (
    Profile, SkillCategory, Skill, Project, 
    Course, Achievement, ContactMessage
)

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['name', 'level']

class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    
    class Meta:
        model = SkillCategory
        fields = ['name', 'icon', 'color', 'skills']

class ProjectSerializer(serializers.ModelSerializer):
    tech_list = serializers.ReadOnlyField()
    image_display_url = serializers.ReadOnlyField()
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'description', 'image_display_url', 
            'tech_list', 'github_url', 'live_url', 'is_featured'
        ]

class CourseSerializer(serializers.ModelSerializer):
    skills_list = serializers.ReadOnlyField()
    
    class Meta:
        model = Course
        fields = [
            'title', 'provider', 'description', 'status', 'icon', 
            'color', 'skills_list', 'certificate_url', 'completion_date'
        ]

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['title', 'year', 'description', 'icon']

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
        
    def create(self, validated_data):
        return ContactMessage.objects.create(**validated_data)