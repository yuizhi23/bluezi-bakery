import os
from PIL import Image
import numpy as np

os.makedirs('assets/final', exist_ok=True)
img3 = Image.open('SnapInsta.to_857957192_17893624014615342_3943538059298994349_n.jpg')
img4 = Image.open('SnapInsta.to_864581226_17893624029615342_6474983756287786211_n.jpg')

# 6. Creamy Mushroom:
crop_mush2 = img3.crop((850, 2220, 1460, 2830))
crop_mush2.save('assets/crops/creamy_mush_center.jpg', quality=95)

# 7. Sourdough Cranberry cut
cran_cut = Image.open('assets/crops/cranberry_sourdough_cut_lifted.png')
bbox = cran_cut.getbbox()
if bbox:
    cran_cut = cran_cut.crop(bbox)
cran_cut.save('assets/final/cranberry_sourdough_cut.png')

# 8. Sourdough loaf
crop_cran_single = img4.crop((30, 1400, 930, 2150))
crop_cran_single.save('assets/crops/cranberry_loaf_single.jpg', quality=95)

# 9. Double Choco sourdough loaf
double_choco = Image.open('assets/crops/double_choco_loaf_lifted.png')
bbox = double_choco.getbbox()
if bbox:
    double_choco = double_choco.crop(bbox)
double_choco.save('assets/final/double_choco_loaf.png')

# 10. Cat mascot
cat = Image.open('assets/crops/cat_mascot_lifted.png')
bbox = cat.getbbox()
if bbox:
    cat = cat.crop(bbox)
cat.save('assets/final/cat_mascot.png')

print("All base images processed!")
