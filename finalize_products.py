import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

os.makedirs('assets/products', exist_ok=True)
os.makedirs('assets/editorial', exist_ok=True)

img1 = Image.open('SnapInsta.to_856673039_17893624050615342_2972369678357902641_n.jpg')
img2 = Image.open('SnapInsta.to_857693051_17893624074615342_8301092112332983726_n.jpg')
img3 = Image.open('SnapInsta.to_857957192_17893624014615342_3943538059298994349_n.jpg')
img4 = Image.open('SnapInsta.to_864581226_17893624029615342_6474983756287786211_n.jpg')

# 1. PIZZA BREAD
# Cutout: assets/final/pizza_bread.png and pizza_box_floating.png
# Editorial photo:
editorial_pizza = img1.crop((900, 1150, 1850, 2600))
editorial_pizza.save('assets/editorial/pizza_tray.jpg', quality=90)

# 2. ROTI ABON
# Cutout: assets/final/roti_abon.png
editorial_abon = img3.crop((80, 50, 480, 450)) # tray of packaged buns
editorial_abon_tray = img3.crop((70, 70, 470, 420))
editorial_abon.save('assets/editorial/abon_tray.jpg', quality=90)

# 3. CREAMY MUSHROOM
# Let's crop the center bun cleanly and lift it
crop_mush_clean = img3.crop((1500, 2180, 2180, 2800))
crop_mush_clean.save('assets/crops/mush_clean.jpg', quality=95)
editorial_mush = img3.crop((700, 1650, 2150, 2800))
editorial_mush.save('assets/editorial/mushroom_tray.jpg', quality=90)

# 4. STRAWBERRY CREAM BUN (Choux)
# Cutout: assets/final/strawberry_choux.png
editorial_choux_case = img4.crop((1500, 1600, 2295, 2750))
editorial_choux_case.save('assets/editorial/choux_display.jpg', quality=90)

# 5. MANGO CREAM BUN (Choux)
# Cutout: assets/final/mango_choux.png

# 6. CRANBERRY CHEESE SOURDOUGH
# Cutout: assets/final/cranberry_sourdough_cut.png and loaves
editorial_sourdough = img4.crop((0, 1100, 950, 2150))
editorial_sourdough.save('assets/editorial/cranberry_sourdough_tray.jpg', quality=90)

# 7. DOUBLE CHOCO BREAD (Twisted choco & double choco loaf)
# Cutout: assets/final/twisted_choco.png
editorial_choco = img2.crop((1050, 1550, 1950, 2650))
editorial_choco.save('assets/editorial/choco_tray.jpg', quality=90)
editorial_choco_loaf = img4.crop((450, 100, 1250, 1150))
editorial_choco_loaf.save('assets/editorial/choco_loaf_box.jpg', quality=90)

print("Editorial photos created successfully!")
