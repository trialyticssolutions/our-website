from PIL import Image, ImageDraw, ImageFont
import os

# Create a 1200x630 image (standard OG image size)
width, height = 1200, 630
image = Image.new('RGB', (width, height), color='#1a1a2e')
draw = ImageDraw.Draw(image)

# Create gradient background
for y in range(height):
    r = int(26 + (66 - 26) * y / height)  # From #1a1a2e to #16213e
    g = int(26 + (33 - 26) * y / height)
    b = int(46 + (62 - 46) * y / height)
    draw.line([(0, y), (width, y)], fill=(r, g, b))

# Try to use a system font, fallback to default
try:
    title_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 72)
    subtitle_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 36)
    url_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 28)
except:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    url_font = ImageFont.load_default()

# Add text
title = "ACube Insights"
subtitle = "Data Consulting & Analytics"
url = "acubeinsights.com"

# Calculate text positions for centering
title_bbox = draw.textbbox((0, 0), title, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_x = (width - title_width) // 2

subtitle_bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
subtitle_width = subtitle_bbox[2] - subtitle_bbox[0]
subtitle_x = (width - subtitle_width) // 2

url_bbox = draw.textbbox((0, 0), url, font=url_font)
url_width = url_bbox[2] - url_bbox[0]
url_x = (width - url_width) // 2

# Draw text with shadow effect
# Shadow
draw.text((title_x + 3, 200 + 3), title, font=title_font, fill='#000000')
draw.text((subtitle_x + 2, 300 + 2), subtitle, font=subtitle_font, fill='#000000')
draw.text((url_x + 2, 450 + 2), url, font=url_font, fill='#000000')

# Main text
draw.text((title_x, 200), title, font=title_font, fill='#ffffff')
draw.text((subtitle_x, 300), subtitle, font=subtitle_font, fill='#e0e0e0')
draw.text((url_x, 450), url, font=url_font, fill='#4a9eff')

# Add some decorative elements
# Draw some circles for visual appeal
draw.ellipse([50, 50, 150, 150], outline='#4a9eff', width=3)
draw.ellipse([1050, 480, 1150, 580], outline='#4a9eff', width=3)

# Save the image
output_path = '/Users/ayush/Desktop/our-website/siteTesting2/public/images/og-image.png'
image.save(output_path, 'PNG')
print(f"Open Graph image created successfully at: {output_path}")