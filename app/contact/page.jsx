export const metadata = {
  title: 'Book Shane Ting | Keynote Speaker',
  description: 'Inquire about booking Shane Ting for your next event.',
};

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Let&apos;s talk</p>
          <h1>Book Shane<br />for your <em>next event.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              {/*
                Formspree setup (free):
                1. Go to https://formspree.io and sign up.
                2. Create a new form → copy your form ID.
                3. Replace YOUR_FORM_ID below.
              */}
              <form
                className="contact-form"
                action="https://formspree.io/f/xeewvwvg"
                method="POST"
              >
                <div className="form-field">
                  <label htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" name="email" type="email" required />
                </div>
                <div className="form-field">
                  <label htmlFor="org">Organization / Event</label>
                  <input id="org" name="organization" type="text" />
                </div>
                <div className="form-field">
                  <label htmlFor="date">Approximate Event Date</label>
                  <input id="date" name="date" type="text" placeholder="e.g. October 2025" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Tell me about your event</label>
                  <textarea id="message" name="message" rows={5} required />
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{border:'none', cursor:'pointer', alignSelf:'flex-start'}}
                >
                  Send Enquiry →
                </button>
              </form>
            </div>

            <div className="contact-info">
              <h3>What happens next?</h3>
              <p>
                I personally read every enquiry. You&apos;ll hear back within
                1–2 business days with availability and next steps.
              </p>
              <p>
                Prefer email?{' '}
                <a
                  href="mailto:shanexyeah@gmail.com"
                  style={{fontWeight:600, textDecoration:'underline', textUnderlineOffset:'3px'}}
                >
                  shanexyeah@gmail.com
                </a>
              </p>
              <br />
              <h3>What I speak on</h3>
              <p>Turning Setbacks Into Momentum</p>
              <p>The Courage to Begin Again</p>
              <p>Owning Your Story</p>
              <p>Custom topics available for corporate events.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
