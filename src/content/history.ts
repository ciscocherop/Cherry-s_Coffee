// The Cherry's Coffee story, told in chapters (shown on /our-story).
// TODO: add real years and names where you have them — e.g. the year Cherry's
// Coffee was founded, the first sale, the first café customer. Each milestone's
// `marker` is shown like "— 2025 —"; it can be a year or a short label.

export type Milestone = {
  marker: string;
  label: string;
  title: string;
  text: string;
  image?: string;
  quote?: string;
};

export type Chapter = {
  numeral: string;
  title: string;
  span: string;
  milestones: Milestone[];
};

export const chapters: Chapter[] = [
  {
    numeral: "I",
    title: "Roots on the mountain",
    span: "Generations ago",
    milestones: [
      {
        marker: "Long before us",
        label: "The land",
        title: "Volcanic soil, cool air, generous rain",
        text: "Sipi Town sits high on the northern slopes of Mount Elgon in Kapchorwa District. The climate and rich volcanic soil make it one of Uganda's finest homes for Arabica coffee.",
        image: "/images/story/mountain.jpg",
      },
      {
        marker: "For generations",
        label: "The families",
        title: "Coffee grown by hand",
        text: "Families around Sipi have tended coffee for generations — picking the ripe cherries by hand and processing them close to home.",
        image: "/images/story/garden.jpg",
        quote: "Great coffee begins with ripe, carefully picked cherries.",
      },
    ],
  },
  {
    numeral: "II",
    title: "The cherry",
    span: "Where the name comes from",
    milestones: [
      {
        marker: "The fruit",
        label: "Why “Cherry”?",
        title: "Every bean starts inside a red fruit",
        text: "A coffee bean begins life inside a bright red fruit called a coffee cherry. Our name is a reminder of where good coffee really starts.",
        image: "/images/story/cherries.jpg",
      },
      {
        marker: "Nothing wasted",
        label: "Cascara",
        title: "Even the husks have a use",
        text: "The dried cherry husks left after processing are saved and brewed into cascara — a light, fruity, naturally sweet drink.",
        image: "/images/coffee_cascara.jpg",
      },
    ],
  },
  {
    numeral: "III",
    title: "Cherry's Coffee is born",
    span: "From Sipi to your cup",
    milestones: [
      {
        marker: "The beginning",
        label: "Foundation",
        title: "Carrying Sipi coffee further",
        text: "Cherry's Coffee was started to carry the coffee of Sipi — and the people behind it — to homes, offices and cafés across Uganda and beyond.",
        image: "/images/branding1.jpeg",
      },
      {
        marker: "The range",
        label: "Sipi's finest",
        title: "Four coffees, four sizes",
        text: "Instant dark roast, ground powder, whole roasted beans and cascara — packed fresh in 50 g, 150 g, 320 g and 1 kg packs.",
        image: "/images/branding.jpeg",
      },
    ],
  },
  {
    numeral: "IV",
    title: "Today, and tomorrow",
    span: "Keep sipping!!!",
    milestones: [
      {
        marker: "Today",
        label: "Your cup",
        title: "Ordered with a message",
        text: "Order on WhatsApp and talk to us directly. We deliver within Kampala and across Uganda.",
        image: "/videos/pouring-coffee-into-cup-poster.jpg",
      },
      {
        marker: "Next",
        label: "Come and see",
        title: "Visit the origin",
        text: "Coffee experiences in Sipi, supply for cafés and hotels, and many more cups to come. This story is only getting started.",
        quote: "Take a moment, pour a cup, and keep sipping!!!",
      },
    ],
  },
];
