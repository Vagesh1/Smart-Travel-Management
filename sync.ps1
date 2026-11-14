
$ErrorActionPreference = "Stop"

Write-Host "Synchronizing Smart Travel Management from ServiceNow..." -ForegroundColor Cyan

npm.cmd run transform -- --auth smart-travel-pdi

if ($LASTEXITCODE -ne 0) {
    throw "ServiceNow synchronization failed."
}

Write-Host "Synchronization completed." -ForegroundColor Green
