from django.shortcuts import render, redirect
from .forms import UserRegistrationForm
from django.contrib.auth import login
from .models import Product

def home(request):
    # Fetch all products for display on the home page
    products = Product.objects.all()
    return render(request, 'bakery/home.html', {'products': products})

def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password'])
            user.save()
            login(request, user)  # Log the user in after registration
            return redirect('home')  # Redirect to home after registration
    else:
        form = UserRegistrationForm()  # Get a blank form for GET request

    return render(request, 'bakery/register.html', {'form': form})  # Render registration page