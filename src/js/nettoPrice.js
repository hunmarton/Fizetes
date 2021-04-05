import $ from "jquery";

const calculateNetto = (brutto, percent) => {
  let netto = (+brutto / (+percent + 100)) * 100;

  return netto.toFixed(2);
};
export default calculateNetto;
