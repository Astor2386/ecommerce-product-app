##### E-Commerce Product App
This is a React-based e-commerce application built with Vite, designed to display a list of products organized into categories. 
The app includes product details such as name, price, description, and local stock photos, with a focus on clean styling and user experience. 
This project was developed as part of Module 6 of a React learning course.

### Features
-Displays a list of products with names, prices, descriptions, and images.

-Organizes products into three categories: Electronics, Clothing, and Home&Office.

-Uses local stock photos for each product, stored in the public/images directory.

-Styled with custom CSS, including flexbox for product cards and spacing between category sections.

-Responsive design with a clean, user-friendly layout.

(Not sure if was necessary but it looks like it was done in the Steven C's videos)
- Fully functional for mobile phones.

- Basic accessibility features, semantic HTML and descriptive alt text.

### Backround on the app
This project was built as part of Module 6, focusing on the following React concepts:
-Creating and organizing React components.

-Managing state with useState.

-Passing data between components using props.

-Styling components with custom CSS.

-Working with static assets (local stock photos).

-Filtering data to display products in categories (bonus challenge).

### Special notes
This was a simple and standard setup similiar to the video walkthroughs provided from lessons. 
Lessons based off of Steven Ceglarek, but ommitted the form page he recently used in his most recent video of the project,
due to it not being called for in the project.

#### Project Structure
src/App.jsx: Main app component that defines the product list and renders the ProductList component.

src/ProductList.jsx: Component that filters products by category and renders them in separate sections.

src/ProductItem.jsx: Component that renders individual product cards with images, names, prices, and descriptions.

src/App.css, src/ProductList.css, src/ProductItem.css: Custom CSS files for styling the app.

public/images/: Directory containing stock photos for each product.


### Step by step Installation
-Clone the repository:
git clone https://github.com/your-username/ecommerce-product-app.git
-cd ecommerce-product-app
-npm install
-npm run dev
-Open browser and visit http://localhost:5173 to see the app in action. (click it in the command prompt.)


#### Below is the React + Vite setup that automatically came in the README
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

