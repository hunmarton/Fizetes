import $ from "jquery";
require("webpack-jquery-ui/datepicker");
require("webpack-jquery-ui/css");
import today from "./getTodaysDate.js";
import { alert } from "./createAlert.js";
$(function () {
  $("#datepicker").datepicker({
    onSelect: function () {
      $(this).trigger("change");
    }
  });
  $(".date").on("change", function () {
    let selectedDateMs = new Date($("#datepicker").val()).getTime();
    let todayMs = new Date(today()).getTime();
    if (selectedDateMs > todayMs) {
      let error = "A megadott dátum nem valid";
      alert("#dateDiv", error);
      $(".date").blur();
      $(".date").val("");
    }
  });
});
