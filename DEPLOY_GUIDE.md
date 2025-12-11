# Guia de Despliegue (GitHub & Vercel)

## 0. Prerrequisitos
Parece que **git** no está instalado o no accesible en tu terminal.
1.  Descarga e instala Git desde [git-scm.com](https://git-scm.com/).
2.  Reinicia tu terminal (o VS Code) tras instalarlo.

## 1. Subir a GitHub
Una vez tengas Git instalado, ejecuta esto en la carpeta de tu proyecto:

```bash
git init
git add .
git commit -m "Initial commit"
```

Luego sigue estos pasos:


1.  Ve a [github.com/new](https://github.com/new) y crea un repositorio (ej: `ceo-dashboard`).
2.  **No** inicialices con README, .gitignore ni licencia (déjalo vacío).
3.  Copia la URL del repositorio (ej: `https://github.com/tu-usuario/ceo-dashboard.git`).
4.  Ejecuta estos comandos en tu terminal (en la carpeta del proyecto):

```bash
git branch -M main
git remote add origin <URL_DE_TU_REPO>
git push -u origin main
```

*(Sustituye `<URL_DE_TU_REPO>` por la URL que copiaste)*

## 2. Desplegar en Vercel
Una vez el código esté en GitHub:

1.  Ve a [vercel.com/new](https://vercel.com/new).
2.  Importa el repositorio `ceo-dashboard` desde tu cuenta de GitHub.
3.  En "Framework Preset", asegúrate de que dice **Next.js**.
4.  Dale a **Deploy**.

¡Listo! Vercel te dará una URL (ej: `ceo-dashboard.vercel.app`) donde tu dashboard estará vivo.
