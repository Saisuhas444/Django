from django.contrib import admin
from .models import (
    Profile, SkillCategory, Skill, Project, 
    Course, Achievement, ContactMessage
)

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'email', 'updated_at']
    fields = [
        'name', 'title', 'bio', 'email', 'phone', 'location',
        'github_url', 'linkedin_url', 'twitter_url', 
        'profile_image', 'resume'
    ]

class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1
    fields = ['name', 'level', 'order']

@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'color', 'order']
    list_editable = ['order']
    inlines = [SkillInline]

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'level', 'order']
    list_filter = ['category']
    list_editable = ['level', 'order']

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_featured', 'order', 'created_at']
    list_filter = ['is_featured', 'created_at']
    list_editable = ['is_featured', 'order']
    search_fields = ['title', 'description', 'technologies']
    fields = [
        'title', 'description', 'image', 'image_url', 'technologies',
        'github_url', 'live_url', 'is_featured', 'order'
    ]

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'provider', 'status', 'completion_date', 'order']
    list_filter = ['status', 'completion_date']
    list_editable = ['status', 'order']
    search_fields = ['title', 'provider', 'skills_learned']
    fields = [
        'title', 'provider', 'description', 'status', 'icon', 'color',
        'skills_learned', 'certificate_url', 'completion_date', 'order'
    ]

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['title', 'year', 'order']
    list_editable = ['order']
    search_fields = ['title', 'description']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    list_editable = ['is_read']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    
    def has_add_permission(self, request):
        return False