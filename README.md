# Argales VIP Motor · Propuestas de diseño

Tres versiones independientes de una landing para Argales VIP Motor (Valladolid), reunidas en un comparador responsive.

## Ver y comparar

```sh
python3 -m http.server 4173 --directory dist
```

- `http://localhost:4173/`: selector de propuestas y vista móvil.
- `/version-1/`: propuesta anterior guardada, con blanco cálido y rojo vino.
- `/editorial/`: propuesta editorial en crema y burdeos, con tipografía serif y portada fotográfica.
- `/precision/`: propuesta técnica en blanco y azul, con portada panorámica.

La versión anterior también se conserva en la etiqueta local `version-1-guardada`; su código original y recursos se han exportado a un ZIP independiente. La copia en `dist/version-1/` solo cambia las rutas relativas para conservar el mismo aspecto y funcionamiento dentro de la carpeta.

## Nuevas funciones

Las dos nuevas propuestas comparten navegación móvil, explorador de seis servicios con navegación de teclado, orientador de consultas, lista interactiva para preparar la visita, galería ampliable, preguntas frecuentes y solicitud de cita por WhatsApp.

El orientador ayuda a preparar el contacto y no diagnostica averías. El formulario prepara un mensaje; el visitante decide enviarlo y el taller confirma disponibilidad. Sin backend, reservas automáticas, analítica ni almacenamiento persistente de datos personales.

## Recursos y datos

Datos del negocio e imágenes de servicios: https://argalesvipmotor.es/. No se añaden reseñas, puntuaciones o cifras ficticias. Validar con el negocio los datos y derechos antes de sustituir la web comercial. Las páginas legales enlazan a la web oficial existente.

La portada de las dos propuestas nuevas es una fotografía conceptual generada con la herramienta integrada ImageGen. Se identifica como conceptual en la página; no representa instalaciones ni vehículos del taller. El recurso se encuentra en `dist/assets/campaign.png`. Prompt completo en `ASSET-NOTES.md`.

Fuentes locales Manrope, Barlow Condensed y DM Serif Display bajo SIL Open Font License; licencias en `dist/assets/`.

## Archivos

- `dist/index.html`, `compare.css`, `compare.js`: selector de propuestas.
- `dist/version-1/`: versión anterior preservada.
- `dist/editorial/` y `dist/precision/`: nuevas landings.
- `dist/variants/shared.css`, `interactions.js`: componentes y estilos de las nuevas versiones.
- `dist/app.js`: menú y diálogo de solicitud, reutilizados por las versiones nuevas.
- `dist/assets/`: imágenes, tipografías e icono.
- `.openai/hosting.json`: configuración de publicación privada en Sites.
