from django.urls import path
from .views import home, register

urlpatterns = [
    path('', home, name='home'),
    path('register/', register, name='register'),
]
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('bakery.urls')),  # Ensure this line is present
]