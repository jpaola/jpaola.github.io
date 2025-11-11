# JPaola Personal Webpage & Portfolio


Welcome to my **personal webpage and portfolio**, built with **React** and **Vite**, showcasing my work in **art, books, software, music**, and more. This repository contains both **v1** and **v2** (legacy static site) versions.

---

## 🌟 Features

- Fully **responsive** design for desktop, tablet, and mobile
- **Art, Books, Technology, Projects, Music, and Contact sections**
- **Smooth animations** and scroll effects via React components
- **Image compression** to ensure fast load times and smooth Git pushes
- **Easy deployment** to GitHub Pages

---

## 📁 Repository Structure

```
jpaola.github.io/
├─ /v1/                 # Legacy static HTML/CSS version
├─ /v2/                 # Modern React + Vite version
├─ /public/             # Static assets for React app
├─ /src/                # React app source code
├─ /dist/               # Production build output (auto-generated)
├─ package.json
├─ README.md
└─ ...
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Compress images before committing

To keep the repository lightweight and GitHub pushes smooth:

```bash
chmod +x compress.sh   # run once to make executable
./compress.sh          # compress all images
```

Then review changes and commit:

```bash
git add .
git commit -m "Optimized images"
git push origin main
```

> ⚠️ Always run `compress.sh` before adding new images.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview.

### 4. Build for production

```bash
npm run build
```

This generates the `dist` folder with your production-ready app.

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This uses `gh-pages` to push the `dist` folder to the `gh-pages` branch, making your site live at:

```
https://jpaola.github.io/
```

---

## 🎈 Sections & Features

### About Me
- Overview of my professional and creative background
- My interests in **engineering, data, psychology, and art**

### Art
- Portfolio of drawings, paintings, and a **published coloring book**
- Smooth hover effects and lightbox-style image presentation

### Books
- Organized into **Personal Growth, Philosophy, Software, and Fiction**
- Covers, titles, and links to Amazon or other sources

### Technology & Projects
- Showcases coding projects with screenshots and live links
- GitHub repositories and public gists embedded

### Music
- Custom playlist designed for **focus and flow**
- Openable directly on Spotify

### Contact
- Email button for direct contact
- Social links to **GitHub, LinkedIn, Amazon author page**

---

## 🖼️ Image Compression

Optimized images help keep **GitHub pushes smooth** and site load times fast. Use the included `compress.sh` script:

```bash
chmod +x compress.sh
./compress.sh
```

---

## 📦 Deployment Checklist

1. Run `./compress.sh` to optimize images
2. Build production files: `npm run build`
3. Deploy with GitHub Pages: `npm run deploy`
4. Verify that `https://jpaola.github.io/` loads correctly
5. Repeat before adding new assets or making major changes

---

## 🔧 Tech Stack

- **React 18** – Modern component-based UI
- **Vite** – Fast build and development server
- **Tailwind CSS** – Utility-first styling
- **React Icons** – Scalable icons across the app
- **gh-pages** – GitHub Pages deployment

---

## 📜 Version History

- **v1:** Static HTML/CSS site (legacy)
- **v2:** Current React + Vite app (modern, dynamic, responsive)

---

## 🤝 Contributing

1. Fork the repository
2. Clone your fork
3. Create a feature branch: `git checkout -b feature-name`
4. Make changes & compress new images
5. Commit: `git commit -m "Your message"`
6. Push and submit a pull request

---

### ⚡ Notes

- Keep all new images **compressed** before committing.
- Always test your app locally before deploying.
- Use `base: './'` in `vite.config.js` to ensure assets load on GitHub Pages.

---

*Made with ❤️ by JPaola*

