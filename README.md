# Next Risor - Premium Digital Agency Website

A stunning, modern digital agency website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Featuring smooth animations, glass morphism effects, and a premium design that converts visitors into clients.

![Next Risor](https://via.placeholder.com/1200x600/1a1a2e/ffffff?text=Next+Risor+-+Premium+Digital+Agency)

##  Features

### ✨ Design & UX
- **Glass Morphism Design** - Premium glass effects with backdrop blur
- **Smooth Animations** - Framer Motion powered transitions and micro-interactions
- **Responsive Design** - Flawless experience across all devices
- **Dark Theme** - Modern dark interface with vibrant accents
- **3D Hover Effects** - Interactive elements with depth and perspective

### 🛠 Technical Excellence
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Fully typed for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **GSAP Integration** - Advanced scroll and parallax effects

### 📱 Sections Included
- **Hero Section** - Captivating introduction with animated gradients
- **Services** - Showcase of digital services with interactive cards
- **Projects** - Portfolio showcase with filterable grid
- **Testimonials** - Client reviews with asymmetric layout
- **Contact** - Professional contact form with multiple channels
- **Footer** - Comprehensive footer with CTA and social links

## 🏗 Project Structure


next-risor/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── HowItWorks.tsx
│   ├── ProjectsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── StatsSection.tsx
│   ├── BrandScroller.tsx
│   ├── CTASection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
│   ├── brands/
│   └── images/
└── package.json


## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   git clone https://github.com/your-username/next-risor.git
   cd next-risor
   

2. **Install dependencies**

   npm install
   # or
   yarn install
   # or
   pnpm install
   

3. **Run the development server**

   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Brand Colors
Update the color scheme in `tailwind.config.js`:

theme: {
  extend: {
    colors: {
      primary: {
        400: '#8B5CF6', // Your primary color
        500: '#7C3AED',
      },
      accent: {
        500: '#EC4899', // Your accent color
      },
      ink: {
        900: '#0F0F1A', // Your dark background
      }
    }
  }
}


### Content Updates
Each section is modular and easy to customize:

- **Services**: Update `SERVICES` array in `ServicesSection.tsx`
- **Projects**: Modify `PROJECTS` data in `ProjectsSection.tsx`
- **Testimonials**: Edit `REVIEWS` in `TestimonialsSection.tsx`
- **Contact**: Update contact methods in `ContactSection.tsx`

### Images & Assets
Replace placeholder images in `/public/images/` with your own:
- Project screenshots
- Team photos
- Client logos
- Brand assets

## 📦 Deployment

### Vercel 

npm run build
# Deploy to Vercel


### Netlify

npm run build
# Deploy to Netlify


### Other Platforms
The project includes all necessary configurations for deployment on:
- Vercel
- Netlify
- AWS Amplify
- Railway
- Digital Ocean

## 🛠 Built With

- **[Next.js 14](https://nextjs.org/)** - React framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Animations
- **[GSAP](https://greensock.com/gsap/)** - Advanced animations

## 📈 Performance

- **Lighthouse Score**: 95+ Performance
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Optimized images and code splitting
- **Accessible**: WCAG 2.1 compliant

## 🌟 Key Components

### Hero Section
- Animated gradient text
- Mouse parallax effects
- Staggered animations
- Call-to-action buttons

### Services Showcase
- Interactive 3D cards
- Hover tilt effects
- Service icons
- Detailed descriptions

### Project Portfolio
- Filterable grid layout
- Advanced gradient placeholders
- Parallax scroll effects
- Project categorization

### Contact Form
- Multi-column layout
- Form validation
- Loading states
- Multiple contact methods

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🏆 Recognition

This template is perfect for:
- Digital Agencies
- Freelance Developers
- Design Studios
- Startup Landing Pages
- Portfolio Websites

## 📞 Support

Need help? Contact us:
- **Email**: support@nextrisor.com
- **Website**: [nextrisor.com](https://nextrisor.com)
- **Twitter**: [@nextrisor](https://twitter.com/nextrisor)

## 🙏 Acknowledgments

- Design inspiration from modern agency websites
- Icons from [Lucide](https://lucide.dev/)
- Gradient patterns inspired by modern web trends
- Animation techniques from Framer Motion examples

---

**Built with ❤️ by the Next Risor Team**

*Transforming ideas into exceptional digital experiences.