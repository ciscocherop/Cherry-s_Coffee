// The Cherry's Coffee story, told in chapters (shown on /our-story).
// Each milestone's `marker` is shown like "— March 2026 —"; it can be a date or a
// short label. Founding date and founder names come from src/config/site.ts.
import { site } from "@/config/site";

const founded = `${site.founded.month} ${site.founded.year}`;

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
    span: `${founded} — a student with a big idea`,
    milestones: [
      {
        marker: founded,
        label: "Foundation",
        title: `Started by ${site.founder.known}`,
        text: `Cherry's Coffee was started in ${founded} by ${site.founder.official} — known to friends as ${site.founder.known} — while still a student, with one goal: to carry the coffee of Sipi to more cups.`,
        image: "/images/branding1.jpeg",
      },
      {
        marker: "The first sale",
        label: "Cup number one",
        title: "Sold to a classmate",
        // TODO: add Julius's surname only with his permission.
        text: "The very first sale went to Julius, a fellow student. From that one bag, Cherry's Coffee was on its way.",
        quote: "Every big story starts with one cup.",
      },
      {
        marker: "Word spreads",
        label: "On campus",
        title: "Lecturers, then more students",
        text: "From one classmate, the coffee found its way to lecturers and then to other students around campus.",
        image: "/images/branding.jpeg",
      },
    ],
  },
  {
    numeral: "IV",
    title: "Growing up",
    span: `${site.founded.year} — today`,
    milestones: [
      {
        marker: "Beyond campus",
        label: "Coffee shops",
        title: "Into local coffee shops",
        text: "Next came coffee shops — the first places outside campus to serve Cherry's to their own customers.",
        image: "/videos/pouring-coffee-into-cup-poster.jpg",
      },
      {
        marker: "Today",
        label: "Cafés & hotels",
        title: "Exploring cafés and hotels",
        text: "Today we're bringing Sipi Arabica to cafés and hotels, with wholesale supply and orders straight on WhatsApp — delivered within Kampala and across Uganda.",
        image: "/images/story/mountain.jpg",
      },
      {
        marker: "Next",
        label: "Come and see",
        title: "This story is only getting started",
        text: "Coffee experiences in Sipi, more partners and many more cups to come.",
        quote: "From one cup for a classmate to cafés across Uganda. Keep sipping!!!",
      },
    ],
  },
];
