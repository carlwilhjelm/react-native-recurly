export const formatCurrency = (value: number, currency: string = 'USD') => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    console.error('Error formatting currency:', error);
    // Fallback: simple formatting
    return `${currency} ${value.toFixed(2)}`;
  }
};
