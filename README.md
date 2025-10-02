# Personal Portfolio Site

A simple personal portfolio site built with **EJS templates** and **Express**.  
This project demonstrates serving static-like pages using routes and shared layouts.

---

## Concepts
- Static pages rendered with EJS.
- Common **header** and **footer** for all pages.
- Basic routing with Express.
- 404 routing to prevent routing errors.

---

## Routes
- `/` - Home page
- `/about` – About Us page
- `/projects` – Projects showcase
- `/contact` – Contact me page

## Features
- Multiple pages: Home, About, Projects, and Contact.  
- Reusable header and footer included on all pages.  
- Static assets (CSS, images, JavaScript) served from the `public/` folder.  
- Project data dynamically loaded from a JSON file.  
- Clean routing with Express for each page.  
- Custom 404 page for invalid routes.  
  
---

## Tech Stack
- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Styling**: CSS (served from public/)
- **Data**: JSON with fs module

---

## Routes
- `/` - Home page
- `/about` – About page
- `/projects` – Projects showcase
- `/contact` – Contact page
  
---
## Folder Structure
```bash
my-portfolio/
├── public/              # Static assets (CSS, JS, Images)
│   └── styles.css
├── views/               # EJS templates
│   ├── partials/        # Header, footer, navbar
│   ├── pages/           # about.ejs, projects.ejs, contact.ejs
│   └── layout.ejs       # Main layout (optional)
├── data/                # JSON files (projects.json, etc.)
├── routes/              # Route handlers (optional for modularity)
├── app.js               # Entry point
├── package.json
└── README.md
```

---

## Setup & Guide

### 1. Initialize the project
```bash
mkdir portfolio-site
cd portfolio-site
npm init -y
npm install express ejs
npm run start
```

---

## Installation 
### 1. Clone the repository:
```bash
git clone https://github.com/Olatayo-ife/Personal-portfolio-website-project-.git
cd personal-portfolio-website-project-
```

---
### 2. Install dependencies:
```bash
npm install
```

---
### 3. Run the server:
```bash
npm run dev   # if nodemon is set up
```

---
-OR-

```bash
node app.js
```

---

### 4. Open in browser:
```bash
http://localhost:3000
```

---

## Credits
- This project was built collaboratively by:

- [Sultan Abdussalam Oriire](https://github.com/Abdussalam-Sultan) 
- [Osazuwa Matthew Ogbebor](https://github.com/osazuwamatthewogbebor) 
- [Samuel Boman Elias](https://github.com/Samuelboman)
- [Timothy Olaleye](https://github.com/Folarex10)
- [Tobi Emmanuel](https://github.com/Thobiy)
- [Olatayo Hezekiah Love](https://github.com/Olatayo-ife)
- [Temitope Funmilola Ibikunle](https://github.com/Temmyibk)
- [Irenikase Samuel Temitope](https://github.com/samuelire)
- [Noheemat](https://github.com/Tomzyglamstore)
  
- Each member actively contributed code, commits, and documentation.

---
## 🙌 Acknowledgements
- Thanks to Mr Adelabu Oluwatobiloba for proper guidance. 
- Node.js & Express.js documentation.  
- EJS template engine.  
