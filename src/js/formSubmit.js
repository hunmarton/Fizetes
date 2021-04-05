import $ from "jquery";
import { validate } from "./validatefields.js";
import createModal from "./createModal.js";
import getInputValues from "./getInputValues";

$("#form").submit(e => {
  e.preventDefault();
  validate();

  let obj = getInputValues();
  createModal(obj);

  return false;
});
