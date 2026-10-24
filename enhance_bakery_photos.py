import os
import numpy as np
from PIL import Image, ImageFilter, ImageEnhance, ImageOps, ImageChops

# Product list and specific tone adjustments
PRODUCTS = [
    {
        'id': 'pizza-bread',
        'file': 'pizza-bread.png',
        'name': 'Pizza Bread',
        'category': 'savory',
        # Subtle color correction parameters
        'blue_lift': 1.45,       # Normalize heavy orange cast
        'red_dampen': 0.96,
        'contrast': 1.08,
        'brightness': 1.02,
        'saturation': 0.94,
        'sharpness': 1.25,
        'shadow_width': 0.82,
        'shadow_offset_y': 6,
    },
    {
        'id': 'roti-abon',
        'file': 'roti-abon.png',
        'name': 'Roti Abon',
        'category': 'savory',
        'blue_lift': 1.55,       # Abon was very dark orange-brown
        'red_dampen': 0.95,
        'contrast': 1.10,
        'brightness': 1.06,
        'saturation': 0.92,
        'sharpness': 1.30,
        'shadow_width': 0.85,
        'shadow_offset_y': 6,
    },
    {
        'id': 'creamy-mushroom',
        'file': 'creamy-mushroom.png',
        'name': 'Creamy Mushroom',
        'category': 'savory',
        'blue_lift': 1.35,
        'red_dampen': 0.98,
        'contrast': 1.06,
        'brightness': 1.03,
        'saturation': 0.95,
        'sharpness': 1.25,
        'shadow_width': 0.80,
        'shadow_offset_y': 6,
    },
    {
        'id': 'strawberry-cream-bun',
        'file': 'strawberry-cream-bun.png',
        'name': 'Strawberry Cream Bun',
        'category': 'sweet',
        'blue_lift': 1.45,       # Clean white cream and ruby strawberries
        'red_dampen': 0.96,
        'contrast': 1.08,
        'brightness': 1.04,
        'saturation': 0.95,
        'sharpness': 1.25,
        'shadow_width': 0.78,
        'shadow_offset_y': 6,
    },
    {
        'id': 'strawberry-cream-cheese',
        'file': 'strawberry-cream-cheese.png',
        'name': 'Strawberry Cream Cheese',
        'category': 'sweet',
        'blue_lift': 1.35,
        'red_dampen': 0.97,
        'contrast': 1.06,
        'brightness': 1.03,
        'saturation': 0.94,
        'sharpness': 1.22,
        'shadow_width': 0.82,
        'shadow_offset_y': 6,
    },
    {
        'id': 'mango-cream-bun',
        'file': 'mango-cream-bun.png',
        'name': 'Mango Cream Bun',
        'category': 'sweet',
        'blue_lift': 1.40,
        'red_dampen': 0.96,
        'contrast': 1.07,
        'brightness': 1.04,
        'saturation': 0.96,
        'sharpness': 1.25,
        'shadow_width': 0.80,
        'shadow_offset_y': 6,
    },
    {
        'id': 'cranberry-cheese-sourdough',
        'file': 'cranberry-cheese-sourdough.png',
        'name': 'Cranberry Cheese Sourdough',
        'category': 'sourdough',
        'blue_lift': 1.15,       # Sourdough already had natural balanced tones
        'red_dampen': 0.99,
        'contrast': 1.08,
        'brightness': 1.02,
        'saturation': 0.98,
        'sharpness': 1.28,
        'shadow_width': 0.88,
        'shadow_offset_y': 8,
    },
    {
        'id': 'double-choco',
        'file': 'double-choco.png',
        'name': 'Double Choco Bread',
        'category': 'sweet',
        'blue_lift': 1.30,       # Dark chocolate glaze definition
        'red_dampen': 0.97,
        'contrast': 1.09,
        'brightness': 1.05,
        'saturation': 0.95,
        'sharpness': 1.25,
        'shadow_width': 0.80,
        'shadow_offset_y': 6,
    },
    {
        'id': 'double-choco-loaf',
        'file': 'double-choco-loaf.png',
        'name': 'Double Choco Loaf',
        'category': 'sourdough',
        'blue_lift': 1.15,       # Dark cocoa sourdough batard
        'red_dampen': 0.99,
        'contrast': 1.08,
        'brightness': 1.03,
        'saturation': 0.98,
        'sharpness': 1.28,
        'shadow_width': 0.86,
        'shadow_offset_y': 8,
    }
]

