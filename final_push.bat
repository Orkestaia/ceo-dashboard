@echo off
setlocal
echo ==========================================
echo      FINAL DEPLOY V3 - DARK MODE
echo ==========================================
echo.

echo 1. Comprobando estado...
git status

echo.
echo 2. Guardando TODOS los cambios (V3 Design)...
git add .
git commit -m "feat: v3 dark mode and colorful cards"

echo.
echo 3. Subiendo a GitHub...
git push origin main

echo.
echo ==========================================
echo              LISTO
echo ==========================================
echo Si ves "Everything up-to-date" es que ya estaba.
echo Revisa Vercel ahora.
echo.
pause
