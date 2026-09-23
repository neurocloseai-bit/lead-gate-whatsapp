/**
 * Apps Script Web App que recibe los leads del formulario y los agrega
 * como fila nueva en la hoja activa.
 *
 * Instalación: Extensiones -> Apps Script -> pegar este archivo ->
 * Implementar -> Nueva implementación -> Aplicación web
 * (Ejecutar como: yo / Acceso: cualquier usuario).
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.nombre || "",
    data.correo || "",
    data.celular || "",
    data.empresa || "",
    data.origen || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