os.makedirs('assets/images/products/enhanced', exist_ok=True)
os.makedirs('public/images/products/enhanced', exist_ok=True)

TARGET_SIZE = 1000

def create_realistic_contact_shadow(width, height, bread_bbox, shadow_width_factor=0.82, offset_y=6):
    """
    Creates a realistic, subtle, directional contact shadow beneath the bread.
    Layered with ambient occlusion and soft diffuse bounce.
    """
    shadow_img = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    xmin, ymin, xmax, ymax = bread_bbox
    bread_w = xmax - xmin
    bread_h = ymax - ymin
    
    center_x = (xmin + xmax) // 2
    contact_y = ymax + offset_y
    
    shadow_w = int(bread_w * shadow_width_factor)
    shadow_h = max(24, int(bread_h * 0.14))
    
    # 1. Soft Diffuse Shadow Layer (Large, gentle spread)
    diffuse_mask = Image.new('L', (width, height), 0)
    from PIL import ImageDraw
    draw = ImageDraw.Draw(diffuse_mask)
    
    d_bbox = [
        center_x - shadow_w // 2,
        contact_y - shadow_h // 2 + 8,
        center_x + shadow_w // 2,
        contact_y + shadow_h // 2 + 8
    ]
    draw.ellipse(d_bbox, fill=36) # ~14% max opacity
    diffuse_mask = diffuse_mask.filter(ImageFilter.GaussianBlur(radius=28))
    
    # 2. Ambient Occlusion Layer (Tight, close contact)
    ao_mask = Image.new('L', (width, height), 0)
    draw_ao = ImageDraw.Draw(ao_mask)
    ao_w = int(shadow_w * 0.78)
    ao_h = max(14, int(shadow_h * 0.55))
    ao_bbox = [
        center_x - ao_w // 2,
        contact_y - ao_h // 2 - 2,
        center_x + ao_w // 2,
        contact_y + ao_h // 2 - 2
    ]
    draw_ao.ellipse(ao_bbox, fill=68) # ~27% max opacity
    ao_mask = ao_mask.filter(ImageFilter.GaussianBlur(radius=10))
    
    # Combine masks
    combined_mask = ImageChops.add(diffuse_mask, ao_mask)
    
    # Fill with deep navy-tinted shadow color: #141f2e
    navy_shadow = Image.new('RGBA', (width, height), (20, 31, 46, 255))
    shadow_img.paste(navy_shadow, (0, 0), combined_mask)
    
    return shadow_img

