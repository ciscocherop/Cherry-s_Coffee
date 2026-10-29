@echo off
title Cherry's Coffee - local website
cd /d "%~dp0"
if not exist node_modules (
  echo Installing packages for the first time...
  call npm install
)
echo Starting Cherry's Coffee at http://localhost:3000
echo Keep this window open. Close it to stop the website.
start "" http://localhost:3000
call npm run dev
