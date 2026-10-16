# Argales VIP Motor

Primera propuesta de renovación visual para el taller Argales VIP Motor, Valladolid.

## Ver la web

Sin dependencias ni compilación:

```sh
python3 -m http.server 4173 --directory dist
```

Abre http://localhost:4173. Todo el sitio servido está en `dist/`.

## Incluye

- Landing responsive, navegación móvil, servicios, taller, proceso y preguntas frecuentes.
- Solicitud de cita accesible mediante diálogo nativo y formulario validado.
- El formulario prepara un mensaje de WhatsApp; el visitante lo envía y el taller confirma disponibilidad. No hay reservas automáticas ni backend.
- Llamadas, correo y ubicación enlazados a los datos publicados por el negocio.
- Fuentes e imágenes locales. Sin analítica, cookies de seguimiento ni almacenamiento de datos del formulario.

## Identidad y fuentes

Dirección visual: blanco cálido, grafito y rojo vino, tipografía Manrope y logotipo original. Composición amplia y trato cercano, sin flechas diagonales ni cifras o reseñas inventadas.

Datos e imágenes proceden de https://argalesvipmotor.es/. Las imágenes se reutilizan exclusivamente en esta propuesta del sitio del mismo negocio y requieren los derechos pertinentes para otros usos. No se añaden reseñas, puntuaciones, cifras o testimonios ficticios. La foto general procede de la web original y debe confirmarse con el negocio antes de su publicación comercial definitiva.

Tipografías Manrope y Barlow Condensed, distribuidas bajo SIL Open Font License; licencias en `dist/assets/`.

## Estructura

- `dist/index.html`: contenido y metadatos.
- `dist/styles.css`: diseño y adaptaciones responsive.
- `dist/app.js`: menú y solicitud de cita.
- `dist/assets/`: fotografías, fuentes e icono.
- `.openai/hosting.json`: configuración de la vista previa privada en Sites.

Antes de sustituir la web oficial: validar datos, textos, derechos de imagen y páginas legales con el taller. Los enlaces legales llevan a la web oficial existente.
