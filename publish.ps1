
param(
    [Parameter(Mandatory = $true)]
    [string]$Message
)

$ErrorActionPreference = "Stop"

Write-Host "Building project..." -ForegroundColor Cyan

npm.cmd run build
if ($LASTEXITCODE -ne 0) {
    throw "Build failed. Nothing was committed."
}

Write-Host "Staging changes..." -ForegroundColor Cyan

git add -A
if ($LASTEXITCODE -ne 0) {
    throw "Git staging failed."
}

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit." -ForegroundColor Yellow
    exit 0
}
if ($LASTEXITCODE -ne 1) {
    throw "Could not check staged changes."
}

git commit -m $Message
if ($LASTEXITCODE -ne 0) {
    throw "Commit failed."
}

$branch = git branch --show-current
if ($LASTEXITCODE -ne 0 -or !$branch) {
    throw "Could not identify the current Git branch."
}

git push -u origin $branch
if ($LASTEXITCODE -ne 0) {
    throw "Push failed. Check Git status before retrying."
}

Write-Host "Successfully published to GitHub!" -ForegroundColor Green
