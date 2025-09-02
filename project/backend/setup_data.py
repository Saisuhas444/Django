#!/usr/bin/env python
"""
Script to populate the database with initial data for Saisuhas portfolio
Run this after migrations: python setup_data.py
"""
import os
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')
django.setup()

from portfolio_app.models import (
    Profile, SkillCategory, Skill, Project, 
    Course, Achievement
)

def create_profile():
    profile, created = Profile.objects.get_or_create(
        defaults={
            'name': 'Saisuhas',
            'title': 'Django Developer',
            'bio': '''Hello! I'm Saisuhas, a passionate Django developer with a strong foundation in Python and backend development. I specialize in building robust, scalable web applications that solve real-world problems. My journey in web development has been driven by curiosity and a desire to create meaningful digital experiences.''',
            'email': 'saisuhas@example.com',
            'phone': '+91 9876543210',
            'location': 'India',
            'github_url': 'https://github.com/saisuhas',
            'linkedin_url': 'https://linkedin.com/in/saisuhas',
            'twitter_url': 'https://twitter.com/saisuhas',
        }
    )
    print(f"Profile {'created' if created else 'updated'}: {profile.name}")

def create_skills():
    # Backend Development
    backend_category, _ = SkillCategory.objects.get_or_create(
        name="Backend Development",
        defaults={
            'icon': 'Server',
            'color': 'text-green-400',
            'order': 1
        }
    )
    
    backend_skills = [
        ('Django', 90),
        ('Python', 95),
        ('Django REST', 85),
        ('FastAPI', 75)
    ]
    
    for skill_name, level in backend_skills:
        Skill.objects.get_or_create(
            category=backend_category,
            name=skill_name,
            defaults={'level': level}
        )
    
    # Database
    db_category, _ = SkillCategory.objects.get_or_create(
        name="Database",
        defaults={
            'icon': 'Database',
            'color': 'text-blue-400',
            'order': 2
        }
    )
    
    db_skills = [
        ('PostgreSQL', 85),
        ('MySQL', 80),
        ('SQLite', 90),
        ('Redis', 70)
    ]
    
    for skill_name, level in db_skills:
        Skill.objects.get_or_create(
            category=db_category,
            name=skill_name,
            defaults={'level': level}
        )
    
    # Frontend
    frontend_category, _ = SkillCategory.objects.get_or_create(
        name="Frontend",
        defaults={
            'icon': 'Globe',
            'color': 'text-purple-400',
            'order': 3
        }
    )
    
    frontend_skills = [
        ('HTML/CSS', 85),
        ('JavaScript', 80),
        ('React', 75),
        ('Bootstrap', 85)
    ]
    
    for skill_name, level in frontend_skills:
        Skill.objects.get_or_create(
            category=frontend_category,
            name=skill_name,
            defaults={'level': level}
        )
    
    # DevOps & Tools
    devops_category, _ = SkillCategory.objects.get_or_create(
        name="DevOps & Tools",
        defaults={
            'icon': 'Zap',
            'color': 'text-yellow-400',
            'order': 4
        }
    )
    
    devops_skills = [
        ('Docker', 75),
        ('Git', 90),
        ('Linux', 80),
        ('AWS', 65)
    ]
    
    for skill_name, level in devops_skills:
        Skill.objects.get_or_create(
            category=devops_category,
            name=skill_name,
            defaults={'level': level}
        )
    
    print("Skills created successfully!")

