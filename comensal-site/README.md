# COMENSAL® — Sitio Web Oficial

> **Nutrición · Oficio · Memoria**  
> Plataforma de resistencia cultural. Transformamos consumidores pasivos en ciudadanos críticos.

---

## 🗂️ Estructura del proyecto

```
comensal-site/
├── index.html              ← Página principal (sitio completo)
├── assets/
│   ├── css/
│   │   └── comensal.css    ← Todos los estilos
│   ├── js/
│   │   └── comensal.js     ← Interactividad y animaciones
│   └── img/
│       ├── remera-mate.png     ← Cápsula 01 · El Mate
│       ├── remera-locro.png    ← Cápsula 02 · La Parvada
│       └── remera-tomate.png   ← Cápsula 03 · Territorio
└── README.md
```

---

## 🚀 Cómo publicar en GitHub Pages

### Paso 1 — Crear el repositorio en GitHub

1. Ir a [github.com/new](https://github.com/new)
2. Nombre sugerido: `comensal-site`
3. Dejarlo **público** (necesario para GitHub Pages gratis)
4. **NO** marcar "Initialize this repository" (ya tiene archivos)
5. Clic en **Create repository**

### Paso 2 — Subir los archivos (primera vez)

```bash
# Desde la carpeta del proyecto:
git init
git add .
git commit -m "🍽️ Initial commit — COMENSAL sitio web v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/comensal-site.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages

1. En el repositorio, ir a **Settings → Pages**
2. En *Source*, seleccionar **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Clic en **Save**
5. En ~2 minutos el sitio estará en:  
   `https://TU_USUARIO.github.io/comensal-site`

---

## 🔄 Cómo actualizar el sitio

Cada vez que quieras cambiar algo:

```bash
# 1. Hacé los cambios en los archivos
# 2. Guardá y subí:
git add .
git commit -m "✏️ Descripción del cambio"
git push
```

GitHub Pages se actualiza automáticamente en ~1-2 minutos.

---

## 📝 Guía de contenido — Dónde editar cada cosa

| Qué querés cambiar | Archivo | Qué buscar |
|---|---|---|
| Textos del manifiesto | `index.html` | `id="manifiesto"` |
| Productos de la tienda | `index.html` | `id="oficio"` |
| Artículos del blog | `index.html` | `id="blog"` |
| Recetas / banco | `index.html` | `id="recetas"` |
| Colores del sitio | `assets/css/comensal.css` | `:root { --tomate: ...` |
| Animaciones | `assets/js/comensal.js` | línea 1 en adelante |
| Imágenes de remeras | `assets/img/` | reemplazar archivos `.png` |

---

## 🎨 Identidad visual

| Variable CSS | Valor | Uso |
|---|---|---|
| `--tomate` | `#C8330A` | Acento principal, CTAs |
| `--negro` | `#0D0905` | Fondos oscuros, nav |
| `--tierra` | `#3D2010` | Fondos medios |
| `--crema` | `#F2E8D0` | Textos sobre oscuro |
| `--crema-suave` | `#FAF4E8` | Fondos claros |

**Tipografías:**
- Display: [Barlow Condensed](https://fonts.google.com/specimen/Barlow+Condensed)
- Cuerpo: [Crimson Pro](https://fonts.google.com/specimen/Crimson+Pro)
- Mono: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono)

---

## 🔑 Palabras clave SEO

`Soberanía alimentaria` · `Etiquetado Frontal Argentina` · `Comensalidad crítica` · `Taller de nutrición para escuelas` · `Ley 27.642`

---

## 📚 Respaldo científico

- Guías Alimentarias para la Población Argentina (GAPA)
- Clasificación NOVA · OPS/OMS
- Patricia Aguirre — *Historia Social de la Comida*
- Claude Fischler — *El (h)omnívoro*
- Ley 27.642 — Etiquetado Frontal de Alimentos

---

*COMENSAL® — La mesa como acto político.*
