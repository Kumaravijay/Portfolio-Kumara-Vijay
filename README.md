# Kumara Vijay M G - Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and vanilla JavaScript. Features a clean dark theme design perfect for showcasing data science and analytics work.

## 🚀 Live Demo
Deploy instantly on Netlify by dragging this folder to your Netlify dashboard.

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   ├── style.css       # Main styles with dark theme
│   └── animations.css  # Animation styles
├── js/
│   └── app.js         # JavaScript functionality
├── img/
│   ├── profile.jpg    # Your profile photo (300x300px recommended)
│   ├── project1.jpg   # IPL Analytics project screenshot
│   ├── project2.jpg   # Ames Housing project screenshot
│   ├── project3.jpg   # Obesity Analysis project screenshot
│   └── project4.jpg   # Car Price Prediction project screenshot
├── assets/
│   └── Kumara_Vijay_Resume.pdf  # Your resume PDF
├── netlify.toml       # Netlify deployment configuration
└── README.md          # This file
```

## ✅ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark Theme** - Professional black background with blue accents
- **Smooth Animations** - Scroll-triggered reveals and hover effects
- **Contact Form** - Netlify Forms integration (no backend needed)
- **Resume Download** - Direct PDF download functionality
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Loading** - Optimized images and CSS/JS minification

## 🎨 Customization Guide

### 1. Replace Your Resume
Replace the file: `assets/Kumara_Vijay_Resume.pdf` with your own resume PDF.

**OR** use a Google Drive link:
1. Upload your resume to Google Drive
2. Set sharing to "Anyone with the link can view"
3. Copy the share link
4. In `index.html`, find line ~45 and replace:
   ```html
   <a href="assets/Kumara_Vijay_Resume.pdf" class="btn btn-secondary" target="_blank">
   ```
   with:
   ```html
   <a href="YOUR_GOOGLE_DRIVE_LINK" class="btn btn-secondary" target="_blank">
   ```

### 2. Add Your Photos
Replace these images in the `img/` folder:
- `profile.jpg` - Your professional headshot (recommended: 300x300px, square)
- `project1.jpg` - Screenshot of your IPL Analytics project
- `project2.jpg` - Screenshot of your Ames Housing project
- `project3.jpg` - Screenshot of your Obesity Analysis project
- `project4.jpg` - Screenshot of your Car Price Prediction project

### 3. Update Links
In `js/app.js`, update the social media links:
```javascript
social: [
  { name: "LinkedIn", url: "YOUR_LINKEDIN_URL", icon: "fab fa-linkedin" },
  { name: "GitHub", url: "YOUR_GITHUB_URL", icon: "fab fa-github" },
  { name: "Email", url: "mailto:kumaravijay2626@gmail.com", icon: "fas fa-envelope" }
],
```

### 4. Update Project Links
In `js/app.js`, update the GitHub repository links:
```javascript
projects: [
  {
    title: "IPL Bidding & Match Analytics System",
    // ...
    github: "YOUR_GITHUB_REPO_URL",
    // ...
  },
  // ... repeat for other projects
]
```

## 🚀 Deployment Instructions

### Option 1: Netlify (Recommended)
1. Zip this entire folder
2. Go to [netlify.com](https://netlify.com)
3. Sign up/Login
4. Drag the zip file to the deploy area
5. Your site is live instantly!

### Option 2: GitHub + Netlify
1. Create a new GitHub repository
2. Upload all files to the repository
3. Connect the repo to Netlify
4. Enable auto-deployments

### Option 3: Other Hosting
Upload all files to any web hosting service (Vercel, GitHub Pages, etc.)

## 🎯 Customization Options

### Change Colors
Edit `css/style.css` at the top where the CSS variables are defined:
```css
:root {
  --clr-bg:           #000000;    /* Background color */
  --clr-text:         #FFFFFF;    /* Text color */
  --clr-accent-1:     #0A84FF;    /* Primary accent */
  --clr-accent-2:     #FF6B6B;    /* Secondary accent */
  --clr-accent-3:     #FFD166;    /* Tertiary accent */
}
```

### Add New Sections
Copy the structure from existing sections in `index.html` and add corresponding styles in `style.css`.

### Modify Skills
Update the skills array in `js/app.js`:
```javascript
skills: [
  { name: "Python", level: 90 },
  { name: "SQL", level: 85 },
  // Add more skills here
]
```

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest) 
- Safari (latest)
- Edge (latest)

## 🔧 Technical Details
- **HTML5** with semantic markup
- **CSS3** with modern features (Grid, Flexbox, CSS Variables)
- **Vanilla JavaScript** (no frameworks required)
- **Font Awesome** icons
- **Google Fonts** (Inter)
- **Netlify Forms** for contact functionality

## 📞 Support
If you need help customizing this portfolio, feel free to reach out!

## 🏆 Features Checklist
- ✅ Dark theme design
- ✅ Mobile responsive
- ✅ Resume download button
- ✅ Contact form with validation
- ✅ Smooth scrolling navigation
- ✅ Animated skill progress bars
- ✅ Project showcase cards
- ✅ Social media links
- ✅ SEO optimized
- ✅ Fast loading performance

## 📄 License
This portfolio template is free to use for personal and commercial purposes.

---

**Made with ❤️ for Kumara Vijay M G - Data Science & Analytics Professional**