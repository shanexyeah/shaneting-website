'use client';
import { useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.12 }
    );

    const cards = ref.current?.querySelectorAll('.testimonial');
    cards?.forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.12}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" ref={ref}>
      <div className="container">
        <p className="eyebrow">What audiences say</p>
        <h2 className="section-title">Real reactions.</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>
              &ldquo;His presentation was authentic, thoughtful, and thoroughly
              engaging. What resonated most strongly with our boys was his
              reflection on the value of courage &mdash; not simply as bravery in
              big moments, but as the daily choice to stand for what is right
              and to persevere through challenge. We look forward to welcoming
              Shane back to share his further insights in the coming years.&rdquo;
            </p>
            <div className="testimonial-name">Margie Raymond</div>
            <div className="testimonial-role">Head of Junior Academy, Knox Grammar School</div>
          </div>
          <div className="testimonial">
            <p>
              &ldquo;I wanted something structured to tell me how to tell stories
              &mdash; and that&apos;s exactly what I got. I would recommend Shane to
              anyone who wants storytelling or public speaking. You can use
              it at basically every aspect of your life.&rdquo;
            </p>
            <div className="testimonial-name">Adam</div>
            <div className="testimonial-role">Storytelling Workshop Participant</div>
          </div>
          <div className="testimonial">
            <p>
              &ldquo;I learned that sometimes it&apos;s just a matter of pushing
              yourself out of your comfort zone &mdash; being willing to look
              stupid, and being willing to take up space.&rdquo;
            </p>
            <div className="testimonial-name">Nick</div>
            <div className="testimonial-role">Storytelling Workshop Participant</div>
          </div>
          <div className="testimonial">
            <p>
              &ldquo;The most valuable thing I learned was the framework for how
              to structure storytelling. When you want to present a story,
              you need structure &mdash; and that&apos;s exactly what we got.&rdquo;
            </p>
            <div className="testimonial-name">Farris</div>
            <div className="testimonial-role">Storytelling Workshop Participant</div>
          </div>
          <div className="testimonial testimonial-wide">
            <p>
              &ldquo;Thank you for making a difference with the boys and thank you
              for volunteering to continue. Your continued courage and role
              modelling is quite impactful.&rdquo;
            </p>
            <div className="testimonial-name">Paul Gladigau</div>
            <div className="testimonial-role">President, Old Knox Grammarians Association</div>
          </div>
        </div>
      </div>
    </section>
  );
}
