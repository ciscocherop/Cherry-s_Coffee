import { pageMetadata } from "@/lib/seo";
import PageHeader from "@/components/shared/PageHeader";
import EnquiryForm from "@/components/shared/EnquiryForm";

export const metadata = pageMetadata(
  "Wholesale Coffee Supply",
  "Wholesale Sipi Arabica coffee for cafés, hotels, shops, offices and distributors in Uganda. Send an enquiry to Cherry's Coffee.",
  "/wholesale",
);

const audiences = [
  { title: "Cafés & restaurants", text: "Beans and ground coffee for espresso, filter and French press." },
  { title: "Hotels & lodges", text: "Serve guests a true taste of Uganda — ideal for tourism around Sipi and Mount Elgon." },
  { title: "Shops & supermarkets", text: "Retail-ready packs of instant coffee, ground coffee and cascara." },
  { title: "Offices", text: "Regular supply to keep your team going through the working day." },
  { title: "Distributors", text: "Partner with us to bring Sipi coffee to new regions and markets." },
];

export default function WholesalePage() {
  return (
    <>
      <PageHeader
        eyebrow="Wholesale"
        title="Sipi coffee for your business"
        intro="We supply cafés, hotels, shops, offices and distributors with Arabica coffee from Mount Elgon. Tell us what you need and we'll get back to you with a quote."
      />
      <section className="py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="font-serif text-2xl font-bold">Who we work with</h2>
            <ul className="mt-6 space-y-4">
              {audiences.map((a) => (
                <li key={a.title} className="rounded-2xl border border-latte bg-white p-5">
                  <h3 className="font-semibold text-cherry">{a.title}</h3>
                  <p className="mt-1 text-sm text-roast">{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold">Request a quote</h2>
            <p className="mt-2 text-roast">Fill in the form and we&apos;ll reply by email or phone.</p>
            <div className="mt-6">
              <EnquiryForm variant="wholesale" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
