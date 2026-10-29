import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import { whatsappLink } from "@/lib/whatsapp";
import PageHeader from "@/components/shared/PageHeader";
import EnquiryForm from "@/components/shared/EnquiryForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/shared/Icons";

export const metadata = pageMetadata(
  "Contact Us",
  "Contact Cherry's Coffee in Sipi, Uganda by WhatsApp, phone or email. Questions about orders, delivery or visiting Sipi are welcome.",
  "/contact",
);

export default function ContactPage() {
  const channels = [
    { icon: WhatsAppIcon, title: "WhatsApp", value: "Chat with us", href: whatsappLink(`Hello ${site.name}!`), external: true },
    { icon: PhoneIcon, title: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneHref}` },
    { icon: MailIcon, title: "Email", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <PageHeader eyebrow="Contact" title="We'd love to hear from you" intro={site.responseTime} />
      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {channels.map(({ icon: Icon, title, value, href, external }) => (
              <a
                key={title}
                href={href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex items-center gap-4 rounded-2xl border border-latte bg-white p-5 transition hover:border-cherry"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cherry/10 text-cherry">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{title}</span>
                  <span className="block break-all text-roast">{value}</span>
                </span>
              </a>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-latte bg-white p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cherry/10 text-cherry">
                <PinIcon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-sm font-semibold">Location</span>
                <span className="block text-roast">
                  {site.location.town}, {site.location.district}, {site.location.region}
                </span>
              </span>
            </div>
            <div className="rounded-2xl bg-latte/60 p-6">
              <h2 className="font-serif text-xl font-bold">Delivery</h2>
              <p className="mt-2 text-sm leading-relaxed text-roast">{site.delivery}</p>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold">Send us a message</h2>
            <div className="mt-6">
              <EnquiryForm variant="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
