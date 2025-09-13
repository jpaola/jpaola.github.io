# jpaola.github.io

Welcome to the repository for my personal website!  

This site is built using semantic HTML, SCSS/Less/CSS, and minimal dependencies — just the essentials.  

---

## 🚀 About

- **Author**: jpaola  
- **Purpose**: A personal homepage / portfolio  
- **Built with**: Semantic HTML & CSS (with SCSS/Less preprocessors)  
- **Live site**: [jpaola.github.io](https://jpaola.github.io)

---

## 🧩 Structure

Here’s a breakdown of the repo layout:

```
/
├── index.html           ← Main site entry point
├── favicon.ico          ← Site favicon
├── styles/              ← Styling files: SCSS/Less → CSS
├── images/              ← Media assets (images, icons, etc.)
└── v1/                  ← (Optional) Previous version / archived version
```

- **index.html**: The homepage; semantic HTML structure.  
- **styles/**: Preprocessor files and compiled styles.  
- **images/**: All site images used in content or design.

---

## 🛠 Development

If you want to build or contribute:

1. Clone this repo  
   ```bash
   git clone https://github.com/jpaola/jpaola.github.io.git
   ```
2. Install dependencies (if any) — for Sass/Less build tools  
   ```bash
   npm install
   ```
3. Build styles  
   ```bash
   npm run build
   ```
   ⚠️ *If you’re using a watcher or local server, set that up too for faster dev feedback.*

4. Preview locally (e.g. open `index.html` in browser or serve via static server)

---

## 🖼️ Image Compression

To keep the site fast and GitHub pushes smooth, all images should be optimized before committing. A helper script `compress.sh` is included in the repo for this purpose.

### How to use:

1. Make sure the script is executable (run once):
   ```bash
   chmod +x compress.sh
   ```

2. Run the script to compress images:
   ```bash
   ./compress.sh
   ```

3. Review changes, then commit and push as usual:
   ```bash
   git add .
   git commit -m "Optimized images"
   git push origin main
   ```

**Note:** ⚠️ Always run `compress.sh` before committing new or updated images to keep file sizes small and avoid push issues.

---

## 📂 Versioning & Updates

- **v1/** folder contains archived content from a previous version of the site.  
- Future updates will include new content sections, design adjustments, and possible interactivity enhancements.

---

## 💡 Feedback & Contact

I’d love to hear any suggestions, ideas, or feedback:

- GitHub Issues or Pull Requests welcome  
- You can reach me via email: *itsmejpaola@gmail.com*

---

Thank you for visiting / viewing my project!  
— jpaola
