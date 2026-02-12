# MultiMian Studio - Deployment Guide

## GitHub Pages Deployment

Your website has been successfully pushed to GitHub and configured for automatic deployment to GitHub Pages.

### Repository
- **GitHub Repository**: https://github.com/Mianhassam96/MultiMian-Studio
- **Live Website**: https://mianhassam96.github.io/MultiMian-Studio/

### Automatic Deployment

The website is configured with GitHub Actions for automatic deployment. Every time you push to the `main` branch, the website will automatically rebuild and deploy.

### How to Enable GitHub Pages (One-Time Setup)

1. Go to your repository: https://github.com/Mianhassam96/MultiMian-Studio
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Save the settings

### Deployment Workflow

The deployment happens automatically through GitHub Actions:
- File: `.github/workflows/deploy.yml`
- Trigger: Push to `main` branch
- Process: Build → Export → Deploy to GitHub Pages

### Configuration Files

1. **next.config.js** - Configured for static export with basePath
2. **package.json** - Added export script
3. **.github/workflows/deploy.yml** - GitHub Actions workflow
4. **public/.nojekyll** - Ensures GitHub Pages serves files correctly

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# The output will be in the 'out' folder
```

### Updating the Website

1. Make your changes locally
2. Test with `npm run dev`
3. Commit your changes: `git add . && git commit -m "Your message"`
4. Push to GitHub: `git push origin main`
5. GitHub Actions will automatically deploy (takes 2-3 minutes)

### Monitoring Deployment

- Go to the **Actions** tab in your GitHub repository
- You'll see the deployment status for each push
- Click on any workflow run to see detailed logs

### Important Notes

- First deployment may take 5-10 minutes
- Subsequent deployments take 2-3 minutes
- Clear browser cache if you don't see updates immediately
- All routes work with the `/MultiMian-Studio` base path

### Troubleshooting

If the website doesn't load:
1. Check GitHub Actions tab for deployment errors
2. Ensure GitHub Pages is enabled in Settings
3. Wait 5-10 minutes for first deployment
4. Clear browser cache and try again

---

**Last Updated**: February 12, 2026
**Status**: ✅ Deployed and Live
