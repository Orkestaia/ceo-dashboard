@echo off
setlocal
echo ==========================================
echo      CEO DASHBOARD - AUTO DEPLOY (FIXED)
echo ==========================================
echo.

echo 1. Limpiando intentos fallidos...
rmdir /s /q .git 2>nul
del .gitignore 2>nul

echo 2. Configurando Git (Identidad Local)...
rem Esto es necesario para que Git te deje guardar cambios
git init
git config user.name "Aitor"
git config user.email "aitor@ceo-dashboard.local"

echo.
echo 3. Creando .gitignore...
echo node_modules/ > .gitignore
echo .next/ >> .gitignore
echo .env.local >> .gitignore
echo .env >> .gitignore
echo .DS_Store >> .gitignore
rem No ignoramos los scripts esta vez para evitar bloqueos

echo.
echo 4. Guardando codigo...
git add .
git commit -m "feat: complete project upload"

echo.
echo 5. Subiendo a GitHub...
git branch -M main
git remote add origin https://github.com/Orkestaia/ceo-dashboard
git push -u origin main

echo.
echo ==========================================
echo              F I N A L I Z A D O
echo ==========================================
echo Ahora ve a Vercel -> Add New -> Import.
pause
