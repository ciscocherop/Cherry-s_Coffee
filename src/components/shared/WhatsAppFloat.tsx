import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${site.name}! I have a question about your coffee.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1f9d55] p-4 text-white shadow-lg shadow-black/20 transition hover:bg-[#178246]"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:group-hover:inline">Chat with us</span>
    </a>
  );
}
