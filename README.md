# AAIT E-Commerce Platform

A modern, responsive e-commerce web application built with **React** and **React Router**. The platform provides a full shopping experience, including product catalog browsing by category (Men, Women, Kids), product detail views, custom hero and promotional banners, newsletter subscription, and dynamic shopping cart management using React Context API.

---

## 🌟 Key Features

- **Product Catalog Browsing**: Browse items organized into distinct categories (`Men`, `Women`, `Kids`).
- **Interactive Shopping Cart**: Add, remove, and manage cart items dynamically with state managed via React Context (`ShopContext`).
- **Featured & Promotional Sections**: Includes Hero banners, Popular products section, Special Offers, and New Collections.
- **User Authentication UI**: Includes dedicated Login / Signup forms.
- **FontAwesome Integration**: Utilizes FontAwesome icons for seamless navigation and UI indicators.
- **Responsive Navigation**: Includes a top navigation bar and footer with social media & link shortcuts.

---

## 🛠️ Technology Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **State Management**: React Context API (`ShopContext`)
- **Icons**: [@fortawesome/react-fontawesome](https://fontawesome.com/)
- **Tooling & Build System**: `react-scripts` (Create React App)
- **CI/CD**: GitHub Actions

---

## 📁 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions CI workflow
├── public/                    # Static assets & HTML template
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── Components/            # Reusable UI components
│   │   ├── Assets/            # Product images, icons, and static mock data
│   │   ├── Footer/            # Footer component & styles
│   │   ├── Hero/              # Hero banner component & styles
│   │   ├── Items/             # Individual product item card component
│   │   ├── Navbar/            # Navigation bar component & styles
│   │   ├── NewCollections/    # New collections showcase component
│   │   ├── NewsLetter/        # Newsletter subscription component
│   │   ├── Offers/            # Promotional offers component
│   │   └── Popular/           # Popular items showcase component
│   ├── Context/
│   │   └── ShopContext.jsx    # Global cart and catalog state provider
│   ├── Pages/                 # Application views / page components
│   │   ├── CSS/               # Page-specific CSS styles
│   │   ├── Cart.jsx           # Shopping cart view
│   │   ├── LoginSignup.jsx    # Authentication view
│   │   ├── Shop.jsx           # Home / main store view
│   │   ├── ShopCategory.jsx   # Category product listing view
│   │   └── product.jsx        # Product detail view
│   ├── App.css
│   ├── App.js                 # Primary application component & routing setup
│   ├── App.test.js            # Frontend unit tests
│   ├── index.css              # Global styles
│   └── index.js               # Application entry point
├── package.json
└── README.md
```

---

## 🚀 Setup & Installation

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js** (v18.x or v20.x recommended)
- **npm** (v9.x or higher)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/Ecommerce3AProject.git
   cd Ecommerce3AProject
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 💻 Running Locally

Start the development server:

```bash
npm start
```

Runs the application in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page reloads automatically when source files are updated.

---

## 🧪 Testing

To execute the unit test suite:

```bash
npm test -- --watchAll=false
```

Tests are executed using Jest and React Testing Library to verify core component rendering and functionality.

---

## 📦 Production Build

To compile and optimize the application for production deployment:

```bash
npm run build
```

The optimized static build files will be generated in the `build/` directory, ready to be deployed to hosting services such as Vercel, Netlify, or GitHub Pages.

---

## ⚙️ Continuous Integration (CI/CD)

Automated testing and build checks are configured via **GitHub Actions** (`.github/workflows/ci.yml`).

Every `push` or `pull_request` to the `main` branch triggers:
1. Multi-version Node.js matrix setup (Node.js 18 & 20).
2. Clean dependency installation (`npm ci`).
3. Execution of unit tests (`npm test`).
4. Production build verification (`npm run build`).

---

## 📄 License

This project is open-source and available under the standard project permissions.
