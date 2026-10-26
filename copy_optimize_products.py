import os
import shutil
from PIL import Image

mapping = {
    'pizza-bread.png': 'assets/final/pizza_bread.png',
    'pizza-box-floating.png': 'assets/final/pizza_box_floating.png',
    'roti-abon.png': 'assets/final/roti_abon.png',
    'floss-roll.png': 'assets/final/floss_roll.png',
    'creamy-mushroom.png': 'assets/crops/creamy_mushroom_lifted.png',
    'strawberry-cream-bun.png': 'assets/final/strawberry_choux.png',
    'strawberry-cheese-bun.png': 'assets/final/strawberry_cheese_bun.png',
    'mango-cream-bun.png': 'assets/final/mango_choux.png',
    'cranberry-cheese-sourdough.png': 'assets/final/cranberry_sourdough_cut.png',
    'cranberry-sourdough-loaf.png': 'assets/final/cranberry_sourdough_loaf.png',
    'double-choco-bread.png': 'assets/final/twisted_choco.png',
    'double-choco-loaf.png': 'assets/final/double_choco_loaf.png',
    'bluezi-cat-mascot.png': 'assets/final/cat_mascot.png',
}

os.makedirs('assets/products', exist_ok=True)

for dest, src in mapping.items():
    if os.path.exists(src):
        img = Image.open(src)
        # trim transparent borders
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
        # resize nicely if huge (e.g. max dimension 1000px for web speed and crisp retina clarity)
        img.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
        out_path = os.path.join('assets/products', dest)
        img.save(out_path, optimize=True)
        print(f"Saved {out_path} ({img.size})")

