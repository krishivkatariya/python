from django.contrib import admin
from .models import Category, Brand, Product, Review

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'brand', 'category', 'price', 'stock_quantity')
    list_filter = ('brand', 'category')
    search_fields = ('name', 'model_number')

admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Product, ProductAdmin)
admin.site.register(Review)
