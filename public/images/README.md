# Image Organization Guide

This folder contains all images for the Muscle Memory fitness app, organized for maximum efficiency and maintainability.

## 📁 Folder Structure

```
📦 images/
├── 📁 exercises/           # Exercise demonstration images and SVGs
│   ├── 📄 body_arms.svg   # Arms muscle diagram
│   ├── 📄 body_back.svg   # Back muscle diagram
│   ├── 📄 body_chest.svg  # Chest muscle diagram
│   ├── 📄 body_legs.svg   # Legs muscle diagram
│   ├── 📄 body_shoulders.svg # Shoulders muscle diagram
│   └── 📄 [exercise images]  # Individual exercise photos/gifs
└── 📁 ui/                 # User interface assets
    ├── 📁 backgrounds/    # Background images (background.jpg)
    ├── 📁 icons/          # Icon files
    └── 📁 logos/          # Logo variations
```

## 🎯 Naming Conventions

### Exercise Images

Use descriptive, lowercase names with hyphens:

- `bicep-curl-start.jpg`
- `bicep-curl-end.jpg`
- `plank-form.jpg`
- `russian-twist-demo.gif`

### UI Images

- **Icons**: `icon-name.svg` (prefer SVG for scalability)
- **Backgrounds**: `bg-gradient-blue.jpg`
- **Logos**: `logo-white.svg`, `logo-dark.png`

## 📐 Recommended Image Specifications

### Exercise Images

- **Format**: JPG for photos, PNG for graphics with transparency, GIF for animations
- **Size**: 800x600px (4:3 ratio) for consistency
- **Quality**: 85% compression for web optimization
- **Alt text ready**: Name files descriptively for accessibility

### UI Assets

- **Icons**: 24x24px, 32x32px, 48x48px (multiple sizes)
- **Logos**: SVG preferred for scalability
- **Backgrounds**: Match design breakpoints (1920px width max)

## 🚀 Usage in Components

### In Next.js components:

```jsx
import Image from 'next/image';

// Exercise image
<Image
  src="/images/exercises/abs/plank-form.jpg"
  alt="Proper plank form demonstration"
  width={800}
  height={600}
  className="rounded-lg"
/>

// UI icon
<Image
  src="/images/ui/icons/timer.svg"
  alt="Timer icon"
  width={24}
  height={24}
/>
```

### As background images in CSS:

```css
.hero-section {
  background-image: url('/images/ui/backgrounds/gym-hero.jpg');
  background-size: cover;
  background-position: center;
}
```

## ⚡ Performance Tips

1. **Use Next.js Image component** for automatic optimization
2. **Lazy loading** is enabled by default with Next.js Image
3. **WebP conversion** happens automatically in production
4. **Responsive images** use the `sizes` prop for different breakpoints

### Example with responsive sizing:

```jsx
<Image
  src='/images/exercises/abs/crunches-demo.jpg'
  alt='Crunches exercise demonstration'
  width={800}
  height={600}
  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  className='rounded-lg'
/>
```

## 📱 Adding New Images

1. **Choose the right folder** based on content type
2. **Optimize before uploading**:
   - Use tools like TinyPNG or ImageOptim
   - Ensure images are web-ready sizes
3. **Use descriptive filenames**
4. **Consider creating multiple sizes** for different use cases
5. **Test on different devices** to ensure proper display

## 🔍 SEO & Accessibility

- Always include meaningful `alt` text
- Use descriptive filenames (helps with image SEO)
- Consider adding captions for exercise instructions
- Ensure sufficient contrast for text overlays

## 🎨 Design Consistency

- Maintain consistent lighting and angles for exercise photos
- Use the same background/environment when possible
- Keep UI elements in brand colors
- Ensure logos work on both light and dark backgrounds

---

**Quick Start**: Drop your images into the appropriate folders and reference them using the `/images/...` path from your components!
