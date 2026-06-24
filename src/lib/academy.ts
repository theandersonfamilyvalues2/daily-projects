export interface ProjectPhase {
  week: number;
  dayRange: string;
  name: string;
  output: string;
  deliverables: string[];
}

export const projectPhases: ProjectPhase[] = [
  { week: 1, dayRange: "Days 1–7", name: "Comic Universe: Hero", output: "Hero character sheet in Google Slides",
    deliverables: ["Hero name + one-line origin", "Visual character sheet", "Power list + one weakness", "Mission statement"] },
  { week: 2, dayRange: "Days 8–14", name: "Comic Universe: Villain", output: "Villain sheet + conflict map",
    deliverables: ["Villain backstory", "Why they oppose the hero", "Conflict map", "First confrontation idea"] },
  { week: 3, dayRange: "Days 15–21", name: "Comic Universe: World", output: "World bible — setting, rules, map, cast",
    deliverables: ["World map sketch", "Three key locations", "Rules of the world", "Supporting cast"] },
  { week: 4, dayRange: "Days 22–28", name: "Script: Act 1", output: "Scene list + dialogue draft",
    deliverables: ["Beat sheet", "Scene list", "Dialogue draft", "Opening page"] },
  { week: 5, dayRange: "Days 29–35", name: "Script: Act 2", output: "Conflict scenes + dialogue",
    deliverables: ["Midpoint scene", "Conflict beats", "Dialogue pass", "Turning point"] },
  { week: 6, dayRange: "Days 36–42", name: "Script: Act 3", output: "Climax, revision, table read",
    deliverables: ["Climax scene", "Full revision pass", "Family table read", "Final script"] },
  { week: 7, dayRange: "Days 43–49", name: "Comic: Thumbnails", output: "6-page storyboard",
    deliverables: ["Page thumbnails", "Panel breakdown", "Camera + framing", "Lettering plan"] },
  { week: 8, dayRange: "Days 50–56", name: "Comic: Draft Pages", output: "All 6 rough pages",
    deliverables: ["Linework", "Page layout pass", "Dialogue placement", "Self-critique"] },
  { week: 9, dayRange: "Days 57–63", name: "Comic: Final Pages", output: "Finished pages, cover, credits, export",
    deliverables: ["Color flats", "Lettering", "Cover", "Final PDF export"] },
  { week: 10, dayRange: "Days 64–70", name: "Brand + Google Site", output: "Logo, colors, fonts, live site",
    deliverables: ["Logo + title treatment", "Color palette", "Font system", "Live Google Site"] },
  { week: 11, dayRange: "Days 71–77", name: "Business: Store Concept", output: "Products, pricing, profit math",
    deliverables: ["Product list", "Pricing", "Profit math", "Store page mockup"] },
  { week: 12, dayRange: "Days 78–84", name: "Marketing Campaign", output: "YT/IG/FB assets, trailer, poster",
    deliverables: ["Trailer", "Poster", "Social posts", "Launch plan"] },
  { week: 13, dayRange: "Days 85–91", name: "Launch + Portfolio", output: "Final portfolio + family demo",
    deliverables: ["Portfolio page", "Process write-up", "Family demo night", "Credits"] },
];

export const currentWeek = 1;

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const todayName = WEEKDAYS[new Date().getDay()];

export const todayTask = {
  week: currentWeek,
  weekday: todayName,
  phase: "Comic Universe: Hero",
  task: "Build hero character sheet in Google Slides — name, age, talent, flaw, belief, appearance, color palette.",
  tags: [todayName, `Week ${currentWeek}`, "Spanish + Build"],
  proofs: [
    "Google Slides character sheet created",
    "All fields filled in",
    "Saved to Google Drive",
  ],
  demoNight: false,
};


export const schedule = [
  { time: "10:00 AM", block: "Morning Reset", note: "Make bed · wash face · brush teeth · get dressed · eat · drink water (25 min)" },
  { time: "10:25", block: "Break", note: "5 min stretch · water · reset", isBreak: true },
  { time: "10:30", block: "Workout + Exercise", note: "Walk · run · bike · jump rope · dance · strength (25 min)" },
  { time: "10:55", block: "Break", note: "5 min water · breathe", isBreak: true },
  { time: "11:00", block: "Meditation", note: "Quiet breathing — Headspace, Calm, or silent sitting. No phones. (25 min)" },
  { time: "11:25", block: "Break", note: "5 min stand · stretch", isBreak: true },
  { time: "11:30", block: "★ Wisdom First", note: "One person: Who / What they did / Lesson / Connection. 3 bullets BEFORE any screen. (25 min)", highlight: true },
  { time: "11:55", block: "Break", note: "5 min reset", isBreak: true },
  { time: "12:00 PM", block: "IXL Math", note: "Georgia State Standards · record skill name + score (25 min)" },
  { time: "12:25", block: "Break", note: "5 min water · snack", isBreak: true },
  { time: "12:30", block: "IXL Elective", note: "Mon: Spanish · Tue: Science · Wed: Lang Arts · Thu: Social Studies · Fri: Math Review (25 min)" },
  { time: "12:55", block: "Break", note: "5 min stretch", isBreak: true },
  { time: "1:00", block: "Tynker", note: "Select My Path → Continue · curriculum only · record lesson name (25 min)" },
  { time: "1:25", block: "Break", note: "5 min water · eyes off screen", isBreak: true },
  { time: "1:30", block: "Sparketh", note: "Select Tracks → Continue course · save or photograph output (25 min)" },
  { time: "1:55", block: "Break", note: "5 min walk", isBreak: true },
  { time: "2:00", block: "Project Work", note: "Today's assignment. Save visible proof. (25 min)" },
  { time: "2:25", block: "Break", note: "5 min reset", isBreak: true },
  { time: "2:30", block: "Project Work (cont.)", note: "Finish or polish today's deliverable. (25 min)" },
  { time: "2:55", block: "Break", note: "5 min stretch", isBreak: true },
  { time: "3:00", block: "House", note: "Afternoon walkthrough · tidy spaces · refill water (25 min)" },
  { time: "Sunday PM", block: "Demo Night", note: "Present week's work to the family · fill scorecard · parent initials required", highlight: true },
];

