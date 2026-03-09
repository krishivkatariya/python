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
            'image_url': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-s9-202309_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1693611649622',
            'stock_quantity': 50
        },
        {
            'name': 'Watch Ultra 2',
            'brand': apple,
            'category': cat_sports,
            'price': '89900.00',
            'description': 'Next level adventure. Rugged, capable, and built for extreme environments.',
            'image_url': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-ultra2-202409_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1724128549641',
            'stock_quantity': 30
        },
        {
            'name': 'Watch SE',
            'brand': apple,
            'category': cat_smart,
            'price': '29900.00',
            'description': 'Essential features to help you stay connected, active, healthy, and safe.',
            'image_url': 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-card-40-se-202409_GEO_IN_FMT_WHH?wid=340&hei=264&fmt=png-alpha&.v=1724032115167',
            'stock_quantity': 100
        },
        {
            'name': 'Submariner Date',
            'brand': rolex,
            'category': cat_luxury,
            'price': '850000.00',
            'description': 'The reference among divers’ watches. Oyster, 41 mm, Oystersteel.',
            'image_url': 'https://media.rolex.com/image/upload/q_auto:eco,f_auto,c_limit,w_800/v1/catalogue/2024/upright-c/m124060-0001',
            'stock_quantity': 5
        },
        {
            'name': 'Daytona',
            'brand': rolex,
            'category': cat_luxury,
            'price': '1250000.00',
            'description': 'Born to race. The Cosmograph Daytona is the benchmark for those with a passion for driving.',
            'image_url': 'https://media.rolex.com/image/upload/q_auto:eco,f_auto,c_limit,w_800/v1/catalogue/2024/upright-c/m126500ln-0001',
            'stock_quantity': 2
        },
        {
            'name': 'Seamaster Diver 300M',
            'brand': omega,
            'category': cat_luxury,
            'price': '450000.00',
            'description': 'Since 1993, the Seamaster Professional Diver 300M has enjoyed a legendary following.',
            'image_url': 'https://www.omegawatches.com/media/catalog/product/o/m/omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21030422001001-f2f2bc.png',
            'stock_quantity': 10
        },
        {
            'name': 'Speedmaster Moonwatch',
            'brand': omega,
            'category': cat_luxury,
            'price': '620000.00',
            'description': 'The Speedmaster is one of OMEGA’s most iconic timepieces. Having been a part of all six lunar missions.',
            'image_url': 'https://www.omegawatches.com/media/catalog/product/o/m/omega-speedmaster-moonwatch-professional-co-axial-master-chronometer-chronograph-42-mm-31030425001001-c58ee1.png',
            'stock_quantity': 8
        },
        {
            'name': 'G-Shock Mudmaster',
            'brand': casio,
            'category': cat_sports,
            'price': '24995.00',
            'description': 'Designed to withstand the harshest environments. Built for extreme conditions.',
            'image_url': 'https://www.casio.com/content/dam/casio/product-info/locales/in/en/timepiece/product/watch/G/GW/GWG/GWG-2000-1A1/assets/GWG-2000-1A1_seq1.png.transform/main-visual-pc/image.png',
            'stock_quantity': 40
        },
        {
            'name': 'Carrera Chronograph',
            'brand': tag_heuer,
            'category': cat_luxury,
            'price': '275000.00',
            'description': 'A classic yet contemporary sports watch inspired by motor racing.',
            'image_url': 'https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw1bc285c5/TAG_Heuer_Carrera_Chronograph/CBS2210.FC6534/CBS2210.FC6534_1000.png',
            'stock_quantity': 15
        },
        {
            'name': 'Nautilus',
            'brand': patek,
            'category': cat_luxury,
            'price': '3000000.00',
            'description': 'The elegant sports watch. With the rounded octagonal shape of its bezel.',
            'image_url': 'https://static.patek.com/images/articles/face_white/350/5811_1G_001.jpg',
            'stock_quantity': 1
        }
    ]

    for p in products:
        Product.objects.create(**p)
    
    print("Database seeded successfully with Categories, Brands, and Products!")

if __name__ == '__main__':
    seed_db()
