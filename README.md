# Abderahmene Maamria - Portfolio Website

A modern, dark-mode full-stack developer portfolio website built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing projects, competitions, events, and academic achievements.

## 🚀 Features

- **Modern Dark-Mode Design** - Elegant dark theme with glassmorphism effects
- **Theme Toggle** - Dark, Light, and Auto theme modes
- **Smooth Animations** - Powered by Framer Motion for beautiful transitions
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Complete metadata, sitemap, and robots.txt
- **Accessibility** - WCAG AA compliant with semantic HTML
- **Performance** - Optimized with Next.js Image, lazy loading, and SSR/SSG

## 📋 Pages

- **Homepage** - Hero section, timeline, skills grid, and about section
- **Projects** - Showcase of web, mobile, desktop, and robotics projects with detailed modals
- **Competitions** - Timeline of competitions and achievements
- **Events** - Events participated in and organized (with tabs)
- **Academics** - Chronological academic journey timeline
- **Robotics** - Electronics and robotics projects and skills
- **Design & 3D** - Design tools and 3D skills showcase
- **Contact** - Contact form with mailto integration and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
.
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Homepage
│   ├── projects/          # Projects page
│   ├── competitions/      # Competitions page
│   ├── events/            # Events page
│   ├── academics/         # Academics page
│   ├── robotics/          # Robotics page
│   ├── design/            # Design & 3D page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap configuration
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── ThemeProvider.tsx  # Theme context provider
│   ├── ThemeToggle.tsx    # Theme toggle button
│   └── ProjectModal.tsx   # Project detail modal
├── data/                   # Data files
│   └── portfolio-data.ts  # All portfolio data
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

## 🎨 Customization

### Update Portfolio Data

Edit `data/portfolio-data.ts` to update:
- Personal information
- Projects
- Competitions
- Events
- Academics
- Skills
- Certificates
- Languages

### Theme Colors

Modify `app/globals.css` to change the color scheme:
```css
:root {
  --accent-cyan: #06b6d4;
  --accent-violet: #8b5cf6;
}
```

### Meta Tags

Update SEO metadata in `app/layout.tsx`:
- Title
- Description
- Open Graph tags
- Twitter cards

## 📱 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Update Site URL**
   - Update `app/sitemap.ts` and `app/robots.ts` with your production URL
   - Update Open Graph URLs in `app/layout.tsx`

### Docker (Optional)

Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Environment Variables

Currently, no environment variables are required. If you add a backend or API integrations, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🎯 Performance Optimization

- **Image Optimization**: Using Next.js Image component with lazy loading
- **Code Splitting**: Automatic with Next.js App Router
- **SSR/SSG**: Static pages where possible
- **Font Optimization**: Using next/font for Inter
- **CSS Optimization**: Tailwind CSS with PostCSS

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Structured data ready
- Sitemap.xml
- Robots.txt
- Accessible markup

## 📝 License

This project is private and proprietary. All rights reserved.

## 👨‍💻 Author

**Abderahmene Maamria**
- Email: aa.maamria@ensta.edu.dz
- Phone: +213 667 312 853
- LinkedIn: [Profile](https://linkedin.com/in/abderahmene-maamria)

## 🙏 Acknowledgments

- Next.js Team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Framer Motion for beautiful animations
- Lucide for the icon library

---

Built with ❤️ by Abderahmene Maamria
