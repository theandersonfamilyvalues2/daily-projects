export type WisdomCategory =
  | "History"
  | "Science"
  | "Visual Art"
  | "Philosophy"
  | "Business"
  | "Literature"
  | "Music"
  | "Religion"
  | "Economics"
  | "Film"
  | "Tech/AI"
  | "Leadership";

export interface WisdomEntry {
  order: number;
  category: WisdomCategory;
  title: string;
  lesson: string;
  status: "ready" | "placeholder";
  slug: string;
  quote?: string;
  summary?: string;
  bullets?: string[];
  connection?: string;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const raw: Array<[WisdomCategory, string, string]> = [
  ["History", "Harriet Tubman", "Courage & rescue"],
  ["Science", "Marie Curie", "Curiosity & discovery"],
  ["Visual Art", "Van Gogh", "Vision & persistence"],
  ["Philosophy", "Marcus Aurelius", "Discipline of the mind"],
  ["Business", "Starbucks", "Building a daily ritual"],
  ["History", "Frederick Douglass", "Voice & Freedom"],
  ["Science", "Nikola Tesla", "Imagination & invention"],
  ["Visual Art", "Frida Kahlo", "Pain into art"],
  ["Philosophy", "Epictetus", "What is up to you"],
  ["Business", "Disney", "Imagination as an empire"],
  ["History", "Sojourner Truth", "Speak your truth"],
  ["Science", "Katherine Johnson", "Precision & belief"],
  ["Film", "Hayao Miyazaki", "Worlds with heart"],
  ["Philosophy", "Alan Watts", "Play of the universe"],
  ["Business", "Nike", "Just begin"],
  ["Leadership", "Martin Luther King Jr.", "The dream as a plan"],
  ["Science", "Jane Goodall", "Patience & observation"],
  ["Visual Art", "Faith Ringgold", "Story quilts"],
  ["Philosophy", "Ram Dass", "Be here now"],
  ["Business", "Apple", "Design as devotion"],
  ["Leadership", "Eleanor Roosevelt", "Do the thing you fear"],
  ["Science", "Mae Jemison", "Reach beyond the sky"],
  ["Business", "Walt Disney", "Keep moving forward"],
  ["Philosophy", "Krishnamurti", "Freedom from the known"],
  ["Business", "Amazon", "Day one thinking"],
  ["Literature", "Maya Angelou", "Rise"],
  ["Music", "Stevie Wonder", "Inner vision"],
  ["Religion", "Buddha", "The middle way"],
  ["Economics", "Supply & Demand", "How value moves"],
  ["Film", "Ava DuVernay", "Direct your own story"],
  ["Literature", "Langston Hughes", "Dreams deferred"],
  ["Music", "Nina Simone", "Artist as witness"],
  ["Religion", "Jesus", "Love your neighbor"],
  ["Economics", "Inflation", "When money loses weight"],
  ["Film", "Ryan Coogler", "Honor where you come from"],
  ["Literature", "Octavia Butler", "Worlds worth imagining"],
  ["Music", "Prince", "Total creative control"],
  ["Philosophy", "Lao Tzu", "The way that flows"],
  ["Economics", "Saving", "Pay your future self"],
  ["Film", "Shonda Rhimes", "Year of yes"],
  ["Literature", "Shakespeare", "Words that built worlds"],
  ["Music", "Aretha Franklin", "Respect"],
  ["Philosophy", "Rumi", "The reed's song"],
  ["Economics", "Portfolio", "Many baskets"],
  ["Film", "Issa Rae", "Awkward is a superpower"],
  ["Literature", "J.K. Rowling", "Worlds from a notebook"],
  ["Music", "Beethoven", "Music past silence"],
  ["Philosophy", "Thich Nhat Hanh", "Walk in peace"],
  ["Economics", "Profit", "What's left after the work"],
  ["Film", "Greta Gerwig", "Heart in every frame"],
  ["Tech/AI", "Ada Lovelace", "First poet of code"],
  ["Tech/AI", "Grace Hopper", "Speak to the machine"],
  ["Tech/AI", "Fei-Fei Li", "Teaching machines to see"],
  ["Tech/AI", "Tim Berners-Lee", "Web for everyone"],
  ["Business", "Madam C.J. Walker", "Build it yourself"],
  ["Leadership", "Oprah Winfrey", "Every voice matters"],
  ["Leadership", "Serena Williams", "Champion the work"],
  ["Leadership", "Michelle Obama", "Go high"],
  ["History", "Queen Nzinga", "Defend your people"],
  ["Leadership", "Malala Yousafzai", "One voice, one book"],
];

export const wisdomLibrary: WisdomEntry[] = raw.map(([category, title, lesson], i) => {
  const slug = slugify(title);
  const base: WisdomEntry = {
    order: i + 1,
    category,
    title,
    lesson,
    status: "placeholder",
    slug,
  };
  if (slug === "harriet-tubman") {
    return {
      ...base,
      status: "ready",
      quote: "Every great dream begins with one brave step.",
      summary: "Harriet Tubman teaches that courage means moving forward even when the path is dangerous.",
      bullets: [
        "She escaped slavery and returned to guide others to freedom.",
        "She risked her life again and again for what was right.",
        "Her courage changed history and saved lives."
      ],
      connection: "Like Harriet, creators have to trust the path before anyone else can see it."
    };
  }
  if (slug === "frederick-douglass") {
    return {
      ...base,
      status: "ready",
      quote: "Once you learn to read, you will be forever free.",
      summary:
        "Born into slavery, Frederick Douglass taught himself to read in secret, escaped, wrote his own story, and became one of the most powerful voices for freedom in American history.",
      bullets: [
        "Knowledge was his first act of resistance.",
        "He used his own voice to tell the truth.",
        "Speaking and writing are part of building freedom.",
      ],
      connection:
        "Your hero needs a voice too. What does your hero say when it would be easier to stay quiet?",
    };
  }
  return base;
});

export const getWisdomBySlug = (slug: string) =>
  wisdomLibrary.find((w) => w.slug === slug);

export const wisdomCategories: WisdomCategory[] = [
  "History",
  "Science",
  "Visual Art",
  "Philosophy",
  "Business",
  "Literature",
  "Music",
  "Religion",
  "Economics",
  "Film",
  "Tech/AI",
  "Leadership",
];