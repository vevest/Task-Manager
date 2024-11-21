# React + Typescript + Vite

This template provides a minimal setup to get React with Typescript working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


**Technologies used**
• React: A JavaScript library for building user interfaces.
• TypeScript: A type-safe version of JavaScript that helps catch errors.
• Vite: A fast development server and bundler that uses ES modules for fast startup and build times.
• ESLint: A linter that helps maintain consistent code quality and structure.


**Installation and Running**
• Ensure you have Node.js installed on your machine.


**Step 1: Clone the project**
• First, clone this repository to your local machine by running the following in your terminal:

  git clone https://github.com/vevest/task-manager.git


**Step 2: Install dependencies**
• Open the cloned repository in VS Code, then open a new terminal and install the required dependencies by running:

  npm install


**Step 3: Start the application**
• Once everything is installed, start the application by running:

  npm run dev
  
• This will start your application, and you can now access it in your browser.


**Project Structure**
/projekt-mappen
├── node_modules  

├── public 

├── /src

│   ├── /allComponents 

│   ├── /assets

│   ├── /assignments

│   ├── /context

│   ├── /login

│   └── /pages  

├── _partials.scss 

├── App.tsx

├── declarations.d.ts

├── index.css

├── index.css.map

├── index.scss 

├── main.tsx 

├── .gitignore

├── eslintrc.js 

├── index.html 

├── package-lock.json 

├── package.json 

├── README.md  

├── tsconfig.json  

└── vite.config.js          

**Description of folders and files**

• **/src/allComponents**: Contains components such as the water tracking update, weekly points overview, navigation bar, level progress bar, and how it updates dynamically as tasks are completed. It also includes a function to move tasks to a list of completed tasks when tasks are checked off.

• **/src/context**: Contains all the React Contexts used for global state management. These are used to share data such as username, points, and task status across the application's components.

•** /src/pages**: Contains the 3 pages the user can navigate between when logged in.

• **App.tsx**: The main component that contains the structure of the application and loads the relevant subcomponents.

• **main.tsx**: The entry point to the application, where ReactDOM.render() is used to render the app to the DOM so it can be displayed in the browser.

• **index.html**: The HTML index file is the basic structure of the application.

• **vite.config.ts**: The configuration file for Vite. 

• **package.json**: Contains information about the project, including external libraries and metadata the application needs. It also includes a list of scripts used to build, start, and run the application.





  
