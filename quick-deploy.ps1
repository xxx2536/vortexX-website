# VortexX Gaming - Quick Deploy Script
# PowerShell Script for Windows

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   VortexX Gaming - Quick Deploy" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    git --version | Out-Null
    Write-Host "[✓] Git is installed" -ForegroundColor Green
} catch {
    Write-Host "[✗] Git is not installed. Please install Git first." -ForegroundColor Red
    Write-Host "Download from: https://git-scm.com/downloads" -ForegroundColor Yellow
    exit 1
}

# Initialize Git repository if not exists
if (-not (Test-Path ".git")) {
    Write-Host "[!] Initializing Git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host ""
Write-Host "[1/4] Adding files to Git..." -ForegroundColor Blue
git add .

# Commit changes
Write-Host ""
Write-Host "[2/4] Committing changes..." -ForegroundColor Blue
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git commit -m "Update VortexX website - $timestamp"

# Check if remote exists
$remoteExists = git remote -v | Select-String "origin"
if (-not $remoteExists) {
    Write-Host ""
    Write-Host "[!] No remote repository found." -ForegroundColor Yellow
    Write-Host "Please create a GitHub repository and add it as remote:" -ForegroundColor White
    Write-Host "git remote add origin https://github.com/yourusername/vortexx-website.git" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Or run this command to set up remote:" -ForegroundColor Yellow
    Write-Host "git remote add origin https://github.com/yourusername/vortexx-website.git" -ForegroundColor Cyan
    Write-Host ""
} else {
    # Push to remote
    Write-Host ""
    Write-Host "[3/4] Pushing to GitHub..." -ForegroundColor Blue
    git push origin main
}

Write-Host ""
Write-Host "[4/4] Deployment preparation complete!" -ForegroundColor Green
Write-Host ""

# Display next steps
Write-Host "🎯 Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Create GitHub repository:" -ForegroundColor White
Write-Host "   - Go to https://github.com/new" -ForegroundColor Cyan
Write-Host "   - Name: vortexx-website" -ForegroundColor Cyan
Write-Host "   - Make it public" -ForegroundColor Cyan
Write-Host ""
Write-Host "2. Add remote repository:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yourusername/vortexx-website.git" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Deploy to hosting:" -ForegroundColor White
Write-Host "   - Netlify: https://netlify.com" -ForegroundColor Cyan
Write-Host "   - Vercel: https://vercel.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Buy domain: VortexX.com" -ForegroundColor White
Write-Host "   - Namecheap: https://namecheap.com" -ForegroundColor Cyan
Write-Host "   - GoDaddy: https://godaddy.com" -ForegroundColor Cyan
Write-Host ""
Write-Host "5. Set up Google Search Console:" -ForegroundColor White
Write-Host "   - https://search.google.com/search-console" -ForegroundColor Cyan
Write-Host ""
Write-Host "6. Add Google Analytics:" -ForegroundColor White
Write-Host "   - https://analytics.google.com" -ForegroundColor Cyan
Write-Host ""

Write-Host "📚 Documentation:" -ForegroundColor Yellow
Write-Host "- Deployment Guide: DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host "- Google SEO Guide: GOOGLE-SEO-GUIDE.md" -ForegroundColor Cyan
Write-Host "- Summary: DEPLOYMENT-SUMMARY.md" -ForegroundColor Cyan
Write-Host ""

Write-Host "Press any key to continue..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")