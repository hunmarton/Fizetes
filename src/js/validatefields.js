import $ from "jquery";
import { alert } from "./createAlert.js";

export const validate = () => {
  let email = $("#email").val();
  let date = $(".date").val();
  let percent = $("#adoszazalek").val();
  let brutto = $("#bruttoar").val();

  if (email.length < 1) {
    alert("#emailDiv", "Kérem írja be az email címét");
  } else {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const okEmail = regEx.test(email);
    if (!okEmail) {
      alert("#emailDiv", "Helytelen email cím.");
      $("#email").val("");
    }
  }
  if (date.length < 1) {
    alert("#dateDiv", "Kérem válasszon dátumot");
  } else {
    const regex = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
    const okDate = regex.test(date);
    if (!okDate) {
      alert("#dateDiv", "Kérem válasszon dátumot");
      $(".date").val("");
    }
  }
  if (percent.length < 1 && !$("#adoszazalek").prop("disabled")) {
    alert("#adoDiv", "Kérem adja meg az adó százalékot");
  } else {
    const regex = /^(?:100(?:\.00?)?|\d?\d(?:\.\d\d?)?)$/;
    const okPercent = regex.test(percent);
    if (!okPercent && !$("#adoszazalek").prop("disabled")) {
      alert("#adoDiv", "Kérem adja meg az adó százalékot(0.01-100.00)");
      $("#adoszazalek").val("");
    }
  }
  if (brutto.length < 1) {
    alert("#bruttoDiv", "Kérem adja meg a bruttó árat");
  } else {
    const regex = /^[0-9]+\.[0-9]{2}$/;
    const okBrutto = regex.test(brutto);
    if (!okBrutto) {
      alert("#bruttoDiv", "Kérem adja meg a bruttó árat (pl. 15.15)");
      $("#bruttoar").val("");
    }
  }
};
