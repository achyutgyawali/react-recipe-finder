# React Recipe Finder

A recipe discovery web application built with React and Vite. Search for recipes by keyword or browse by category, view ingredient lists with weights, and access full recipe instructions from external sources.

Powered by the [Edamam Recipe Search API](https://developer.edamam.com/).

## Features

- **Recipe Search** - Search recipes by name with debounced input for optimized API calls
- **Category Browsing** - Quick-access category buttons for Breakfast, Lunch, Dinner, and Dessert
- **Ingredient Modal** - View a recipe's ingredient list and weights in a modal popup
- **Full Recipe Link** - Open the complete recipe on its original source website
- **Sign Up Form** - Basic user registration form with client-side validation
- **Smooth Navigation** - Scroll-based navigation between sections (Home, About, Team, Sign Up)

## Tech Stack

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Framework   | React 18                    |
| Build Tool  | Vite 6                      |
| HTTP Client | Axios                       |
| Routing     | React Router DOM v6         |
| Styling     | Vanilla CSS (per-component) |
| API         | Edamam Recipe Search API    |

## Project Structure

```
react-recipe-finder/
├── index.html
├── vite.config.js
├── package.json
├── .env                        # API keys (not tracked in git)
├── public/
│   ├── favicon.ico
│   └── *.svg, *.jpg, *.png     # Static assets and icons
└── src/
    ├── main.jsx                # Application entry point
    ├── App.jsx                 # Root component with section refs and navigation
    ├── App.css
    ├── index.css
    ├── constants/
    │   └── config.js           # API config and category definitions
    ├── services/
    │   └── recipeApi.js        # Edamam API integration
    ├── hooks/
    │   ├── useDebounce.js      # Debounce hook for search input
    │   └── useRecipes.js       # Recipe fetching hook
    └── components/
        ├── Header/             # App header with search bar and nav links
        ├── CategoryBar/        # Category filter buttons
        ├── RecipeGrid/         # Responsive grid of recipe cards
        ├── RecipeCard/         # Individual recipe card with image and actions
        ├── IngredientModal/    # Modal overlay showing ingredients table
        ├── AboutSection/       # About page with team member cards
        ├── SignupForm/         # User registration form
        └── Footer/             # Page footer
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)
- [Edamam API credentials](https://developer.edamam.com/) (App ID and App Key)

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/achyutgyawali/react-recipe-finder.git
   cd react-recipe-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:

   ```
   VITE_APP_ID=your_edamam_app_id
   VITE_APP_KEY=your_edamam_app_key
   VITE_BASE_URL=https://api.edamam.com/search
   ```

   You can get free API credentials by signing up at [Edamam Developer Portal](https://developer.edamam.com/).

4. **Start the development server**

   ```bash
   npm run dev
   ```

   The app will open at `http://localhost:3000`.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally     |

## Authors

- Achyut Gyawali

## License

This project is for educational purposes.
