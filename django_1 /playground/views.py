from django.shortcuts import render

def say_hello(request):
    return render(request, 'hello.html', {'name': 'Mosh'})

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Storefront!")

from django.shortcuts import render
from .forms import ProductForm

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            product = form.save()
            return render(request, 'product_added.html', {'product': product})
    else:
        form = ProductForm()
    return render(request, 'add_product.html', {'form': form})