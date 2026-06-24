// ─────────────────────────────────────────────────────────────
// ANDERSON CREATOR ACADEMY — MASTER DATA FILE
// To add a new day: copy the last entry, increment the day
// number, update wisdom + project, save. The site picks it up.
// ─────────────────────────────────────────────────────────────

const ACADEMY = {

  // ── SETTINGS ─────────────────────────────────────────────
  currentDay: 6,   // ← CHANGE THIS to advance the academy

  // ── PHASES ───────────────────────────────────────────────
  phases: [
    { weeks:"1",   days:"1–7",   name:"Comic Universe: Hero",    output:"Hero character sheet in Google Slides",
      deliverables:["One-sentence story idea saved","Hero name, age, talent, flaw written","3 hero silhouettes — one circled","Full character sheet in Google Slides"] },
    { weeks:"2",   days:"8–14",  name:"Comic Universe: Villain",  output:"Villain sheet + conflict map",
      deliverables:["Villain sheet (name, motive, belief, weakness)","Villain shape-language sketch","Conflict map: hero vs villain goals","One villain dialogue line"] },
    { weeks:"3",   days:"15–21", name:"Comic Universe: World",    output:"World bible — setting, rules, map, cast",
      deliverables:["World map with 3+ locations","World rules — allowed and forbidden","Color palette 3–5 colors","Sidekick or mentor sheet","World bible in Google Slides"] },
    { weeks:"4",   days:"22–28", name:"Script: Act 1",            output:"Scene list + dialogue draft",
      deliverables:["Act 1 scene list (5–7 scenes)","Opening hook written","Hero's internal goal identified","Act 1 dialogue draft complete"] },
    { weeks:"5",   days:"29–35", name:"Script: Act 2",            output:"Conflict scenes + dialogue",
      deliverables:["Act 2 scene list with midpoint marked","Cause-and-effect logic verified","Emotional moment written","Act 2 dialogue draft complete"] },
    { weeks:"6",   days:"36–42", name:"Script: Act 3",            output:"Climax, revision, table read",
      deliverables:["Act 3 scene list + climax written","Lesson shown not preached","Full script Acts 1–3 combined","Table read done — weak parts revised"] },
    { weeks:"7",   days:"43–49", name:"Comic: Thumbnails",        output:"6-page storyboard",
      deliverables:["6 thumbnail pages","Panel sizes decided","Emotion flow checked","Issue name + back-cover description"] },
    { weeks:"8",   days:"50–56", name:"Comic: Draft Pages",       output:"All 6 rough pages",
      deliverables:["All 6 draft pages complete","Balloons on every page","Layouts match thumbnails","Pages reviewed start to finish"] },
    { weeks:"9",   days:"57–63", name:"Comic: Final Pages",       output:"Finished pages, cover, credits, export",
      deliverables:["Cover art finished","All 6 pages inked and colored","Title, credits, about-creators page","Comic exported or photographed"] },
    { weeks:"10",  days:"64–70", name:"Brand + Google Site",      output:"Logo, colors, fonts, live site",
      deliverables:["Brand name + 1-sentence mission","Logo in Canva (2 variations)","Brand color guide 3–5 colors","Google Site: home, characters, gallery live"] },
    { weeks:"11",  days:"71–77", name:"Business: Store Concept",  output:"Products, pricing, profit math",
      deliverables:["3 products with pricing + profit math","Customer profile written","Mock store page built","Revenue/cost/profit in own words"] },
    { weeks:"12",  days:"78–84", name:"Marketing Campaign",       output:"YT/IG/FB assets, trailer, poster",
      deliverables:["YouTube concept + channel art","IG/FB content themes","5 captions written","60-sec trailer script","Poster + thumbnail","Content calendar"] },
    { weeks:"13",  days:"85–91", name:"Launch + Portfolio",       output:"Final portfolio + family demo",
      deliverables:["All learning slides + wisdom collected","All art + comic pages collected","Website/business/money assets","5-min presentation practiced","Final demo at Family Demo Night"] },
  ],

  // ── LOGINS ───────────────────────────────────────────────
  logins: [
    { name:"Tynker",   url:"https://www.tynker.com/",          zoe:"zote092",      macie:"ajuwahAtl",    password:"butterfly",      parent:"tmanderson001@outlook.com", note:"Select My Path → Continue. Curriculum only." },
    { name:"Sparketh", url:"https://sparketh.com/tracks/",     zoe:"zote092",      macie:"ajuwahAtl",    password:"butterfly",      parent:"",                          note:"Select Tracks → Continue. Save every drawing." },
    { name:"IXL",      url:"https://www.ixl.com/",             zoe:"tmanderson001",macie:"tmanderson001",password:"tmanderson001",  parent:"",                          note:"Learning → Skill Plans → Georgia State Standards" },
  ],

  // ── DAILY DATA ───────────────────────────────────────────
  // ADD NEW DAYS HERE. Copy the last block, increment day number.
  // currentDay (above) controls which one the site shows.
  // ─────────────────────────────────────────────────────────
  days: [

    {
      day: 1,
      week: 1,
      label: "History",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "History",
        person: "Harriet Tubman",
        lesson: "Courage & rescue",
        quote: "Every great dream begins with a dreamer.",
        body: "Harriet Tubman was born into slavery and escaped — then went back 13 times to free others. She never lost a single passenger on the Underground Railroad. She operated on pure courage and refused to let fear make her decisions.",
        bullets: [
          "She escaped slavery herself first — you can't lead others out of a place you haven't left.",
          "She went back when she didn't have to. Real courage is choosing hard when easy is available.",
          "She said she never ran her train off the tracks. Finish what you start — every time."
        ],
        connection: "Your hero needs this same quality — the courage to act when it would be easier not to. What is your hero's first brave choice? Write it on your hero sheet today."
      },
      project: "Write the one-sentence story idea and create hero name, age, talent, flaw.",
      proof: ["One-sentence story idea written", "Hero name decided", "Hero age, talent, and flaw written out"]
    },

    {
      day: 2,
      week: 1,
      label: "Science",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "Science",
        person: "Marie Curie",
        lesson: "Discovery & persistence",
        quote: "Nothing in life is to be feared, only to be understood.",
        body: "Marie Curie discovered two elements, won two Nobel Prizes in two different sciences, and did it in an era when women weren't taken seriously in any lab. She worked in conditions that literally killed her — and never stopped.",
        bullets: [
          "She kept working when she had every reason to quit — rejected, underfunded, and underestimated.",
          "She didn't discover things by accident. She was methodical, patient, and obsessive about proof.",
          "Her work changed the world. Your ideas, developed carefully over time, can too."
        ],
        connection: "Your hero's power or tool should have real logic behind it — not just magic. Use science today to give your hero's ability a rule: how does it work, what are its limits, what does it cost to use it?"
      },
      project: "Use science to define the hero's tool, power, or rule.",
      proof: ["Hero's power or tool defined", "One rule or limit for the power written", "Science logic explained in one sentence"]
    },

    {
      day: 3,
      week: 1,
      label: "Visual Arts",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "Visual Art",
        person: "Vincent van Gogh",
        lesson: "Emotion & color",
        quote: "I dream of painting and then I paint my dream.",
        body: "Van Gogh sold almost nothing in his lifetime. Today his paintings sell for hundreds of millions. He used color not to copy reality but to show how things felt. His swirling skies and blazing yellows were emotional language, not photographs.",
        bullets: [
          "Color communicates before words do — your hero's palette tells us who they are before they speak.",
          "Van Gogh painted the same subjects over and over until he got them right. Iteration is not failure.",
          "He trusted his own vision even when nobody else did. Your artistic choices are valid."
        ],
        connection: "Today you're sketching your hero's silhouette. Think about shape and color — sharp angles feel dangerous, soft curves feel safe. What does your hero's shape say about who they are?"
      },
      project: "Draw 3 hero silhouettes and pick one.",
      proof: ["3 silhouette sketches drawn", "One circled as the chosen design", "Color notes added"]
    },

    {
      day: 4,
      week: 1,
      label: "Philosophy",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "Philosophy",
        person: "Marcus Aurelius",
        lesson: "Control what you can",
        quote: "You have power over your mind, not outside events. Realize this, and you will find strength.",
        body: "Marcus Aurelius was the most powerful man in the Roman Empire. He could have done anything. Instead he wrote a private journal about how to be better — never published, just for himself. He focused entirely on what he could control and let go of everything else.",
        bullets: [
          "He separated what he could control from what he couldn't — and only spent energy on the first category.",
          "Power didn't make him arrogant. He used it as a tool for service, not status.",
          "His journal was never meant to be seen. He was doing the work for its own sake."
        ],
        connection: "Your hero needs a core belief — something they return to when things get hard. Marcus Aurelius had Stoicism. What does your hero believe about the world? Write their philosophy in one sentence today."
      },
      project: "Give the hero a belief or life lesson they live by.",
      proof: ["Hero's core belief written in one sentence", "How that belief drives their choices explained"]
    },

    {
      day: 5,
      week: 1,
      label: "Business",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "Business",
        person: "Starbucks",
        lesson: "Customer experience",
        quote: "We are not in the coffee business serving people. We are in the people business serving coffee.",
        body: "Starbucks doesn't sell the world's best coffee. They sell an experience — the smell, the music, the names on cups, the feeling of belonging to something. Howard Schultz built a global empire by understanding that people buy feelings, not products.",
        bullets: [
          "The product is secondary. The feeling the customer walks away with is the real product.",
          "Every detail is intentional — music, layout, cup size names. Nothing is random.",
          "Starbucks sells belonging. What feeling does your story sell to its readers?"
        ],
        connection: "Who is your audience — who would love this story? Not everyone. Be specific. Age, interests, what they already love. Defining your reader makes your story sharper."
      },
      project: "Define your audience: who would love this story and why?",
      proof: ["Audience age range written", "3 things the audience already loves listed", "Why this story is for them explained"]
    },

    {
      day: 6,
      week: 1,
      label: "Spanish + Build",
      phase: "Comic Universe: Hero",
      isDemo: false,
      wisdom: {
        category: "History",
        person: "Frederick Douglass",
        lesson: "Voice & Freedom",
        quote: "Once you learn to read, you will be forever free.",
        body: "Born into slavery, Frederick Douglass taught himself to read in secret — a crime at the time. He escaped, wrote his own autobiography exposing the truth of slavery, and became one of the most powerful speakers in American history. He used his voice as a weapon for freedom when silence was the safer choice.",
        bullets: [
          "He taught himself to read in secret — knowledge was his first act of resistance. No one gave it to him. He took it.",
          "He wrote his own story because no one else would tell it honestly. Your story belongs to you.",
          "Your voice grows stronger every time you use it. Writing, presenting, creating all count."
        ],
        connection: "Your hero needs a voice too. What does your hero say when it would be easier to stay quiet? That's where character is built. Write it into your hero sheet today."
      },
      project: "Build hero character sheet in Google Slides — name, age, talent, flaw, belief, appearance, color palette.",
      proof: ["Google Slides character sheet created", "All fields filled in", "Saved to Google Drive"]
    },

    {
      day: 7,
      week: 1,
      label: "Review + Demo",
      phase: "Comic Universe: Hero",
      isDemo: true,
      wisdom: {
        category: "Science",
        person: "Nikola Tesla",
        lesson: "Invention & electricity",
        quote: "The present is theirs; the future, for which I really worked, is mine.",
        body: "Nikola Tesla invented the AC electrical system that powers the entire modern world — and died nearly broke. Edison got the credit and the money. Tesla got the legacy. He cared more about the work than the recognition.",
        bullets: [
          "He worked on things that seemed impossible — and most of them worked.",
          "He cared more about the invention than who got credit for it.",
          "His work lives in every socket in your house. Build things that outlast you."
        ],
        connection: "Tonight is Demo Night. Present your hero sheet. Explain who they are, what they want, and why we should care. Practice speaking clearly about your own work — that is a skill Tesla never developed and it cost him everything."
      },
      project: "Present your hero sheet to the family. Explain who the hero is, what they want, and what makes them interesting.",
      proof: ["Hero sheet presented", "Feedback received and noted", "One thing to improve identified"]
    },

    // ── ADD NEW DAYS BELOW THIS LINE ─────────────────────
    // Copy this block and increment the day number:
    //
    // {
    //   day: 8,
    //   week: 2,
    //   label: "History",
    //   phase: "Comic Universe: Villain",
    //   isDemo: false,
    //   wisdom: {
    //     category: "Visual Art",
    //     person: "Frida Kahlo",
    //     lesson: "Identity & self-expression",
    //     quote: "I never painted dreams. I painted my own reality.",
    //     body: "...",
    //     bullets: ["...","...","..."],
    //     connection: "..."
    //   },
    //   project: "Create villain/obstacle and what they want.",
    //   proof: ["...","..."]
    // },

  ]
};
