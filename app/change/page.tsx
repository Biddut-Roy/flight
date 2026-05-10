export default function ChangePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div>
            <div className="badge">Agents Available Right Now</div>
            <h1>Need to <span>Change Your Flight?</span> Our Agents Handle the Details.</h1>
            <p>Flight change fees, date restrictions, and availability windows can be confusing. Our live agents sort through the details and get your updated itinerary confirmed quickly.</p>
            <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
            <div className="hero-chips">
              <span className="chip">✓ Date Changes</span>
              <span className="chip">✓ Destination Changes</span>
              <span className="chip">✓ Same-Day Changes</span>
              <span className="chip">✓ Live Agents 24/7</span>
            </div>
          </div>
          <div className="hero-img-box">
            <img src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&q=80&auto=format&fit=crop" alt="Flight departure board" loading="eager" />
          </div>
        </div>
      </div>

      <section>
        <div className="inner">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Change Your Flight in 3 Steps</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Call Our Agents</h3>
              <p>Call +1 855-771-6048 and a live agent will answer. Have your booking reference ready — we&apos;ll pull up your itinerary and review the change options available to you.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>We Review Available Flights</h3>
              <p>We check availability for your preferred new dates or destination, explain any fare differences or change fees, and present your options clearly before anything is changed.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Updated Booking Confirmed</h3>
              <p>Once you choose your preferred option, we process the change and you receive updated confirmation details. Done — no confusion, no errors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reasons">
        <div className="inner">
          <div className="section-label">Types of Changes We Help With</div>
          <h2 className="section-title">Whatever Changed, We Can Help</h2>
          <div className="reason-grid">
            {[
              { icon: '📅', title: 'Travel Date Changes', desc: 'Pushing your trip back a few days or moving it forward? We check availability and fare rules to find the best option for your new travel dates.' },
              { icon: '🗺️', title: 'Destination Changes', desc: 'Plans shifted and you need to fly somewhere different? We review what\'s available and what fare difference, if any, applies to your change.' },
              { icon: '⏰', title: 'Same-Day Flight Changes', desc: 'Need an earlier or later departure on the same day? Our agents check same-day flight availability and help get you on the right departure.' },
              { icon: '👥', title: 'Passenger Name Corrections', desc: 'Minor name corrections are sometimes possible depending on the airline and fare. We check what\'s allowed and help you address the issue before travel.' },
            ].map((item, i) => (
              <div className="reason-card" key={i}>
                <div className="reason-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="inner">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Flight Change FAQs</h2>
          <div className="faq-list">
            {[
              { q: 'Will I have to pay a fee to change my flight?', a: 'It depends on your fare type and airline policy. Some airlines have eliminated change fees on certain fare classes, while others still charge. Our agents check what applies to your specific ticket before any changes are made.' },
              { q: 'Can I change my flight to a completely different destination?', a: 'In many cases, yes — though this may result in a fare difference. Our agents will review your ticket\'s terms and let you know what\'s possible before proceeding.' },
              { q: 'How quickly can my flight change be processed?', a: 'Most changes can be processed during your call, assuming the desired flights have availability. Our agents work efficiently to get your updated itinerary confirmed before you hang up.' },
              { q: 'What if no availability exists for my new travel date?', a: 'If your first-choice date has no available seats, we\'ll present alternate dates or departure times that work with your ticket. We\'ll also explain any other options, including holding credit for future travel.' },
            ].map((faq, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-q">{faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Change Your Flight?</h2>
        <p>Call us and a live agent will handle the details — no hold music, no confusion, no transfers.</p>
        <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
      </section>

      <div className="disclaimer">
        We are an independent travel assistance service and are not affiliated with any airline. For direct airline support, please visit your airline&apos;s official website.
      </div>
    </>
  );
}
