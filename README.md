# UWEC CSSA Website

Welcome to the official website of UW-Eau Claire Chinese Student & Scholar Association (CSSA)!

## Project Overview

This is a modern, responsive website built entirely with HTML, CSS, and JavaScript, featuring bilingual support (English and Chinese). The website showcases the CSSA's mission, events, team information, and a member registration form.

## Project Structure

```
cssa/
├── index.html              # Home page
├── about.html              # About page
├── events.html             # Events page
├── new-students.html       # New Students Guide
├── team.html               # Team page
├── contact.html            # Contact & Join Us page
├── css/
│   └── styles.css          # All styles (responsive design)
├── js/
│   ├── main.js             # Main functionality (language switching, dynamic content)
│   └── data.js             # Events and team member data
└── README.md               # This file
```

## Key Features

### 1. Responsive Design
- Supports desktop, tablet, and mobile devices
- Flexible grid layout
- Optimized mobile navigation

### 2. Bilingual Support (English & Chinese)
- Click the language button in the top-right corner to switch between English and Chinese
- Language preference is saved in browser localStorage
- All page content has both English and Chinese translations

### 3. Dynamic Events List
- Event data stored in `js/data.js`
- Events automatically display in the selected language
- Easy to add new events

### 4. Navigation Menu
- Clear page navigation structure
- Hover effects
- Active link indicators

### 5. Contact Form
- Form to collect user information
- Form data is stored in browser localStorage
- Supports bilingual submission

## Page Descriptions

### Home Page (index.html)
Showcases CSSA's introduction, featured events, and reasons to join.

### About Page (about.html)
Provides detailed information about CSSA's mission, goals, and history.

### Events Page (events.html)
Dynamically displays all CSSA events with support for language switching.

### New Students Guide (new-students.html)
Provides practical tips and resources for international students at UWEC.

### Team Page (team.html)
Introduces the CSSA executive board members.

### Contact Page (contact.html)
Provides contact information and a member registration form.

## How to Use

### Basic Usage
1. Open the `index.html` file in your web browser
2. Use the navigation menu to browse different pages
3. Click the language button in the top-right corner to switch languages

### Adding New Events
Edit the `js/data.js` file and add a new event object to the `eventsData` array:

```javascript
{
    id: 7,
    title_en: "Event Title in English",
    title_zh: "活动中文标题",
    date: "2024-MM-DD",
    time: "HH:MM AM/PM - HH:MM AM/PM",
    location_en: "Location in English",
    location_zh: "中文地点",
    description_en: "English description",
    description_zh: "中文描述",
    image: "emoji"
}
```

### Editing Team Members
Edit the `teamMembers` array in `js/main.js` to update team information.

### Adding Translations
Edit the `translations` object in `js/main.js` to add new text translations.

## Technical Features

### CSS
- Uses CSS Grid and Flexbox for layout
- CSS custom properties (variables) for easy color management
- Complete responsive design with media queries
- Smooth transitions and hover effects

### JavaScript
- localStorage API for saving user preferences
- DOM manipulation for dynamic content updates
- Event listeners for handling user interactions
- Efficient event loop handling

### Accessibility
- Semantic HTML structure
- Appropriate color contrast
- Clear form labels
- Responsive design supports various devices

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## Customization Guide

### Color Theme
Modify color variables in the `:root` section of `css/styles.css`:

```css
:root {
    --primary-color: #d4a574;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    /* ... other colors ... */
}
```

### Font
Change the `font-family` property in the `body` rule in `css/styles.css`.

### Logo and Branding
- Replace logo text or image in the `.logo` element in HTML
- Update website title and meta tags

## Form Data

Form submission data is stored in browser localStorage (key: `formSubmissions`).
In production, form data should be sent to a backend server for processing.

## Deployment Recommendations

1. Use a web hosting service (GitHub Pages, Netlify, Vercel, etc.)
2. Configure a custom domain
3. Enable HTTPS
4. Add an email backend service to handle form submissions
5. Set up analytics tools to track website visits

## Future Improvement Ideas

- [ ] Add event registration/RSVP functionality
- [ ] Create a photo gallery/image gallery page
- [ ] Add news/blog section
- [ ] Implement backend form processing
- [ ] Add social media integration
- [ ] Create an admin panel for dynamic content updates
- [ ] Add search functionality
- [ ] Optimize for SEO

## License

© 2024 UWEC Chinese Student & Scholar Association. All rights reserved.

## Support

If you have any questions or suggestions, please contact CSSA:
- Email: cssa@uwec.edu
- Phone: (715) 836-CSSA (2772)
- Location: Student Center, Room 102

Happy coding and collaborating!
