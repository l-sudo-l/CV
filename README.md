# CV — Luis Rodriguez

CV online de **Luis Manuel Rodríguez Márquez**, Full Stack Developer y Game Dev.
Página estática (HTML, CSS y JavaScript sin frameworks) publicada con GitHub Pages.

## Estructura

```
CV/
├── index.html            # Contenido del CV (solo estructura, sin estilos ni scripts en línea)
├── css/
│   ├── base.css          # Variables de color, reset, layout general y botón "Guardar PDF"
│   ├── hero.css          # Encabezado: foto, nombre, bio y links
│   ├── secciones.css     # Experiencia, formación, habilidades, idiomas y contacto
│   ├── proyectos.css     # Grilla y tarjetas de proyectos
│   ├── previews.css      # Vistas previas animadas de cada proyecto
│   ├── modal.css         # Ventana "Detalles"
│   ├── responsive.css    # Ajustes para celulares (≤ 640 px)
│   └── print.css         # Estilos para exportar a PDF
├── js/
│   ├── datos.js          # Datos de cada proyecto que se muestran en "Detalles"
│   ├── modal.js          # Abre y cierra la ventana; maneja todos los clicks de la página
│   └── animaciones.js    # Animaciones de Multiverse Dominion y Arkanoid
└── img/
    └── profile.png       # Foto de perfil
```

## Cómo agregar un proyecto

1. En `index.html`, copiá una tarjeta `<div class="proj-card" data-proyecto="mi-proyecto">` y cambiá el texto y los links.
   Con la clase `proj-card full` la tarjeta ocupa todo el ancho.
2. En `js/datos.js`, agregá una entrada `'mi-proyecto': { ... }` con el título, tecnologías, descripción,
   funcionalidades y el link al repo (`repo`) y, si está publicado, a la app (`live`).
3. Si querés una vista previa propia, agregá sus estilos en `css/previews.css`.

## Verlo en tu compu

Abrí `index.html` en el navegador. No necesita instalar nada.

## Exportar a PDF

Botón **Guardar PDF** → en el diálogo de impresión, elegí "Guardar como PDF" y activá "Gráficos de fondo".
