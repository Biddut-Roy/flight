export default function AboutPage() {
  return (
    <>
      <div className="page-hero-center">
        <h1>About <span>Book Flights Now</span></h1>
        <p>We&apos;re an independent travel assistance service that connects travelers with knowledgeable live agents — making flight booking and travel changes simpler than they need to be.</p>
      </div>

      <section>
        <div className="inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">Real People Helping Real Travelers</h2>
              <p>Book Flights Now is an independent travel assistance service. We exist because booking a flight — or managing a change or cancellation — can be far more complicated than it should be. Online portals are confusing, airline hold lines are long, and mistakes can be costly.</p>
              <p>We connect travelers with live, knowledgeable agents who cut through the complexity. When you call us, a real person picks up — no automated menus, no transfers, no hold music. We find your options, explain them clearly, and get things handled.</p>
              <p>We serve travelers across the United States and are available 24 hours a day, 7 days a week. Whether you need to book a flight tonight or sort out a complicated itinerary, we&apos;re ready to help.</p>
              <a href="tel:8557716048" className="btn-primary" style={{ marginTop: 16 }}>📞 Call +1 855-771-6048</a>
            </div>
            <div className="about-img">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&q=80&auto=format&fit=crop" alt="Travel agent helping customer" />
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="inner">
          <div className="section-label">What We Stand For</div>
          <h2 className="section-title">Our Approach</h2>
          <div className="values-grid">
            {[
              { icon: '🤝', title: 'Straightforward Help', desc: 'We don\'t overcomplicate things. Our agents give you clear information, honest guidance, and handle your request efficiently so you can get on with your day.' },
              { icon: '🕐', title: 'Always Available', desc: 'Travel doesn\'t follow business hours and neither do we. Our agents are available around the clock — whether it\'s 6 AM or 11 PM, someone will pick up.' },
              { icon: '✈️', title: 'Travel Knowledge', desc: 'Our agents understand fare classes, routing rules, cancellation policies, and baggage regulations — and use that expertise to help you navigate your specific situation.' },
            ].map((item, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-grid">
          <div><div className="stat-num">24/7</div><div className="stat-label">Agent Availability</div></div>
          <div><div className="stat-num">0</div><div className="stat-label">IVR Menus or Hold Music</div></div>
          <div><div className="stat-num">US</div><div className="stat-label">Nationwide Service</div></div>
          <div><div className="stat-num">Fast</div><div className="stat-label">Booking Turnaround</div></div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Talk to a Live Agent?</h2>
        <p>No menus, no transfers, no hold music. Just helpful agents ready to assist with your flight.</p>
        <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
      </section>

      <div className="disclaimer">
        Book Flights Now is an independent travel assistance service and is not affiliated with any airline, booking platform, or travel brand.
      </div>
    </>
  );
}
