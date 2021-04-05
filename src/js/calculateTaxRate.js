const calculateTaxRate = (brutto, netto) => {
  let taxRate = brutto - netto;
  return taxRate.toFixed(2);
};

export default calculateTaxRate;
