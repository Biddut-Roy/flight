export default function BaggagePage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div>
            <div className="badge">Agents Available Right Now</div>
            <h1>Baggage Questions? Get <span>Clear Answers</span> From a Live Agent.</h1>
            <p>Baggage rules, fees, and weight limits vary widely by airline and fare class. Our agents give you accurate, straightforward answers specific to your booking — no guesswork.</p>
            <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
            <div className="hero-chips">
              <span className="chip">✓ Fee Clarification</span>
              <span className="chip">✓ Lost Bag Help</span>
              <span className="chip">✓ Carry-On Rules</span>
              <span className="chip">✓ 24/7 Live Agents</span>
            </div>
          </div>
          <div className="hero-img-box">
            <img src="https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&q=80&auto=format&fit=crop" alt="Airport luggage" loading="eager" />
          </div>
        </div>
      </div>

      <section>
        <div className="inner">
          <div className="section-label">Baggage Topics</div>
          <h2 className="section-title">Common Baggage Situations We Help With</h2>
          <div className="topics-grid">
            {[
              { icon: '💼', title: 'Checked Baggage Fees', desc: 'Checked bag fees depend on your airline, fare class, and frequent flyer status. Our agents clarify what your specific ticket includes and what any additional bags would cost.' },
              { icon: '🎒', title: 'Carry-On Allowances', desc: 'Carry-on size restrictions and personal item rules differ by airline. We help you understand exactly what you can bring on board without extra charges.' },
              { icon: '⚖️', title: 'Weight & Size Limits', desc: 'Overweight bag fees can add up quickly. Our agents tell you the exact weight and dimension limits for your airline before you pack — avoiding surprises at the gate.' },
              { icon: '🔍', title: 'Lost or Delayed Luggage', desc: 'If your bag didn\'t arrive with you, our agents can help you understand the report and follow-up process and what you may be entitled to from the airline.' },
              { icon: '🎸', title: 'Special or Oversized Items', desc: 'Sporting equipment, musical instruments, and fragile items often require special handling. We explain airline policies so you can travel prepared.' },
              { icon: '✈️', title: 'International Baggage Rules', desc: 'International routes often have different baggage allowances than domestic flights. Our agents clarify the rules that apply to your specific itinerary.' },
            ].map((item, i) => (
              <div className="topic-card" key={i}>
                <div className="topic-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tip-section">
        <div className="inner">
          <div className="section-label">Helpful Tips</div>
          <h2 className="section-title">Before You Pack — Good to Know</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>📋 Check Before You Travel</h3>
              <ul>
                <li>Baggage policies can vary even within the same airline based on fare class</li>
                <li>Prepaying for checked bags online is often cheaper than paying at the airport</li>
                <li>Elite status or certain credit cards may include free checked bags</li>
                <li>Baggage rules for connecting flights may differ on each leg</li>
              </ul>
            </div>
            <div className="tip-card">
              <h3>🧳 Packing Smart</h3>
              <ul>
                <li>Weigh your bag at home to avoid overweight charges at the check-in counter</li>
                <li>Keep valuables and essentials in your carry-on just in case your bag is delayed</li>
                <li>Take photos of the contents of checked bags before travel as a precaution</li>
                <li>Remove old baggage tags from previous trips to avoid routing errors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="inner">
          <div className="section-label">Common Questions</div>
          <h2 className="section-title">Baggage FAQs</h2>
          <div className="faq-list">
            {[
              { q: 'How do I know how many bags I can bring?', a: 'Your baggage allowance depends on your airline, fare type, and frequent flyer status. Call our agents with your booking details and we\'ll tell you exactly what your ticket includes and what any additional bags would cost.' },
              { q: 'What happens if my bag is lost or delayed?', a: 'If your bag didn\'t arrive, the airline\'s baggage claim office is your first point of contact at the airport. Our agents can help you understand the process for filing a report and what compensation you may be entitled to for delayed or lost bags.' },
              { q: 'Can I add a checked bag after I\'ve already booked?', a: 'Yes — in most cases you can add checked bags after booking, often at a lower cost than paying at the airport. Our agents can guide you on how to do this for your specific booking.' },
              { q: 'Are baggage fees refundable if I cancel my flight?', a: 'This depends on the airline and the circumstances of your cancellation. In many cases, prepaid baggage fees are refundable if you cancel your flight. Our agents can clarify what applies to your booking.' },
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
        <h2>Baggage Question? Call Us — We&apos;ll Sort It Out.</h2>
        <p>Get clear, accurate answers specific to your booking from a live agent — no hold music, available anytime.</p>
        <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
      </section>

      <div className="disclaimer">
        We are an independent travel assistance service and are not affiliated with any airline. For direct airline support, please visit your airline&apos;s official website.
      </div>
    </>
  );
}