def enhance_bread_image(p_info):
    file_name = p_info['file']
    src_path = os.path.join('public/images/products', file_name)
    
    if not os.path.exists(src_path):
        print(f"Skipping {file_name}: not found")
        return
        
    img = Image.open(src_path).convert('RGBA')
    
    # Extract tight bounding box of bread silhouette
    bbox = img.getbbox()
    if bbox:
        cropped = img.crop(bbox)
    else:
        cropped = img
        
    # Scale proportionally to fit inside standardized canvas
    # Target inner dimension ~ 760px to leave ~120px padding (12%)
    max_inner = int(TARGET_SIZE * 0.76)
    w, h = cropped.size
    scale = min(max_inner / w, max_inner / h)
    new_w = max(10, int(w * scale))
    new_h = max(10, int(h * scale))
    
    scaled_bread = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Perform Non-Destructive Photorealistic Enhancements on RGB channels
    arr = np.array(scaled_bread, dtype=np.float32)
    alpha = arr[:, :, 3] / 255.0
    rgb = arr[:, :, :3]
    
    # 1. Color Balance / Temperature Normalization
    # Dampen harsh neon-red & lift suppressed blue/cyan floor in highlights
    r = rgb[:, :, 0] * p_info['red_dampen']
    g = rgb[:, :, 1]
    b = rgb[:, :, 2] * p_info['blue_lift']
    
    # Gentle highlight recovery to prevent clipped blown-out whites
    highlight_mask = (r > 220) & (g > 160)
    b[highlight_mask] = np.clip(b[highlight_mask] * 1.15, 0, 255)
    
    # Clip back to 0-255
    r = np.clip(r, 0, 255)
    g = np.clip(g, 0, 255)
    b = np.clip(b, 0, 255)
    
    enhanced_rgb = np.stack([r, g, b], axis=-1)
    enhanced_bread = Image.fromarray(enhanced_rgb.astype(np.uint8), mode='RGB')
    
    # 2. Tone adjustments: Exposure, Contrast, Saturation
    if p_info['brightness'] != 1.0:
        enh_b = ImageEnhance.Brightness(enhanced_bread)
        enhanced_bread = enh_b.enhance(p_info['brightness'])
        
    if p_info['contrast'] != 1.0:
        enh_c = ImageEnhance.Contrast(enhanced_bread)
        enhanced_bread = enh_c.enhance(p_info['contrast'])
        
    if p_info['saturation'] != 1.0:
        enh_s = ImageEnhance.Color(enhanced_bread)
        enhanced_bread = enh_s.enhance(p_info['saturation'])
        
    # 3. Micro-Texture Sharpness (Crust, seeds, flaky pastry)
    enhanced_bread = enhanced_bread.filter(
        ImageFilter.UnsharpMask(radius=1.2, percent=int(p_info['sharpness'] * 100), threshold=2)
    )
    
    # Re-apply genuine original alpha channel
    alpha_img = Image.fromarray((alpha * 255.0).astype(np.uint8), mode='L')
    enhanced_bread.putalpha(alpha_img)
    
    # 4. Standardized 1000x1000 Canvas with Contact Shadow
    canvas = Image.new('RGBA', (TARGET_SIZE, TARGET_SIZE), (0, 0, 0, 0))
    
    # Center bread in canvas
    paste_x = (TARGET_SIZE - new_w) // 2
    # Place slightly higher than exact center to accommodate contact shadow
    paste_y = (TARGET_SIZE - new_h) // 2 - 10
    
    bread_bbox_on_canvas = (paste_x, paste_y, paste_x + new_w, paste_y + new_h)
    
    # Generate realistic contact shadow
    shadow_layer = create_realistic_contact_shadow(
        TARGET_SIZE, TARGET_SIZE,
        bread_bbox_on_canvas,
        shadow_width_factor=p_info['shadow_width'],
        offset_y=p_info['shadow_offset_y']
    )
    
    # Composite: Shadow underneath, pristine bread on top
    canvas.paste(shadow_layer, (0, 0), shadow_layer)
    canvas.paste(enhanced_bread, (paste_x, paste_y), enhanced_bread)
    
    # Save outputs
    out_enhanced_asset = os.path.join('assets/images/products/enhanced', file_name)
    out_enhanced_public = os.path.join('public/images/products/enhanced', file_name)
    out_public_direct = os.path.join('public/images/products', file_name)
    
    canvas.save(out_enhanced_asset, optimize=True)
    canvas.save(out_enhanced_public, optimize=True)
    canvas.save(out_public_direct, optimize=True)
    
    print(f"✓ Enhanced: {p_info['name']:28} -> {out_enhanced_asset} (1000x1000 RGBA)")

print("=== STARTING REALISTIC PRODUCT PHOTO ENHANCEMENT ===")
for p in PRODUCTS:
    enhance_bread_image(p)

print("=== ALL 9 PRODUCTS ENHANCED SUCCESSFULLY ===")
