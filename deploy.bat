@echo off
setlocal
echo ==========================================
echo      CEO DASHBOARD - AUTO DEPLOY
echo ==========================================
echo.

echo 1. Limpiando configuraciones antiguas...
rmdir /s /q .git 2>nul
del .gitignore 2>nul

echo 2. Creando archivo .gitignore...
echo node_modules/ > .gitignore
echo .next/ >> .gitignore
echo .env.local >> .gitignore
echo .env >> .gitignore
echo .DS_Store >> .gitignore
echo deploy.bat >> .gitignore
echo DEPLOY_GUIDE.md >> .gitignore

echo.
echo 3. Inicializando nuevo repositorio Git...
git init
git add .
git commit -m "feat: complete project upload"

echo.
echo 4. Conectando con https://github.com/Orkestaia/ceo-dashboard ...
git branch -M main
git remote add origin https://github.com/Orkestaia/ceo-dashboard
git push -u origin main

echo.
echo ==========================================
echo              SI OCURRE UN ERROR:
echo ==========================================
echo Si ves "git is not recognized", SI O SI debes reiniciar
echo VS Code o tu terminal. Cierralo todo y vuelve a abrir.
echo.
pause
