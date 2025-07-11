# AI Bible Gospels - Why Credit Matters Landing Page

## 🚀 Deployment Options

### Option 1: GitHub Pages (Current)
- **URL**: https://why-credit-matters.aibiblegospels.com
- **Status**: May have MIME type issues with JavaScript files

### Option 2: Netlify (Recommended Alternative)
1. Go to [Netlify](https://netlify.com)
2. Sign up with GitHub account
3. Click "New site from Git"
4. Connect your `whycreditmatter` repository
5. Set build command: `npm run build`
6. Set publish directory: `dist`
7. Deploy site
8. Configure custom domain: `why-credit-matters.aibiblegospels.com`

### Option 3: Vercel (Another Alternative)
1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub account
3. Import your `whycreditmatter` repository
4. Vercel will auto-detect Vite settings
5. Deploy and configure custom domain

## 🔧 Development

```bash
npm install
npm run dev
```

## 📁 Project Structure

- `src/App.tsx` - Main landing page component
- `public/` - Static assets (logo, CNAME, etc.)
- `dist/` - Built files (generated)

## 🎯 Features

- ✅ Responsive design
- ✅ YouTube video integration
- ✅ LeadConnector form integration
- ✅ Social media links
- ✅ Mobile-first design
