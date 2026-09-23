# Lead Gate — Formulario de calificación + video + WhatsApp

Página estática de 2 pasos para filtrar leads antes de que lleguen al WhatsApp con IA:

1. **index.html** — formulario (nombre, correo, celular, empresa). Al enviar, guarda el lead en un Google Sheet (vía Apps Script Web App) y redirige a `video.html`.
2. **video.html** — muestra el video de Loom. Después de 60 segundos se revela el botón para hablar por WhatsApp con la IA.

## Conectar el Google Sheet

1. Crea un Google Sheet nuevo. En la fila 1 pon estos encabezados: `Fecha | Nombre | Correo | Celular | Empresa`.
2. Ve a **Extensiones → Apps Script**.
3. Borra el código de ejemplo y pega el contenido de `apps-script.gs` (incluido en este repo).
4. Click en **Implementar → Nueva implementación**.
   - Tipo: **Aplicación web**.
   - Ejecutar como: **Yo (tu correo)**.
   - Quién tiene acceso: **Cualquier usuario**.
5. Copia la URL que te da ("URL de la aplicación web") y pégala en `index.html`, reemplazando `__SHEET_ENDPOINT__` por esa URL.
6. Vuelve a hacer commit/push (o pídele a Claude que lo actualice) para que el deploy en Vercel quede con la URL correcta.

## Cambiar el video o el número de WhatsApp

- Video: en `video.html`, cambia el ID dentro de `https://www.loom.com/embed/<ID>`.
- WhatsApp: en `video.html`, cambia `WHATSAPP_NUMBER` y `WHATSAPP_MESSAGE`.
- Tiempo de espera: cambia `TOTAL_SECONDS` (actualmente 60).
