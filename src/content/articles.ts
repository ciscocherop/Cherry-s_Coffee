export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  // Each entry is a section: optional heading followed by paragraphs.
  sections: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "how-to-brew-great-coffee-at-home",
    title: "How to brew great coffee at home",
    excerpt:
      "No fancy machine needed. Four simple methods for a delicious cup using what you already have in your kitchen.",
    date: "2026-10-28",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Great coffee starts with good beans, clean water and a little patience. Whether you have a French press or just a saucepan, here is how to get the most from your Cherry's Coffee.",
        ],
      },
      {
        heading: "1. Instant coffee, done right",
        paragraphs: [
          "Add 2 teaspoons of instant coffee to your cup, pour in a little hot (not boiling) water and stir into a paste first. Then top up with 6–8 oz of hot water. This small step gives a smoother, richer cup.",
        ],
      },
      {
        heading: "2. French press",
        paragraphs: [
          "Use about 1 tablespoon of ground coffee per 120 ml of water. Pour water just off the boil, stir, wait 4 minutes and press slowly.",
        ],
      },
      {
        heading: "3. The saucepan method",
        paragraphs: [
          "Bring water to the boil, remove from the heat for 30 seconds, then stir in your ground coffee. Cover, rest for 4 minutes, and pour slowly through a fine strainer or cloth.",
        ],
      },
      {
        heading: "4. Moka pot",
        paragraphs: [
          "Fill the base with water up to the valve, add finely ground coffee to the basket without pressing it down, and heat on medium. Remove from the heat as soon as you hear it gurgle.",
        ],
      },
      {
        heading: "Tips for every method",
        paragraphs: [
          "Keep your coffee in an airtight container, use fresh water, and measure your coffee — consistency is the secret to a great cup every morning.",
        ],
      },
    ],
  },
  {
    slug: "understanding-arabica-coffee",
    title: "Understanding Arabica coffee",
    excerpt:
      "What makes Arabica different from Robusta, and why high-altitude Arabica from Mount Elgon is so special.",
    date: "2026-10-28",
    readMinutes: 3,
    sections: [
      {
        paragraphs: [
          "Uganda grows two main types of coffee: Robusta, which thrives in the warmer lowlands, and Arabica, which prefers the cooler highlands. Cherry's Coffee works with Arabica from the slopes of Mount Elgon.",
        ],
      },
      {
        heading: "Arabica vs Robusta",
        paragraphs: [
          "Arabica is generally known for its sweeter, more complex flavour and brighter acidity, while Robusta tends to be stronger, more bitter and higher in caffeine.",
        ],
      },
      {
        heading: "Why altitude matters",
        paragraphs: [
          "At higher altitude, cooler temperatures slow down how fast coffee cherries ripen. The beans have more time to develop flavour, which is one reason highland Arabica is so highly valued.",
        ],
      },
    ],
  },
  {
    slug: "coffee-from-sipi-cherry-to-cup",
    title: "Coffee from Sipi: from cherry to cup",
    excerpt:
      "Follow the journey of a coffee cherry from the hills around Sipi Falls to the cup in your hand.",
    date: "2026-10-28",
    readMinutes: 4,
    sections: [
      {
        paragraphs: [
          "Sipi sits on the northern slopes of Mount Elgon in Kapchorwa District, famous for its waterfalls, cool climate and coffee gardens. Here is how that coffee reaches you.",
        ],
      },
      {
        heading: "Picking",
        paragraphs: ["Ripe red coffee cherries are hand-picked from the trees."],
      },
      {
        heading: "Wet and dry processing",
        paragraphs: [
          "In wet processing, the outer skin and pulp are removed and the beans are washed. In dry processing, whole cherries are dried in the sun. The dried husks can become cascara.",
        ],
      },
      {
        heading: "Hulling",
        paragraphs: ["The dried parchment layer is removed, leaving the green coffee bean ready for roasting."],
      },
      {
        heading: "Roasting",
        paragraphs: [
          "Roasting transforms the green bean into the brown, aromatic coffee we know. Darker roasts bring out chocolatey, toasty notes; lighter roasts keep more fruit and acidity.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
