# PWA Geolocalización

Aplicación Web Progresiva (PWA) que obtiene y muestra la ubicación del usuario usando la Geolocation API.

## 🚀 Desplegar en GitHub Pages

### Pasos para desplegar:

1. **Crea un repositorio en GitHub** (puede ser público o privado)

2. **Sube todos los archivos** a tu repositorio:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: PWA Geolocalización"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

3. **Habilita GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona la rama `main` y la carpeta `/ (root)`
   - Guarda los cambios

4. **Tu PWA estará disponible en**:
   ```
   https://TU_USUARIO.github.io/TU_REPOSITORIO/
   ```

## 📱 Agregar a inicio en iOS

1. Abre la PWA en Safari (iOS/iPadOS)
2. Toca el botón de **compartir** (□↑) en la barra inferior
3. Desplázate y selecciona **"Agregar a pantalla de inicio"**
4. La app aparecerá como una aplicación nativa en tu pantalla de inicio

## 🎨 Crear iconos

Para que la PWA funcione completamente, necesitas crear dos iconos:

- `icon-192.png` (192x192 píxeles)
- `icon-512.png` (512x512 píxeles)

### Opciones para crear los iconos:

1. **Usar herramientas online**:
   - [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator)
   - [RealFaviconGenerator](https://realfavicongenerator.net/)

2. **Crear manualmente**:
   - Diseña un icono simple con un emoji de ubicación 📍 o un logo
   - Exporta en los tamaños requeridos

3. **Temporalmente**, puedes comentar el array `icons` en `manifest.webmanifest` si no tienes iconos aún.

## ✅ Características

- ✅ Solicita permiso de geolocalización
- ✅ Muestra latitud, longitud y precisión
- ✅ Actualización en tiempo real
- ✅ Compatible con iOS/iPadOS
- ✅ Instalable como PWA
- ✅ Funciona en GitHub Pages (HTTPS)

## 🔧 Requisitos

- Navegador moderno con soporte para Geolocation API
- HTTPS (requerido para geolocalización en producción)
- Permisos de ubicación habilitados en el dispositivo

## 📝 Notas

- En iOS, la geolocalización solo funciona con HTTPS o localhost
- Los permisos se gestionan por sitio en la configuración del sistema
- La app debe iniciarse con interacción del usuario (clic en botón)

