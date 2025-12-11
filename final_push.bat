@echo off
setlocal
echo ==========================================
echo      FINAL DEPLOY - WATER FEATURE PROS
echo ==========================================
echo.

echo 1. Comprobando estado...
git status

echo.
echo 2. Guardando TODOS los cambios (WFP Refactor)...
git add .
git commit -m "feat: complete wfp refactor v2"

echo.
echo 3. Subiendo a GitHub...
git push origin main

echo.
echo ==========================================
echo              SI "Done" -> VERCEL ACTUALIZARA
echo ==========================================
echo Si ves errores de conexion, revisa tu internet.
echo Si dice "Everything up-to-date", ya esta subido.
echo.
pause
