const CURRENCY_FORMAT = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

const formatCurrency = (price) => {
  return CURRENCY_FORMAT.format(price);
};

export default formatCurrency;
