from django.contrib import admin
from .models import Product, Category

# Customizing the Category admin
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)  # Display category name in list view
    search_fields = ('name',)  # Add search box for categories

# Customizing the Product admin
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price')  # Show product name, category, and price
    list_filter = ('category',)  # Filter products by category
    search_fields = ('name',)  # Search products by name
    list_editable = ('price',)  # Allow price field to be editable inline
    list_display_links = ('name',)  # Make product name clickable for editing

admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)