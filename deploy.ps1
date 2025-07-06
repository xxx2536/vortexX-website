# VortexX Gaming Website Deployer
# PowerShell Script for Windows

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   VortexXstore" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    git --version | Out-Null
    Write-Host "[✓] Git is installed" -ForegroundColor Green
} catch {
    Write-Host "[✗] Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if we're in a Git repository
if (-not (Test-Path ".git")) {
    Write-Host "[!] Initializing Git repository..." -ForegroundColor Yellow
    git init
    git remote add origin https://github.com/yourusername/vortexx-website.git
}

Write-Host ""
Write-Host "[1/5] Checking Git status..." -ForegroundColor Blue
git status

Write-Host ""
Write-Host "[2/5] Adding all files..." -ForegroundColor Blue
git add .

Write-Host ""
Write-Host "[3/5] Committing changes..." -ForegroundColor Blue
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update VortexX website - $timestamp"

Write-Host ""
Write-Host "[4/5] Pushing to GitHub..." -ForegroundColor Blue
git push origin main

Write-Host ""
Write-Host "[5/5] Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be deployed automatically to:" -ForegroundColor Yellow
Write-Host "- Netlify: https://your-site.netlify.app" -ForegroundColor Cyan
Write-Host "- Vercel: https://your-site.vercel.app" -ForegroundColor Cyan
Write-Host ""
Write-Host "To set up custom domain (VortexX.com):" -ForegroundColor Yellow
Write-Host "1. Go to your hosting provider dashboard" -ForegroundColor White
Write-Host "2. Add custom domain: VortexX.com" -ForegroundColor White
Write-Host "3. Update DNS records" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown") 