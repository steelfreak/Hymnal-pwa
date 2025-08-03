# Hymnal-pwa
Church song book


# GUSDSA Hymn Book

A simple, searchable, and accessible Progressive Web App (PWA) for the GUSDSA hymn book. Designed for both offline use and easy navigation of hymns, this app allows users to quickly find and read hymns by number or title, with the ability to read lyrics in a clean, readable format.

---

## Demo

> *[GUSDSA Hymnal](https://steelfreak.github.io/Hymnal-pwa/)*

---

## Features

- **Clean and intuitive UI**: Easy-to-read hymn list and lyrics.
- **Search functionality**: Search hymns by number or title with instant filtering.
- **Navigation**: Navigate hymn lyrics with previous and next buttons.
- **Responsive design**: Works well on desktop, tablet, and mobile devices.
- **Dark mode toggle**: User-controlled light/dark theme with preference saved.
- **Keyboard accessible**: Full keyboard navigation with clear focus styles.
- **Screen reader support**: Proper ARIA labels and live region management.
- **Offline-ready PWA**: Service worker support with install prompt.
- **Installable app**: Can be installed like a native app on supporting platforms.

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari) that supports ES6 and service workers.
- Optional: A local server to host the files or just open the `index.html` directly.

### Installation

1. **Clone the repository:**


2. **Open the app:**

- Open `index.html` directly in your browser  
**OR**  
- Serve with a simple HTTP server for PWA features to work properly (recommended):

  ```
  # Python 3.x
  python -m http.server 8000
  ```

  Navigate to `http://localhost:8000` in your browser.

### File Structure
``` 
/gusdsa-hymnal
│
├── index.html # Main HTML file with app UI and logic
├── songs.js # JavaScript file with hymns data array
├── manifest.json # PWA manifest defining app metadata and icons
├── sw.js # Service worker script for offline caching
└── README.md # This file

```

---

## Usage

- **Search hymns** instantly by typing a hymn number or title in the search box.
- **Click or press Enter/Space** on any hymn row to open it.
- Use **Previous** and **Next** buttons to navigate hymns sequentially.
- Click **Back to Index** to return to the hymn list.
- Use the **Dark Mode toggle button** at the top to switch between light and dark themes — preference will be saved.
- Install the app to your device via the **Install App** button when prompted by your browser.

---

## Accessibility

- Uses semantic HTML elements and ARIA attributes.
- Focusable and keyboard-operable hymn rows and buttons.
- Focus outline styles are visually distinct.
- Screen reader users receive clear announcements of current song titles.
- Input fields and buttons include descriptive labels.

---

## Theming

The app employs a user-controlled dark/light mode toggle:

- The toggle button updates the theme immediately.
- Current theme preference is saved to `localStorage`.
- Transitions ensure smooth visual changes.
- Default theme is light if no preference has been set.

---

## Progressive Web App (PWA)

- Service worker caches essential assets and hymns data.
- Supports offline usage after first load.
- Custom install prompt via an **Install App** button.
- Users can install the app on supported devices and launch it standalone.

---

## Customization

- **Hymns data:** Extend or modify hymns in `songs.js`. The expected format is:

``` js client 
const hymns = [
  {
    number: 1,
    title: "Amazing Grace",
    lyrics: "Amazing grace! How sweet the sound..."
  },
  {
    number: 2,
    title: "Faith of Our Fathers",
    lyrics: "Faith of our fathers, living still..."
  },
  // Add more hymns here
];
```


- **Styling:** Modify CSS inside `<style>` in `index.html` or extract to a separate CSS file as needed.

- **Service Worker:** Customize caching strategies in `sw.js` for advanced offline behavior.

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests to improve the app — whether fixing bugs, adding hymns, enhancing accessibility, or upgrading features.

---

## License

This project is licensed under the [MIT License](LICENSE) — feel free to use and adapt it as you see fit.

---

## Credits

- Developed by *[Kinen Key Samson](https://github.com/steelfreak)*  
- Inspired by community best practices for accessible, responsive web apps.

---

## Contact

For questions or feedback, please contact:

- Email: kinenkey@gmail.com
- Github: [Steelfreak](https://github.com/steelfreak)
-  GitHub: [steelfreak.github.io](https://github.com/yourusername)

---

Thank you for using the GUSDSA Hymn Book!

---

