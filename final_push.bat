@echo off
setlocal
echo ==========================================
echo      FINAL DEPLOY V3 - LIVE DATA
echo ==========================================
echo.

echo 1. Comprobando estado...
git status

echo.
echo 2. Guardando TODOS los cambios (Live Sheets Integrados)...
git add .
git commit -m "feat: complete live sheets integration"

echo.
echo 3. Subiendo a GitHub...
git push origin main

echo.
echo ==========================================
echo              LISTO - DATOS EN VIVO
echo ==========================================
echo Revisa Vercel. Ahora leera de tus GIDs.
echo.
pause
