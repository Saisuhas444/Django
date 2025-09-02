from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Profile(models.Model):
    name = models.CharField(max_length=100, default="Saisuhas")
    title = models.CharField(max_length=200, default="Django Developer")
    bio = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume = models.FileField(upload_to='resume/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profile"

class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, help_text="Lucide icon name")
    color = models.CharField(max_length=50, default="text-green-400")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['order']
        verbose_name = "Skill Category"
        verbose_name_plural = "Skill Categories"

class Skill(models.Model):
    category = models.ForeignKey(SkillCategory, on_delete=models.CASCADE, related_name='skills')
    name = models.CharField(max_length=100)
    level = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        help_text="Skill level from 0 to 100"
    )
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} ({self.level}%)"

    class Meta:
        ordering = ['order']

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    image_url = models.URLField(blank=True, help_text="External image URL if not uploading")
    technologies = models.CharField(max_length=500, help_text="Comma-separated list of technologies")
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    is_featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    @property
    def tech_list(self):
        return [tech.strip() for tech in self.technologies.split(',') if tech.strip()]

    @property
    def image_display_url(self):
        if self.image:
            return self.image.url
        return self.image_url

    class Meta:
        ordering = ['-is_featured', 'order', '-created_at']

class Course(models.Model):
    STATUS_CHOICES = [
        ('completed', 'Completed'),
        ('in_progress', 'In Progress'),
        ('planned', 'Planned'),
    ]

    title = models.CharField(max_length=200)
    provider = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='completed')
    icon = models.CharField(max_length=50, help_text="Lucide icon name", default="BookOpen")
    color = models.CharField(max_length=50, default="text-blue-400")
    skills_learned = models.CharField(max_length=500, help_text="Comma-separated list of skills")
    certificate_url = models.URLField(blank=True)
    completion_date = models.DateField(blank=True, null=True)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    @property
    def skills_list(self):
        return [skill.strip() for skill in self.skills_learned.split(',') if skill.strip()]

    class Meta:
        ordering = ['order', '-completion_date']

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    year = models.CharField(max_length=4)
    description = models.TextField(blank=True)
    icon = models.CharField(max_length=50, help_text="Lucide icon name", default="Award")
    order = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.title} ({self.year})"

    class Meta:
        ordering = ['order', '-year']

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Contact Message"
        verbose_name_plural = "Contact Messages"