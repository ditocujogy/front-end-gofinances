export const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(new Date(date));

export const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );
