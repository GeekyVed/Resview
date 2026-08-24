# Resview 📄

A modern, elegant resume viewer web application built with **React** and **Vite**. Perfect for showcasing your resume in a professional, interactive format with customizable branding and easy deployment.

## ✨ Features

- **🎨 Modern UI**: Clean, professional design with gradient backgrounds
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **⚡ Fast**: Built with Vite for lightning-fast development and builds
- **🔧 Customizable**: Easy configuration through environment variables
- **📧 Interactive**: Direct download and email contact buttons
- **🔗 Shareable Download Route**: `/download` starts the PDF download while keeping the resume viewer visible
- **🌍 SEO Friendly**: Built-in Open Graph and Twitter Card support
- **🚀 Deploy Ready**: Ready for deployment to Vercel, Netlify, or any static host

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GeekyVed/Resview.git
   cd Resview
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up your configuration**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your personal information:
   ```env
   VITE_GOOGLE_DOC_ID=your_google_doc_id_here
   VITE_GOOGLE_DOC_URL=your_google_doc_embed_url
   VITE_FULL_NAME=Your Full Name
   VITE_FIRST_NAME=Your First Name
   VITE_CONTACT_EMAIL=your.email@example.com
   # ... and more
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📋 Configuration

### Google Docs Setup

1. Create or upload your resume to Google Docs
2. Set sharing permissions to "Anyone with the link can view"
3. Copy the document ID from the URL
4. Update your `.env` file with the document ID and embed URL

### Environment Variables

All configuration is done through environment variables prefixed with `VITE_`:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_DOC_ID` | Your Google Docs document ID | ✅ |
| `VITE_GOOGLE_DOC_URL` | Google Docs embed URL | ✅ |
| `VITE_FULL_NAME` | Your full name | ✅ |
| `VITE_FIRST_NAME` | Your first name | ✅ |
| `VITE_CONTACT_EMAIL` | Your email address | ✅ |
| `VITE_RESUME_TITLE` | Page title | ✅ |
| `VITE_OG_TITLE` | Social media title | ❌ |
| `VITE_OG_DESCRIPTION` | Social media description | ❌ |

## 🎨 Customization

### Styling
- Modify `src/App.css` for component-specific styles
- Update `src/index.css` for global styles
- The default theme uses a purple gradient background with modern button designs

### Functionality
- Edit `src/App.jsx` to modify component behavior
- The app automatically handles PDF downloads and email composition
- Responsive design works out of the box

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify settings

### Other Platforms
The built files are in the `dist/` folder after running `npm run build`. Upload these to any static hosting service.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Modern styling with flexbox and grid

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Vedant Singh Chauhan**
- Email: vedantc252@gmail.com
- GitHub: [@GeekyVed](https://github.com/GeekyVed)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

*Built with ❤️ using React and Vite*
