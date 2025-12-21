# RV2 Seboruco - Guía de Despliegue y Assets

Esta guía detalla cómo gestionar las imágenes del sitio y los pasos para desplegar la aplicación en un servidor VPS (Hostinger) usando Nginx o Apache.

---

## 1. Gestión de Imágenes

Para reemplazar las imágenes de demostración (Unsplash) por tus propias fotos reales del local y los juegos, sigue estos pasos:

### A. Estructura de Carpetas
En la raíz de tu proyecto, asegúrate de tener una carpeta llamada `public`. Dentro de ella, crea una carpeta `img`:

```text
/public
  /img
    /hero-bg.jpg      (Fondo principal)
    /juegos
       beat-saber.jpg
       job-simulator.jpg
       ...
```

### B. Dimensiones y Formatos Recomendados
Para asegurar que la web cargue rápido (performance) y se vea bien en móviles y PC:

| Uso | Dimensiones (px) | Formato | Peso Máximo |
|-----|------------------|---------|-------------|
| **Hero (Fondo Principal)** | 1920 x 1080 | WebP o JPG (Optimizado) | < 250 KB |
| **Cards de Juegos** | 600 x 800 (Vertical) | WebP o JPG | < 80 KB |
| **Iconos / Logos** | Vectorial | SVG | < 5 KB |
| **Fondo Pricing (Textura)**| 500 x 500 (Tileable)| PNG Transparente | < 50 KB |

> **Tip:** Usa herramientas como [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/) para comprimir las imágenes antes de subirlas.

### C. Actualizar el Código
Una vez tengas tus imágenes en la carpeta `public/img`, actualiza las referencias en el código:

1.  **Fondo Principal:**
    *   Archivo: `components/Hero.tsx`
    *   Cambio:
        ```tsx
        // Busca la etiqueta <img> y cambia el src:
        <img 
          src="/img/hero-bg.jpg" 
          alt="Seboruco VR" 
          className="..."
        />
        ```

2.  **Imágenes de Juegos:**
    *   Archivo: `constants.ts`
    *   Cambio: Actualiza el array `VR_GAMES`.
        ```ts
        export const VR_GAMES: GameItem[] = [
          { title: "Beat Saber", image: "/img/juegos/beat-saber.jpg" },
          // ... resto de juegos
        ];
        ```

---

## 2. Despliegue en VPS (Hostinger)

Asumiendo que usarás **Nginx** como servidor web (recomendado por rendimiento) en un entorno Ubuntu/Debian.

### Paso 1: Generar la Build (En tu PC local)
Esta aplicación es una Single Page Application (SPA) construida con React/Vite. No subas el código fuente crudo; sube la versión optimizada.

1.  Abre tu terminal en la carpeta del proyecto.
2.  Ejecuta:
    ```bash
    npm install
    npm run build
    ```
3.  Esto creará una carpeta llamada `dist`. **El contenido de esta carpeta es lo único que necesitas subir al servidor.**

### Paso 2: Subir Archivos al VPS
Usa FileZilla o SCP para subir el contenido de la carpeta `dist` a tu servidor.
*   Ruta sugerida en el servidor: `/var/www/seboruco/html`

### Paso 3: Configuración de Nginx
1.  Conéctate por SSH a tu VPS.
2.  Crea un archivo de configuración para el sitio:
    ```bash
    sudo nano /etc/nginx/sites-available/seboruco
    ```
3.  Pega la siguiente configuración (ajusta `server_name` con tu dominio real si tienes uno, o usa la IP):

    ```nginx
    server {
        listen 80;
        server_name www.rv2ven.com; # O tu IP si aún no apuntas el dominio

        root /var/www/seboruco/html;
        index index.html;

        # Compresión Gzip para velocidad
        gzip on;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

        location /seboruco {
            alias /var/www/seboruco/html;
            try_files $uri $uri/ /index.html;
        }
        
        # Si la app está en la raíz del subdominio/dominio:
        location / {
            try_files $uri $uri/ /index.html;
        }

        # Cacheo de imágenes estáticas (Mejora velocidad)
        location ~* \.(jpg|jpeg|png|gif|ico|css|js|webp)$ {
            expires 1y;
            add_header Cache-Control "public, no-transform";
        }
    }
    ```

4.  Activa el sitio y reinicia Nginx:
    ```bash
    sudo ln -s /etc/nginx/sites-available/seboruco /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl restart nginx
    ```

### Paso 4: Certificado SSL (HTTPS)
Si usas un dominio real, asegura el sitio con Certbot (gratis):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d www.rv2ven.com
```

---

## 3. Comandos Útiles

*   **Para editar contenido (Precios/Textos):** Edita los archivos `constants.ts` localmente, vuelve a ejecutar `npm run build` y sube los nuevos archivos JS/HTML a la carpeta `dist` del servidor.
