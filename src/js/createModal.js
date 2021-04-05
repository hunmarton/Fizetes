import $ from "jquery";

const createModal = obj => {
  if (obj !== false) {
    let modal = `<div class="modal d-inline" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Fizetés</h5>
        </div>
        <div class="modal-body">
          <p>Email: ${obj.email} </p>
          <p>Dátum: ${obj.date}</p>
          <p>Bruttó: ${obj.brutto}</p>
          <p>Nettó: ${obj.netto}</p>
          <p>Adó százalék: ${obj.percent === "" ? "0" : obj.percent}%</p>
          <p>Adó értéke: ${obj.taxRate}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id='ok'>Ok</button>
          <button type="button" class="btn btn-primary" id='megsem'>Mégsem</button>
        </div>
      </div>
    </div>
  </div>`;

    $("body").prepend(modal);
    $("#ok").on("click", () => {
      $(".modal").remove();
      $("#form").trigger("reset");
      $("#adoszazalek").prop("disabled", true);
    });
    $("#megsem").on("click", () => {
      $(".modal").remove();
    });
  }
};

export default createModal;
