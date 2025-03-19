from django.urls import path
from playground import views

urlpatterns = [
    path('', views.home),  # Handles the root URL
    path('playground/hello/', views.say_hello),
]

from django.contrib import admin
from django.urls import path
from playground import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('playground/add-product/', views.add_product),
]