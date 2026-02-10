# Daniel Glube - Professional Portfolio

This professional portfolio website is built with React, TypeScript, and Tailwind CSS.

## 🚀 Deployment Instructions

This project is configured to deploy automatically to **GitHub Pages** using GitHub Actions. This resolves all browser compatibility and MIME type issues by compiling the code before hosting.

### 1. Setup on GitHub
1.  **Push your code**: Upload all files to your GitHub repository (main branch).
2.  **Go to Settings**: Navigate to your repository page on GitHub and click on the **Settings** tab.
3.  **Pages**: In the left sidebar, click on **Pages**.
4.  **Source Selection**: 
    *   Change "Source" from "Deploy from a branch" to **"GitHub Actions"**.
    *   *Note: If you don't see "GitHub Actions", just ensure the workflow file in `.github/workflows/deploy.yml` exists in your repo. GitHub usually detects it.*

### 2. Verify Deployment
1.  Click on the **Actions** tab at the top of your repository.
2.  You should see a workflow named "Deploy to GitHub Pages" running (yellow circle) or completed (green checkmark).
3.  Once green, click on the workflow run, then click the link under "deploy" to see your live site!

## 💻 Running Locally

If you want to edit the site on your computer:

1.  Install Node.js (v18 or higher).
2.  Open the folder in your terminal.
3.  Run `npm install` to install dependencies.
4.  Run `npm run dev` to start the local development server.
5.  Open the link shown in the terminal (usually `http://localhost:5173`).
