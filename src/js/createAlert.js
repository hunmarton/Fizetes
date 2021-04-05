import $ from "jquery";

export const alert = (element, message) => {
  let el = `<small class="text-danger alert m-0 p-0 " role="alert">
  ${message}
</small>`;
  $(element).append(el);
  setTimeout(function () {
    $(".alert").remove();
  }, 4000);
};
