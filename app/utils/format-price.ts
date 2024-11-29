export function formatPrice(valueInCents: number): string {
  const formattedValue = valueInCents / 100;
  return formattedValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