def create_projects():
    projects_data = [
        {
            'title': 'E-Commerce Platform',
            'description': 'Full-featured e-commerce platform built with Django, featuring user authentication, payment integration, order management, and admin dashboard.',
            'technologies': 'Django, PostgreSQL, Stripe API, Bootstrap',
            'image_url': 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
            'github_url': '#',
            'live_url': '#',
            'is_featured': True,
            'order': 1
        },
        {
            'title': 'Task Management API',
            'description': 'RESTful API for task management with user authentication, team collaboration features, and real-time notifications using Django REST Framework.',
            'technologies': 'Django REST, Celery, Redis, JWT',
            'image_url': 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
            'github_url': '#',
            'live_url': '#',
            'is_featured': True,
            'order': 2
        },
        {
            'title': 'Blog Platform',
            'description': 'Modern blog platform with rich text editor, comment system, user profiles, and social media integration built with Django.',
            'technologies': 'Django, MySQL, CKEditor, Bootstrap',
            'image_url': 'https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
            'github_url': '#',
            'live_url': '#',
            'is_featured': False,
            'order': 3
        },
        {
            'title': 'Real Estate Portal',
            'description': 'Property listing website with advanced search filters, user dashboards, and integrated mapping functionality.',
            'technologies': 'Django, PostgreSQL, Google Maps API, jQuery',
            'image_url': 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
            'github_url': '#',
            'live_url': '#',
            'is_featured': False,
            'order': 4
        }
    ]
    
    for project_data in projects_data:
        Project.objects.get_or_create(
            title=project_data['title'],
            defaults=project_data
        )
    
    print("Projects created successfully!")

def create_courses():
    courses_data = [
        {
            'title': 'Advanced Django Development',
            'provider': 'Django Official Documentation',
            'description': 'Comprehensive course covering advanced Django concepts and best practices.',
            'status': 'completed',
            'icon': 'Code',
            'color': 'text-green-400',
            'skills_learned': 'Django ORM, Custom User Models, Advanced Queries, Performance Optimization',
            'order': 1
        },
        {
            'title': 'Python Web Development Bootcamp',
            'provider': 'Online Platform',
            'description': 'Intensive bootcamp covering full-stack Python web development.',
            'status': 'completed',
            'icon': 'BookOpen',
            'color': 'text-blue-400',
            'skills_learned': 'Flask, Django, SQLAlchemy, RESTful APIs',
            'order': 2
        },
        {
            'title': 'Database Design & Management',
            'provider': 'University Course',
            'description': 'Academic course focusing on database design principles and management.',
            'status': 'completed',
            'icon': 'Award',
            'color': 'text-purple-400',
            'skills_learned': 'PostgreSQL, Database Optimization, Query Performance, Data Modeling',
            'order': 3
        },
        {
            'title': 'Cloud Computing with AWS',
            'provider': 'AWS Training',
            'description': 'Learning cloud deployment and management with Amazon Web Services.',
            'status': 'in_progress',
            'icon': 'Zap',
            'color': 'text-yellow-400',
            'skills_learned': 'EC2, RDS, S3, Lambda Functions',
            'order': 4
        }
    ]
    
    for course_data in courses_data:
        Course.objects.get_or_create(
            title=course_data['title'],
            defaults=course_data
        )
    
    print("Courses created successfully!")

def create_achievements():
    achievements_data = [
        {
            'title': 'Django Certified Developer',
            'year': '2023',
            'description': 'Official Django certification demonstrating advanced framework knowledge.',
            'icon': 'Award',
            'order': 1
        },
        {
            'title': 'Python Programming Certificate',
            'year': '2022',
            'description': 'Comprehensive Python programming certification.',
            'icon': 'Award',
            'order': 2
        },
        {
            'title': 'Web Development Bootcamp Graduate',
            'year': '2022',
            'description': 'Successfully completed intensive web development bootcamp.',
            'icon': 'Award',
            'order': 3
        },
        {
            'title': 'Database Administration Certified',
            'year': '2023',
            'description': 'Professional certification in database administration and optimization.',
            'icon': 'Award',
            'order': 4
        }
    ]
    
    for achievement_data in achievements_data:
        Achievement.objects.get_or_create(
            title=achievement_data['title'],
            defaults=achievement_data
        )
    
    print("Achievements created successfully!")

if __name__ == '__main__':
    print("Setting up portfolio data...")
    create_profile()
    create_skills()
    create_projects()
    create_courses()
    create_achievements()
    print("Portfolio data setup completed!")