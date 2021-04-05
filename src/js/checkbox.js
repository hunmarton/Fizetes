const $ = require("jquery");

$("#adomentes").on("click", () => {
  if ($("#adomentes").prop("checked")) {
    $("#adoszazalek").prop("disabled", true);
  } else {
    $("#adoszazalek").prop("disabled", false);
  }
});
