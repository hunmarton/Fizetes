import $ from "jquery";
import calculateNetto from "./nettoPrice";
import calculateTaxRate from "./calculateTaxRate";
const getInputValues = () => {
  if ($("#email").val() == "" || $(".date").val() === "" || ($("#adoszazalek").val() === "" && !$("#adoszazalek").prop("disabled")) || $("#bruttoar").val() === "") {
    return false;
  } else {
    const modalObj = {
      email: $("#email").val(),
      date: $(".date").val(),
      percent: $("#adoszazalek").val(),
      brutto: $("#bruttoar").val(),
      netto: calculateNetto($("#bruttoar").val(), $("#adoszazalek").val()),
      taxRate: calculateTaxRate($("#bruttoar").val(), calculateNetto($("#bruttoar").val(), $("#adoszazalek").val()))
    };

    return modalObj;
  }
};

export default getInputValues;
