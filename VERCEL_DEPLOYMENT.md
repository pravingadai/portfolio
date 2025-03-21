# Deploying Your Portfolio to Vercel

## Overview
This guide will help you deploy your Professional Portfolio to Vercel instead of Netlify.

## Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com) if you don't have one)
- Your project code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect Your Repository to Vercel

1. Log in to your Vercel account
2. Click on "New Project"
3. Import your repository from GitHub, GitLab, or Bitbucket
4. Select the repository containing your portfolio project

### 2. Configure Project Settings

- **Framework Preset**: Select "Other" (since we're using a custom configuration)
- **Build Command**: Keep the default `npm run build`
- **Output Directory**: Set to `dist/public`
- **Install Command**: Keep the default `npm install`

### 3. Environment Variables

Add the following environment variables in the Vercel project settings:

- `NODE_ENV`: Set to `production`
- `PORT`: Set to `3000`
- `DATABASE_URL`: Set to your database URL (if applicable)

### 4. Deploy

Click the "Deploy" button and wait for the build to complete.

## Vercel Configuration

A `vercel.json` file has been created in your project with the following configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/index.ts",
      "use": "@vercel/node"
    },
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/public",
        "buildCommand": "npm run build"
      }
    }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/server/index.ts" },
    { "src": "/pravingadaicv.pdf", "dest": "/attached_assets/pravingadaicv.pdf" },
    { "src": "/(.*)", "dest": "/index.html" }
  ],
  "env": {
    "NODE_ENV": "production",
    "PORT": "3000",
    "DATABASE_URL": "@database_url"
  }
}
```

This configuration:
- Sets up the server-side rendering with Node.js
- Configures the static build process
- Sets up routing for API endpoints and static files
- Configures environment variables

## Troubleshooting

### Build Failures
- Check the build logs in Vercel for specific errors
- Ensure all dependencies are correctly installed
- Verify that your build script in package.json is working correctly

### API Routes Not Working
- Make sure your API routes are correctly configured in the vercel.json file
- Check that your server code is compatible with serverless functions

### Static Assets Not Loading
- Verify that the paths to static assets are correct
- Check that the dist/public directory contains all necessary files after building

## Additional Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Deploying Node.js to Vercel](https://vercel.com/guides/deploying-nodejs-to-vercel)
- [Environment Variables in Vercel](https://vercel.com/docs/concepts/projects/environment-variables)