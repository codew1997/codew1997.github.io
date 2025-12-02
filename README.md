# CodeBox Website

A cyberpunk-themed static website for the CodeBox Android App.

## Technology Stack
- **React 18**: Component-based UI.
- **Tailwind CSS**: Utility-first styling with custom Cyberpunk config.
- **Vite**: Fast build tool (assumed environment).
- **React Router (HashRouter)**: Client-side routing compatible with GitHub Pages.
- **React Helmet Async**: Head management for SEO.
- **Lucide React**: Vector icons.

## Setup
1. Install dependencies:
   ```bash
   npm install react@18.2.0 react-dom@18.2.0 react-router-dom@6.22.3 react-helmet-async@2.0.4 lucide-react@0.344.0 react-markdown@9.0.1
   npm install -D tailwindcss postcss autoprefixer vite @vitejs/plugin-react
   ```

## GitHub Pages Deployment Instructions

Since this is a Single Page Application (SPA) using `HashRouter`, it can be hosted easily on GitHub Pages.

1.  **Initialize Git**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create Repository**:
    Create a new repository on GitHub named `codebox-site`.

3.  **Update `vite.config.ts` (if using Vite)**:
    Set the base URL to your repository name.
    ```typescript
    // vite.config.ts
    export default defineConfig({
      base: '/codebox-site/', // REPLACE WITH YOUR REPO NAME
      plugins: [react()],
    })
    ```

4.  **Deploy Script**:
    Add this to `package.json`:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
    (You may need to install gh-pages: `npm install -D gh-pages`)

5.  **Deploy**:
    ```bash
    npm run deploy
    ```

6.  **Settings**:
    Go to GitHub Repo -> Settings -> Pages. Ensure source is set to `gh-pages` branch.

## Future Blog Post Ideas
1.  *Memory Leaks in Android: How to spot them using Profiler.*
2.  *Understanding Graph Traversal: BFS vs DFS with Visuals.*
3.  *Kotlin Coroutines vs RxJava: The 2024 Showdown.*
4.  *System Design: Designing a URL Shortener.*