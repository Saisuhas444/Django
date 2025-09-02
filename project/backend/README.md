# Saisuhas Portfolio Backend

Django REST API backend for the portfolio website.

## Setup Instructions

1. **Create Virtual Environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Database Setup**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create Superuser**
   ```bash
   python manage.py createsuperuser
   ```

6. **Load Initial Data**
   ```bash
   python setup_data.py
   ```

7. **Run Development Server**
   ```bash
   python manage.py runserver
   ```

## API Endpoints

- `GET /api/profile/` - Get profile information
- `GET /api/skills/` - Get skills by category
- `GET /api/projects/` - Get all projects
- `GET /api/courses/` - Get courses and learning
- `GET /api/achievements/` - Get achievements
- `POST /api/contact/` - Submit contact form

## Admin Interface

Access the Django admin at `http://localhost:8000/admin/` to manage:
- Profile information
- Skills and categories
- Projects
- Courses and learning
- Achievements
- Contact messages

## Deployment

The backend is configured for easy deployment with:
- WhiteNoise for static files
- Environment-based configuration
- PostgreSQL support
- Gunicorn WSGI server