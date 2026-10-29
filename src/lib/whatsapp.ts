import { site } from "@/config/site";

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function productOrderMessage(productName: string, size: string, quantity: number) {
  return [
    `Hello ${site.name}! I would like to order:`,
    ``,
    `• Product: ${productName}`,
    `• Size: ${size}`,
    `• Quantity: ${quantity}`,
    ``,
    `Please confirm availability, price and delivery. Thank you!`,
  ].join("\n");
}
