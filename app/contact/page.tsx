export default function ContactPage() {
  return (
    <>
      <div className="page-hero-center">
        <h1>Contact <span>Book Flights Now</span></h1>
        <p>The fastest way to reach us is by phone. A live agent picks up — no automated menus, no transfers, no hold music.</p>
      </div>

      <section>
        <div className="inner">
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title">We&apos;re Ready to Help</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3>Call a Live Agent</h3>
              <p>The fastest way to get help. Dial our number and a knowledgeable agent picks up right away — ready to assist with bookings, cancellations, changes, or any travel question.</p>
              <a href="tel:8557716048" className="btn-primary">Call +1 855-771-6048</a>
              <p style={{ marginTop: 14, fontSize: 13, color: 'var(--gray)' }}>Available 24 hours a day, 7 days a week</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">✈️</div>
              <h3>What We Help With</h3>
              <p>Our agents assist with flight bookings, itinerary changes, cancellations, refund questions, baggage inquiries, and general travel assistance — all in a single call.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, textAlign: 'left', marginTop: 8 }}>
                {['Flight booking assistance', 'Cancellation guidance', 'Flight change help', 'Baggage questions'].map((item, i) => (
                  <span key={i} style={{ fontSize: 14, color: 'var(--gray)' }}>✓ {item}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 56 }}>
            <div className="section-label">Availability</div>
            <h2 className="section-title">When You Can Reach Us</h2>
            <div className="hours-table">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, i) => (
                <div className={`hours-row${i % 2 === 1 ? ' hours-bg' : ''}`} key={i}>
                  <span>{day}</span>
                  <span>24 Hours Available</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="disclaimer">
        We are an independent travel assistance service and are not affiliated with any airline. For direct airline support, please visit your airline&apos;s official website.
      </div>
    </>
  );
}
