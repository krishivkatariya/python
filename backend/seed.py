import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from products.models import Brand, Category, Product

def seed_db():
    print("Clearing old data...")
    Product.objects.all().delete()
    Brand.objects.all().delete()
    Category.objects.all().delete()

    print("Creating Categories...")
    cat_smart, _ = Category.objects.get_or_create(name='Smartwatches')
    cat_luxury, _ = Category.objects.get_or_create(name='Luxury')
    cat_sports, _ = Category.objects.get_or_create(name='Sports')

    print("Creating Brands...")
    apple, _ = Brand.objects.get_or_create(name='Apple')
    rolex, _ = Brand.objects.get_or_create(name='Rolex')
    omega, _ = Brand.objects.get_or_create(name='Omega')

    print("Creating Products...")
    products = [
        {
            'name': 'Watch Series 9',
            'brand': apple,
            'category': cat_smart,
            'price': '399.00',
            'description': 'Smarter. Brighter. Mightier. The most advanced Apple Watch yet.',
            'image_url': 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 50
        },
        {
            'name': 'Watch Ultra 2',
            'brand': apple,
            'category': cat_sports,
            'price': '799.00',
            'description': 'Next level adventure. Rugged, capable, and built for extreme environments.',
            'image_url': 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 30
        },
        {
            'name': 'Submariner Date',
            'brand': rolex,
            'category': cat_luxury,
            'price': '10250.00',
            'description': 'The reference among divers’ watches. Oyster, 41 mm, Oystersteel.',
            'image_url': 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 5
        },
        {
            'name': 'Seamaster Diver 300M',
            'brand': omega,
            'category': cat_luxury,
            'price': '5400.00',
            'description': 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.',
            'image_url': 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 10
        }
    ]

    for p in products:
        Product.objects.create(**p)
    
    print("Database seeded successfully with Categories, Brands, and Products!")

if __name__ == '__main__':
    seed_db()
