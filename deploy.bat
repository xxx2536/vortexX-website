@echo off
echo ========================================
echo    VortexX Gaming Website Deployer
echo ========================================
echo.

echo [1/5] Checking Git status...
git status

echo.
echo [2/5] Adding all files...
git add .

echo.
echo [3/5] Committing changes...
git commit -m "Update VortexX website - %date% %time%"

echo.
echo [4/5] Pushing to GitHub...
git push origin main

echo.
echo [5/5] Deployment complete!
echo.
echo Your website will be deployed automatically to:
echo - Netlify: https://your-site.netlify.app
echo - Vercel: https://your-site.vercel.app
echo.
echo To set up custom domain (VortexX.com):
echo 1. Go to your hosting provider dashboard
echo 2. Add custom domain: VortexX.com
echo 3. Update DNS records
echo.
pause 