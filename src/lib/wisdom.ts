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
  ["Science", "Marie Curie", "Discovery & persistence"],
  ["Visual Art", "Van Gogh", "Emotion & color"],
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
      quote: "I never ran my train off the track and I never lost a passenger.",
      summary:
        "Born Araminta Ross on Maryland's Eastern Shore, Harriet Tubman escaped slavery, returned again and again to guide others to freedom, served the Union during the Civil War, and proved that courage is action under pressure.",
      bullets: [
        "She escaped slavery in 1849, then kept going back for family and others.",
        "She made repeated Underground Railroad missions and helped about 70 people reach freedom.",
        "During the Civil War, she served as a nurse, scout, spy, and military leader.",
        "At the Combahee River Raid in 1863, she helped free more than 700 enslaved people."
      ],
      connection:
        "Great creators do not wait for perfect conditions. They study the map, protect the team, move with courage, and build a path others can follow."
    };
  }
  if (slug === "marie-curie") {
    return {
      ...base,
      status: "ready",
      quote: "Nothing in life is to be feared, it is only to be understood.",
      summary:
        "Marie Curie was a scientist who followed hard questions until they changed the world. She studied invisible energy, discovered polonium and radium, became the first woman to win a Nobel Prize, and remains the only person awarded Nobel Prizes in two different sciences.",
      bullets: [
        "She was born Maria Skłodowska in Warsaw, Poland, and moved to Paris to study science.",
        "She worked with Pierre Curie to study radioactivity and discover new elements.",
        "She won Nobel Prizes in Physics and Chemistry for work that opened new scientific fields.",
        "Her persistence helped create tools doctors still use to understand and treat illness."
      ],
      connection:
        "Today, use science to make your hero stronger. Give your hero one tool, power, or rule that has a clear reason behind it. Curiosity makes imagination feel real."
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
