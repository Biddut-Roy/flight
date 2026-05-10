export default function CancelPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div>
            <div className="badge">Agents Available Right Now</div>
            <h1>Need to <span>Cancel a Flight?</span> Let Us Walk You Through It.</h1>
            <p>Flight cancellations can be stressful and confusing. Our live agents explain your options, help with refund eligibility, and guide you through the process clearly — no runaround.</p>
            <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
            <div className="hero-chips">
              <span className="chip">✓ Live Agents</span>
              <span className="chip">✓ No Hold Music</span>
              <span className="chip">✓ 24/7 Available</span>
              <span className="chip">✓ Refund Guidance</span>
            </div>
          </div>
          <div className="hero-img-box">
            <img src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80&auto=format&fit=crop" alt="Airport runway" loading="eager" />
          </div>
        </div>
      </div>

      <section>
        <div className="inner">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Cancellation Assistance in 3 Steps</h2>
          <p className="section-sub">We make an otherwise confusing process straightforward.</p>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">1</div>
              <h3>Call Our Agents</h3>
              <p>Reach us at +1 855-771-6048. A live agent picks up right away — tell us your booking details and we&apos;ll take it from there.</p>
            </div>
            <div className="step-card">
              <div className="step-num">2</div>
              <h3>We Review Your Options</h3>
              <p>We look up your booking, explain what cancellation options apply based on your fare type, and outline any refund or credit possibilities.</p>
            </div>
            <div className="step-card">
              <div className="step-num">3</div>
              <h3>Cancellation Processed</h3>
              <p>Once you&apos;ve decided on the best route, we help you initiate the cancellation and confirm the outcome so you know exactly where things stand.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="info-section">
        <div className="inner">
          <div className="section-label">What to Know</div>
          <h2 className="section-title">Common Cancellation Scenarios</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>🕐 Within 24 Hours of Booking</h3>
              <ul>
                <li>Many airlines offer a 24-hour cancellation window for full refunds</li>
                <li>This typically applies to tickets booked directly and departing 7+ days out</li>
                <li>Our agents can clarify whether your booking qualifies</li>
                <li>Acting quickly matters — call us as soon as you need to cancel</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>📋 Refundable vs. Non-Refundable</h3>
              <ul>
                <li>Refundable fares typically allow cancellation for a full refund</li>
                <li>Non-refundable fares may still qualify for travel credits or vouchers</li>
                <li>Cancellation fees vary widely by airline and fare class</li>
                <li>We explain exactly what applies to your specific ticket</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>✈️ Airline-Initiated Changes</h3>
              <ul>
                <li>If an airline cancels or significantly changes your flight, you may be entitled to a full refund</li>
                <li>You also typically have the option to rebook at no extra cost</li>
                <li>Our agents help you understand what you&apos;re entitled to</li>
                <li>We walk you through the best next step based on your situation</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>🏥 Medical or Emergency Cancellations</h3>
              <ul>
                <li>Some airlines accommodate cancellations for documented medical situations</li>
                <li>Travel insurance may cover unexpected cancellations — check your policy</li>
                <li>Our agents help identify what options are available in your case</li>
                <li>Acting promptly usually improves your available options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="inner">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Frequently Asked About Cancellations</h2>
          <div className="faq-list">
            {[
              { q: 'Can I cancel my flight and get a refund?', a: 'It depends on your fare type and when you cancel. Refundable tickets typically allow full refunds. Non-refundable tickets may qualify for travel credit or a partial refund depending on the airline\'s policy. Our agents will review your specific booking and tell you exactly what applies.' },
              { q: 'How long does a refund take after cancellation?', a: 'Refund timelines vary by airline and payment method. Credit card refunds generally take 5–10 business days, while original payment refunds can take longer. Our agents provide clear expectations based on your booking.' },
              { q: 'What if the airline cancelled my flight?', a: 'If the airline initiated the cancellation, you\'re typically entitled to a full refund or rebooking at no additional charge. Our agents can help you understand your rights and choose the best option.' },
              { q: 'Is there a fee to cancel my flight?', a: 'Cancellation fees depend on your fare class and airline. Some tickets have no cancellation fees, while others may have a fee or offer only credit rather than a cash refund. We explain any fees clearly before anything is processed.' },
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
        <h2>Need to Cancel? Call Us Now.</h2>
        <p>Our agents are available 24/7 to walk you through your options with no confusion and no hold music.</p>
        <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
      </section>

      <div className="disclaimer">
        We are an independent travel assistance service and are not affiliated with any airline. For direct airline support, please visit your airline&apos;s official website.
      </div>
    </>
  );
}
