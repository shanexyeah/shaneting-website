import Carousel from './Carousel';

const TESTIMONIALS = [
  {
    quote: 'His presentation was authentic, thoughtful, and thoroughly engaging. What resonated most strongly with our boys was his reflection on the value of courage, not simply as bravery in big moments, but as the daily choice to stand for what is right and to persevere through challenge. We look forward to welcoming Shane back to share his further insights in the coming years.',
    name: 'Margie Raymond',
    role: 'Head of Junior Academy, Knox Grammar School',
  },
  {
    quote: 'Shane connected exceptionally well with the girls, using humour, personal stories and practical advice to communicate important messages in a way that felt genuine and accessible.\n\nWe would happily recommend Shane to other schools looking for a presenter who can genuinely connect with young people and leave a lasting impression.',
    name: 'School Representative',
  },
  {
    quote: 'I wanted something structured to tell me how to tell stories and that’s exactly what I got. I would recommend Shane to anyone who wants storytelling or public speaking. You can use it at basically every aspect of your life.',
    name: 'Adam',
    role: 'Storytelling Workshop Participant',
  },
  {
    quote: 'The most valuable thing I learned was the framework for how to structure storytelling. When you want to present a story, you need structure, and that’s exactly what we got.',
    name: 'Farris',
    role: 'Storytelling Workshop Participant',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials">
      <h2 className="display-2 center">What audiences<br />are saying</h2>
      <Carousel label="testimonial" arrowsClass="center" trackClass="testimonial-track">
        {TESTIMONIALS.map((t) => (
          <figure className="testimonial-card" key={t.name}>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <div className="testimonial-name">{t.name}</div>
              {t.role && <div className="testimonial-role">{t.role}</div>}
            </figcaption>
          </figure>
        ))}
      </Carousel>
    </section>
  );
}
