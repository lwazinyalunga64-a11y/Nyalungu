# Deployment Instructions for GoalGetaway

The project is ready for deployment to Vercel.

## Option 1: Automatic Deployment (Recommended)
1. Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **New Project**.
3. Select the GitHub repository `lwazinyalunga64-a11y/Nyalungu`.
4. Vercel will automatically detect the Vite framework.
5. Click **Deploy**.

## Option 2: CLI Deployment
If you have the Vercel CLI installed:
1. Open your terminal in the `goalgetaway-mvp` directory.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the prompts to log in and deploy.

## Configuration Details
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Clean URLs**: Enabled
- **Rewrites**: Configured for Single Page Application (SPA) support.

The file `vercel.json` has been created in the root directory with these settings.
