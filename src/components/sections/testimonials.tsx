import FadeIn from "@/components/sections/fade-in";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { ExternalLink, Mail, Quote } from "lucide-react";

// Escapes regex metacharacters so a highlight phrase is matched literally
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Splits a paragraph into plain and highlighted runs. split() with a capture group keeps
// the matched phrases in the result array, so they get wrapped without touching the wording.
const withHighlights = (text: string, phrases: string[]) => {
  if (phrases.length === 0) return text;
  const pattern = new RegExp(`(${phrases.map(escapeRegExp).join("|")})`);
  return text.split(pattern).map((part, i) =>
    phrases.includes(part) ? (
      <span key={i} className="text-foreground">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

// One review: quote mark, verbatim text, then who said it and how to reach them
const Review = ({ review }: { review: Testimonial }) => (
  <figure id={review.id} className="max-w-3xl">
    {/* Lucide's Quote is a closing mark (”) — flipped so the review opens on “ */}
    <Quote aria-hidden="true" className="h-10 w-10 text-primary mb-6 rotate-180" />

    <blockquote className="space-y-5 text-lg md:text-xl leading-relaxed text-muted-foreground">
      {review.paragraphs.map((p) => (
        <p key={p}>{withHighlights(p, review.highlights)}</p>
      ))}
    </blockquote>

    {/* Attribution — stacks on mobile, person left / links right from sm up */}
    <figcaption className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <div className="flex items-center gap-4">
        {/* Empty alt: the name sits right beside the photo, so announcing it twice is noise */}
        <img
          src={review.photo}
          alt=""
          width={56}
          height={56}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-full border border-border object-cover"
        />
        <div>
          <p className="font-semibold text-foreground">{review.name}</p>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        {review.website && (
          <a
            href={review.website.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            {review.website.label}
          </a>
        )}
        {/* Pre-filled subject tells the client straight away why a stranger is emailing them */}
        {review.email && (
          <a
            href={`mailto:${review.email}?subject=${encodeURIComponent("Reference for Khalil Al Jamil")}`}
            title={`Email ${review.name.split(" ")[0]} for a reference`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4 shrink-0" />
            {review.email}
          </a>
        )}
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => (
  <section id="testimonials" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Kind Words</h2>
      </FadeIn>

      <div className="space-y-20">
        {testimonials.map((review, i) => (
          <FadeIn key={review.id} delay={0.1 + 0.1 * i}>
            <Review review={review} />
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
