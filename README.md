# Resume Word Cloud

<!-- BADGES:START -->
[![content-management](https://img.shields.io/badge/-content--management-blue?style=flat-square)](https://github.com/topics/content-management) [![css](https://img.shields.io/badge/-css-1572b6?style=flat-square)](https://github.com/topics/css) [![html](https://img.shields.io/badge/-html-e34f26?style=flat-square)](https://github.com/topics/html) [![javascript](https://img.shields.io/badge/-javascript-f7df1e?style=flat-square)](https://github.com/topics/javascript) [![portfolio](https://img.shields.io/badge/-portfolio-blue?style=flat-square)](https://github.com/topics/portfolio) [![responsive-design](https://img.shields.io/badge/-responsive--design-blue?style=flat-square)](https://github.com/topics/responsive-design) [![resume](https://img.shields.io/badge/-resume-00bcd4?style=flat-square)](https://github.com/topics/resume) [![visualization](https://img.shields.io/badge/-visualization-blue?style=flat-square)](https://github.com/topics/visualization) [![word-cloud](https://img.shields.io/badge/-word--cloud-blue?style=flat-square)](https://github.com/topics/word-cloud) [![data-visualization](https://img.shields.io/badge/-data--visualization-blue?style=flat-square)](https://github.com/topics/data-visualization)
<!-- BADGES:END -->

A modern, responsive word cloud visualization that can be used for showcasing resume skills, interests, or any categorized content.

## Project Structure

```
resume-word-cloud/
│
├── index.html        # Main HTML document
├── css/
│   └── styles.css    # Separated CSS styles
├── js/
│   └── main.js       # JavaScript functionality
├── html/             # Content overlay templates
│   ├── home.html     # Home page content
│   ├── about.html    # About page content
│   └── ...           # Additional content pages
└── README.md         # This documentation
```

## Features

- Clean separation of concerns (HTML, CSS, JavaScript)
- Responsive design that works on desktop and mobile devices
- Interactive word cloud with hover effects and tooltips
- Content overlay system for displaying detailed information
- Customizable styling through CSS variables

## Usage

1. Modify the navigation items in `js/main.js` to customize your word cloud
2. Adjust styling in `css/styles.css` to match your design preferences
3. Create content pages in the `html/` directory following the template pattern:
   - Copy `html/template.html` as a starting point
   - Each HTML file must contain a `<div id="content">` element
   - This content will be dynamically loaded into the overlay
   - Pages are referenced in the `navItems` array in `main.js`

## Overlay Content System

The project uses a modular content approach:

1. Each word in the word cloud can link to a separate HTML file
2. Content files are stored in the `html/` directory
3. Content structure:
   ```html
   <div id="content">
     <div class="title-block">Section Title</div>
     <p>Your content here...</p>
     <!-- Additional content as needed -->
   </div>
   ```
4. To add a new content page:
   - Create a new HTML file in the `html/` directory
   - Update the `navItems` array in `js/main.js` to point to your new page
   - Set the `page` property to the path of your HTML file (e.g., `html/mypage.html`)

## Browser Compatibility

This project is compatible with modern browsers that support ES6+ JavaScript features and CSS3.