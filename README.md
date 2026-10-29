# Cherry's Coffee — Website

Static-first Next.js website for Cherry's Coffee (Sipi, Mount Elgon, Uganda), built from
`Cherrys_Coffee_Website_Planning_Document.docx`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Before launch — fill in the placeholders

| What | Where |
| --- | --- |
| WhatsApp number, phone, email, social links, domain | `src/config/site.ts` |
| Web3Forms access key (free at web3forms.com) | `src/config/site.ts` → `web3formsKey` |
| Product sizes and prices (0 = "Price on request") | `src/content/products.ts` |
| Product photos | add to `public/images/products/` and set `image: "/images/products/xyz.webp"` on the product |
| Founder story and real details | `src/app/our-story/page.tsx` |
| Logo / favicon | replace `CherryMark` in `src/components/shared/Icons.tsx` and `src/app/favicon.ico` |

### Claims to verify
- **"Organic"**: only keep this word if the product is certified organic.
- **Nutrition facts**: calories were blank on the label, and the label lists both 3 g and 4 g as the serving size. Confirm before printing or publishing.
- **Coffee experience / tours**: only keep this section if you offer these visits.

## Editing content
- Products: `src/content/products.ts`
- Journal articles: `src/content/articles.ts`

Edit the file → `npm run build` to check → commit and push → the host redeploys.

## Deploying
Push to GitHub and connect the repository to Vercel (or Cloudflare Pages). Vercel's free Hobby plan is
for non-commercial use, so check the plan terms before going live as a business.
