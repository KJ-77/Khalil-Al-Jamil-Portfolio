// Client testimonials — the single source for the Kind Words section (full review)
// and the project cards (one-line teaser that links down to it)

export interface Testimonial {
  id: string; // DOM id on the rendered review, so project cards can deep-link to it
  project: string; // must match the project's `title` in projects.tsx for its card to get a teaser
  paragraphs: string[]; // the review verbatim, one entry per paragraph — never reword a client's words
  highlights: string[]; // exact phrases lifted from `paragraphs`, brightened for skim readers
  teaser: string; // exact sentence lifted from `paragraphs`, shown on the project card
  name: string;
  role: string;
  photo: string;
  website?: { label: string; href: string };
  email?: string; // published so prospective clients can ask for a reference
}

export const testimonials: Testimonial[] = [
  {
    id: "review-lama-ramadan",
    project: "Brand&",
    paragraphs: [
      "Working with Khalil on our website was a great experience. He was professional, responsive, patient, and very easy to communicate with throughout the project. He understood our vision, was attentive to the details, and was always willing to make adjustments and find solutions when needed.",
      "What I appreciated most was his commitment to getting things right and making sure the final result reflected what we had in mind. He was reliable, collaborative, and handled the process smoothly from start to finish.",
      "I would definitely recommend Khalil to anyone looking for a skilled and dependable web developer. Great work and a pleasure to work with!",
    ],
    highlights: [
      "professional, responsive, patient, and very easy to communicate with",
      "commitment to getting things right",
      "I would definitely recommend Khalil to anyone looking for a skilled and dependable web developer.",
    ],
    teaser: "Great work and a pleasure to work with!",
    name: "Lama Ramadan",
    role: "Founder, Brand&",
    photo: "/assets/lama-ramadan.webp",
    website: { label: "brandand.group", href: "https://brandand.group" },
    email: "lama@brandand.group",
  },
];

// Dev-only guard: highlights and teasers must be verbatim excerpts of the review.
// A typo would otherwise fail silently (the phrase just renders un-highlighted),
// or worse, put words in a client's mouth. Stripped from production builds.
if (import.meta.env.DEV) {
  for (const t of testimonials) {
    for (const phrase of [...t.highlights, t.teaser]) {
      if (!t.paragraphs.some((p) => p.includes(phrase))) {
        console.warn(`[testimonials] "${phrase}" is not a verbatim excerpt of ${t.id}`);
      }
    }
  }
}
