import Link from 'next/link';

export const metadata = {
  title: 'Contact | Shane Ting',
  description: 'Book Shane Ting for your next event.',
};

export default function Contact() {
  return (
    <main>
      <section>
        <div className="container center">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Let&apos;s make your next event <em>unforgettable</em>
          </h2>
          <p style={{ maxWidth: 560, margin: '0 auto' }}>
            Booking inquiries, media requests, or just want to say hello —
            fill out the form below or email{' '}
            <a href="mailto:shaneting02@gmail.com" style={{ textDecoration: 'underline' }}>
              shaneting02@gmail.com
            </a>
            .
          </p>

          {/*
            This form uses Formspree (free tier) so it works without a backend.
            1. Create a free account at https://formspree.io
            2. Create a form and replace YOUR_FORM_ID below.
          */}
          <form
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
          >
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="event">Event / Organization</label>
              <input id="event" name="event" type="text" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required />
            </div>
            <button type="submit" className="btn" style={{ border: 0, cursor: 'pointer' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
