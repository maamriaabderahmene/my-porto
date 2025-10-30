# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies

Since we're using npm, you may need to enable script execution in PowerShell:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then install dependencies:

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Next Steps

1. **Add Images**: Add project images to `public/projects/` and certificates to `public/certificates/`
2. **Update Data**: Edit `data/portfolio-data.ts` with your actual information
3. **Customize**: Modify colors, content, and styling to match your brand
4. **Deploy**: Push to GitHub and deploy on Vercel

## 🎨 Customization

### Update Personal Info

Edit `data/portfolio-data.ts`:
- Update `personalInfo` object with your details
- Add/remove projects
- Update competitions and events
- Customize skills list

### Change Colors

Edit `app/globals.css`:
```css
:root {
  --accent-cyan: #06b6d4;    /* Change to your preferred cyan */
  --accent-violet: #8b5cf6;  /* Change to your preferred violet */
}
```

### Update SEO

Edit `app/layout.tsx`:
- Update `metadata` object
- Change Open Graph URLs
- Update description and keywords

## 🐛 Troubleshooting

### PowerShell Script Execution Error

If you get a PowerShell execution policy error:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Module Not Found

Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Check TypeScript errors:
```bash
npm run lint
```

## 📦 Project Structure

```
├── app/              # Pages (Next.js App Router)
├── components/       # Reusable React components
├── data/             # Data configuration
├── public/           # Static assets
└── README.md         # Full documentation
```

## 🚢 Deployment

### Vercel (Easiest)

1. Push code to GitHub
2. Import repo on Vercel
3. Automatic deployment!

### Manual Build

```bash
npm run build
# Serve the .next folder
```

## 📞 Support

For issues or questions, contact:
- Email: aa.maamria@ensta.edu.dz
- Check README.md for full documentation
