@echo off
setlocal
echo ==========================================
echo      SUBIENDO CAMBIOS A GITHUB
echo ==========================================
echo.

cd /d "%~dp0"

echo Agregando archivos...
git add .

echo Haciendo commit...
git commit -m "live-data-integration"

echo Subiendo a GitHub...
git push origin main

echo.
echo ==========================================
echo              COMPLETADO
echo ==========================================
pause
