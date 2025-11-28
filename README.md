# TripMitra

TripMitra is a modern, responsive travel website built with Next.js and Tailwind CSS, designed to help users plan their dream vacations in India. It features personalized itineraries, stunning visuals, and an intuitive user interface to make travel planning seamless and enjoyable.

## Features

- **Hero Section**: Eye-catching landing page with a typewriter effect displaying "Discover India" and a call-to-action button to start the journey.
- **Features Section**: Highlights key features of the travel service.
- **Destinations Section**: Showcases popular Indian destinations with images and descriptions.
- **Pricing Section**: Displays pricing plans for different travel packages.
- **Contact Section**: Provides a form for users to get in touch.
- **Responsive Design**: Fully responsive layout that works on all devices.
- **Smooth Scrolling**: Navigation with smooth scrolling to different sections.

## Tech Stack

- **Framework**: Next.js 16.0.0
- **Frontend Library**: React 18.2.0
- **Styling**: Tailwind CSS 3.3.0
- **Build Tools**: PostCSS, Autoprefixer
- **Deployment**: Ready for Vercel or any static hosting

## Project Structure

```
TripMitra/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.jsx           # Root layout component
│   └── page.jsx             # Home page component
├── components/
│   ├── Contact.jsx          # Contact section component
│   ├── Destinations.jsx     # Destinations section component
│   ├── Features.jsx         # Features section component
│   ├── Footer.jsx           # Footer component
│   ├── Hero.jsx             # Hero section component
│   ├── Navbar.jsx           # Navigation bar component
│   └── Pricing.jsx          # Pricing section component
├── public/
│   └── images/              # Static images (hero.jpg, india1.jpg, etc.)
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.js        # PostCSS configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tripmitra.git
   cd tripmitra
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Usage

- Navigate through the sections using the smooth scrolling buttons.
- Customize the content in the components to fit your needs.
- Build for production with `npm run build` and start with `npm start`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
