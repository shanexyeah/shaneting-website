import Carousel from './Carousel';

const TESTIMONIALS = [
  {
    quote: 'His presentation was authentic, thoughtful and thoroughly engaging. What resonated most strongly with our boys was his reflection on the value of courage, not simply as bravery in big moments, but as the daily choice to stand for what is right and persevere through challenge.\n\nWe look forward to welcoming Shane back to share his insights in the coming years.',
    name: 'Margie Raymond',
    role: 'Head of Junior Academy, Knox Grammar School',
  },
  {
    quote: 'Shane connected exceptionally well with the girls, using humour, personal stories and practical advice to communicate important messages in a way that felt genuine and accessible.\n\nWe would happily recommend Shane to other schools looking for a presenter who can genuinely connect with young people and leave a lasting impression.',
    name: 'TARA Anglican School',
    role: 'Year 9 Program',
  },
  {
    quote: 'Before working with Shane I was very introverted, especially in front of the camera and at networking sessions. Now I’m more confident talking with strangers, on camera for my social media, and speaking on stage.\n\nI used to use a teleprompter a lot, but after working with Shane I had the confidence to throw away the teleprompter and just talk directly.',
    name: 'Tommy',
    role: '1:1 Coaching Client',
  },
  {
    quote: 'This is for people who know they could be living bigger. They see opportunities but aren’t taking them, because they’re being held back by fear or judgment.\n\nMy takeaway is that fear is natural and it won’t go away. The only thing I can change is my attitude to the fear, not the amount of fear.',
    name: 'Amelia',
    role: 'Notion Workshop Participant',
  },
  {
    quote: 'The biggest takeaway is that great storytelling isn’t about being impressive. It’s about making people feel and see themselves in it. That completely changed how I think about connecting with people.',
    name: 'Amanda',
    role: 'Storytelling Workshop Participant',
  },
  {
    quote: 'I learned that I actually already have a lot of the skills. Sometimes it’s just a matter of pushing yourself out of your comfort zone, being willing to look stupid, and being willing to take up space in a conversation to actually tell your story.',
    name: 'Nick',
    role: 'Storytelling Workshop Participant',
  },
  {
    quote: 'It was really good, very interesting. My biggest takeaway was probably not to have a plan B.',
    name: 'Na’ama',
    role: 'Notion Workshop Participant',
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
