function formatCpf(value) {
  return !value ? '' : 
    value.replace(/([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, '$1.$2.$3-$4');
};

function formatPhone(value) {
  return !value ? '' : 
    value
      .toString()
      .replace(/([\d]{2})([\d]{4})([\d]{4})/, '($1) $2-$3');
};

function formatMoney(value, country, currencyCode = 'usd') {
  if (!value) {
    return
  }

  const parsedValue = parseFloat(value);

  return parsedValue.toLocaleString(country, { style: 'currency', currency: currencyCode });
}

export {
  formatCpf,
  formatPhone,
  formatMoney,
};