export const electiveRotation = [
  { day: "Monday", subject: "Spanish" },
  { day: "Tuesday", subject: "Science" },
  { day: "Wednesday", subject: "Language Arts" },
  { day: "Thursday", subject: "Social Studies" },
  { day: "Friday", subject: "Math Review" },
];

export interface LoginEntry {
  name: string;
  url: string;
  domain: string;
  accounts: { label: string; value: string }[];
  note: string;
}

export const logins: LoginEntry[] = [
  {
    name: "Tynker",
    url: "https://www.tynker.com/",
    domain: "www.tynker.com",
    accounts: [
      { label: "Zoe", value: "zote092" },
      { label: "Macie", value: "ajuwahAtl" },
      { label: "Password", value: "butterfly" },
      { label: "Parent", value: "tmanderson001@outlook.com" },
    ],
    note: "Select My Path → Continue. Curriculum only.",
  },
  {
    name: "Sparketh",
    url: "https://www.sparketh.com/tracks/",
    domain: "sparketh.com/tracks/",
    accounts: [
      { label: "Zoe", value: "zote092" },
      { label: "Macie", value: "ajuwahAtl" },
      { label: "Password", value: "butterfly" },
    ],
    note: "Select Tracks → Continue. Save every drawing.",
  },
  {
    name: "IXL",
    url: "https://www.ixl.com/",
    domain: "www.ixl.com",
    accounts: [
      { label: "Zoe", value: "tmanderson001" },
      { label: "Macie", value: "tmanderson001" },
      { label: "Password", value: "tmanderson001" },
    ],
    note: "Learning → Skill Plans → Georgia State Standards",
  },
];

export interface LinkEntry {
  title: string;
  url: string;
  source: string;
}

export const youtubeLinks: LinkEntry[] = [
  { title: "Reference video 1", url: "https://www.youtube.com/watch?v=9lFPMZrYLHQ", source: "YouTube" },
  { title: "Playlist · Lesson 12", url: "https://www.youtube.com/watch?v=Lq-a6kww0b4&list=PLvf_LH4Nzg107rrix5DK-fXCvZsT6dr8f&index=12", source: "YouTube" },
  { title: "Playlist · Lesson 14", url: "https://www.youtube.com/watch?v=KOvE5oAubpA&list=PLvf_LH4Nzg107rrix5DK-fXCvZsT6dr8f&index=14", source: "YouTube" },
  { title: "Playlist · Lesson 6", url: "https://www.youtube.com/watch?v=4_2AJW33rJo&list=PLGg0baHR_4LGxD6fa4-9msOSWgMcgdBLu&index=6", source: "YouTube" },
];

export interface ChecklistItem {
  time: string;
  text: string;
  featured?: boolean;
}

export const studentChecklist: ChecklistItem[] = [
  { time: "10:00", text: "Morning reset — bed, face, teeth, dress, eat, water (25 min)" },
  { time: "10:30", text: "Workout + Exercise — 25 min movement" },
  { time: "11:00", text: "Meditation — quiet breathing (25 min)" },
  { time: "11:30", text: "★ Wisdom First — pick today's person, write 3 bullets BEFORE screens.", featured: true },
  { time: "12:00", text: "IXL Math — Georgia Standards, record skill + score (25 min)" },
  { time: "12:30", text: "IXL Elective — record topic + one thing learned (25 min)" },
  { time: "1:00", text: "Tynker — Select My Path, continue curriculum (25 min)" },
  { time: "1:30", text: "Sparketh — Select Tracks, save drawing photo (25 min)" },
  { time: "2:00", text: "Project Work — today's deliverable, save proof (25 min)" },
  { time: "2:30", text: "Project Work (cont.) — finish or polish (25 min)" },
  { time: "3:00", text: "House walkthrough — tidy, refill water (25 min)" },
  { time: "Evening", text: "Night reset — kitchen, clean up, face, teeth, change, eat" },
];

export const students = [
  { name: "Zoe", accent: "#f5a623", avatar: "Z", week: currentWeek },
  { name: "Macie", accent: "#7cc4ff", avatar: "M", week: currentWeek },
];

