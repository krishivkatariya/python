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
    casio, _ = Brand.objects.get_or_create(name='Casio')
    tag_heuer, _ = Brand.objects.get_or_create(name='TAG Heuer')
    patek, _ = Brand.objects.get_or_create(name='Patek Philippe')


    print("Creating Products...")
    products = [
        {
            'name': 'Watch Series 9',
            'brand': apple,
            'category': cat_smart,
            'price': '41900.00',
            'description': 'Smarter. Brighter. Mightier. The most advanced Apple Watch yet.',
            'image_url': 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 50
        },
        {
            'name': 'Watch Ultra 2',
            'brand': apple,
            'category': cat_sports,
            'price': '89900.00',
            'description': 'Next level adventure. Rugged, capable, and built for extreme environments.',
            'image_url': 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 30
        },
        {
            'name': 'Watch SE',
            'brand': apple,
            'category': cat_smart,
            'price': '29900.00',
            'description': 'Essential features to help you stay connected, active, healthy, and safe.',
            'image_url': 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 100
        },
        {
            'name': 'Submariner Date',
            'brand': rolex,
            'category': cat_luxury,
            'price': '850000.00',
            'description': 'The reference among divers’ watches. Oyster, 41 mm, Oystersteel.',
            'image_url': '/images/submariner.png',
            'stock_quantity': 5
        },
        {
            'name': 'Daytona',
            'brand': rolex,
            'category': cat_luxury,
            'price': '1250000.00',
            'description': 'Born to race. The Cosmograph Daytona is the benchmark for those with a passion for driving.',
            'image_url': '/images/daytona.png',
            'stock_quantity': 2
        },
        {
            'name': 'Seamaster Diver 300M',
            'brand': omega,
            'category': cat_luxury,
            'price': '450000.00',
            'description': 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.',
            'image_url': 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600',
            'stock_quantity': 10
        },
        {
            'name': 'Speedmaster Moonwatch',
            'brand': omega,
            'category': cat_luxury,
            'price': '620000.00',
            'description': 'The Speedmaster is one of OMEGA’s most iconic timepieces. Having been a part of all six lunar missions.',
            'image_url': '/images/speedmaster.png',
            'stock_quantity': 8
        },
        {
            'name': 'G-Shock Mudmaster',
            'brand': casio,
            'category': cat_sports,
            'price': '24995.00',
            'description': 'Designed to withstand the harshest environments. Built for extreme conditions.',
            'image_url': '/images/gshock.png',
            'stock_quantity': 40
        },
        {
            'name': 'Carrera Chronograph',
            'brand': tag_heuer,
            'category': cat_luxury,
            'price': '275000.00',
            'description': 'A classic yet contemporary sports watch inspired by motor racing.',
            'image_url': '/images/carrera.png',
            'stock_quantity': 15
        },
        {
            'name': 'Nautilus',
            'brand': patek,
            'category': cat_luxury,
            'price': '3000000.00',
            'description': 'The elegant sports watch. With the rounded octagonal shape of its bezel.',
            'image_url': '/images/nautilus.png',
            'stock_quantity': 1
        },
        {
            'name': 'GMT-Master II',
            'brand': rolex,
            'category': cat_luxury,
            'price': '950000.00',
            'description': 'Designed to show the time in two different time zones simultaneously.',
            'image_url': '/images/gmt_master.png',
            'stock_quantity': 3
        },
        {
            'name': 'Aqua Terra 150M',
            'brand': omega,
            'category': cat_luxury,
            'price': '550000.00',
            'description': 'A superb tribute to OMEGA’s rich maritime heritage.',
            'image_url': '/images/aqua_terra.png',
            'stock_quantity': 5
        },
        {
            'name': 'Vintage Calculator',
            'brand': casio,
            'category': cat_sports,
            'price': '4500.00',
            'description': 'The iconic 80s retro digital watch with a built-in calculator.',
            'image_url': '/images/casio_vintage.png',
            'stock_quantity': 150
        },
        {
            'name': 'Monaco',
            'brand': tag_heuer,
            'category': cat_luxury,
            'price': '650000.00',
            'description': 'The timeless classic worn by Steve McQueen, featuring a square case.',
            'image_url': '/images/monaco.png',
            'stock_quantity': 4
        },
        {
            'name': 'Aquanaut',
            'brand': patek,
            'category': cat_luxury,
            'price': '2500000.00',
            'description': 'Modern, sporty, and chic. The perfect luxury sports watch.',
            'image_url': '/images/aquanaut.png',
            'stock_quantity': 2
        },
        {
            'name': 'Watch Hermès',
            'brand': apple,
            'category': cat_smart,
            'price': '114900.00',
            'description': 'A partnership based on parallel thinking, singular vision, and mutual regard.',
            'image_url': '/images/hermes.png',
            'stock_quantity': 10
        }
    ]

    for p in products:
        Product.objects.create(**p)
    
    print("Database seeded successfully with Categories, Brands, and Products!")

if __name__ == '__main__':
    seed_db()
