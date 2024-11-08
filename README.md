# **Quiz App**

Welcome to the Quiz App! This project is built to test users' knowledge of React, TypeScript, and general programming concepts. The app features dynamic question rendering, state management using React Context, and a clean user interface styled with Tailwind CSS and Flowbite.

---

## **Stack**

### **Frontend**

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript for better development experience.
- **React Router**: For handling routing in the application.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Flowbite**: Pre-designed components for Tailwind CSS to accelerate development.

---

## **Getting Started**

Follow these steps to set up and run the project locally.

### **Prerequisites**

Make sure you have the following installed:

- **Node.js** (v16 or later)
- **npm** or **yarn**

---

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/junaidrmzn/cint_assessment.git
   cd cint_assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

### **Available Scripts**

In the project directory, you can run:

#### **1. Start Development Server**

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### **2. Build for Production**

```bash
npm run build
```

Builds the app for production to the `build` folder. The production build is optimized and ready for deployment.

---

### **Usage Guide**

#### **Setting Up Tailwind CSS**

- Tailwind CSS is pre-configured in the project.
- Modify the styles in the `tailwind.config.js` file to suit your needs.

#### **Question Data**

- Questions are loaded from a `questions.json` file located in the `src/data` directory.
- Ensure your data follows the correct format to prevent errors.

#### **Adding New Components**

- Add new UI components in the `src/components` directory.
- Follow the existing folder structure for consistency.

#### **Routing**

- The application uses **React Router v6**.
- Routes are defined in the `App.tsx` file:
  - `/` - Start Page
  - `/quiz` - Quiz Page
  - `/summary` - Quiz Summary Page

---

## **Features**

1. **Dynamic Question Loading**:

   - Questions are shuffled and dynamically rendered.
   - Supports multiple-choice, true/false, and text-based questions.

2. **Timer for Questions**:

   - Each question has a 1-minute timer.

3. **Responsive Design**:

   - Fully responsive UI built with Tailwind CSS.

4. **Dark Mode**:

   - Support for dark mode styling via Tailwind CSS.

5. **Quiz Summary**:
   - View the number of questions answered, correct answers, incorrect answers, and a percentage score.

---

## **Development Tools**

- **PostCSS**: For processing Tailwind CSS.
- **Autoprefixer**: Automatically adds vendor prefixes for CSS.

---

## **Folder Structure**

```
quiz-app/
├── public/             # Public assets
├── src/
│   ├── components/     # Reusable React components
│   ├── context/        # React Context for state management
│   ├── data/           # JSON data (e.g., questions)
│   ├── pages/          # Page components (Start, Quiz, Summary)
│   ├── styles/         # Global and Tailwind styles
│   ├── types/          # TypeScript interfaces
│   ├── utils/          # Helper functions
│   └── App.tsx         # Main app component
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md           # Project documentation
```

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add some feature'`.
4. Push your changes: `git push origin feature-name`.
5. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### **Screenshots**

| Start Page                    | Quiz Page                    | Summary Page                    |
| ----------------------------- | ---------------------------- | ------------------------------- |
| ![Start Page](url-to-image-1) | ![Quiz Page](url-to-image-2) | ![Summary Page](url-to-image-3) |
