import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="badge">Agents Available Right Now</div>
            <h1 className="hero-title">Need Help <span>Booking a Flight?</span> We Handle It.</h1>
            <p className="hero-sub">Skip the back-and-forth with booking portals. Our agents find real fares, navigate complex routes, and confirm your booking — in minutes, not hours.</p>
            <div className="hero-btns">
              <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
              <Link href="/about" className="btn-outline">How It Works →</Link>
            </div>
            <p className="hero-note">Live agents available now — no IVR, no hold music, no transfers</p>
            <div className="chips">
              <span className="chip">✓ 24/7 Support</span>
              <span className="chip">✓ No Hold Music</span>
              <span className="chip">✓ Fast Booking</span>
              <span className="chip">✓ No IVR</span>
              <span className="chip">✓ Live Agents</span>
            </div>
          </div>
          <div className="hero-img-box">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&q=80&auto=format&fit=crop" alt="Airplane in flight" loading="eager" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how">
        <div className="inner">
          <div className="section-center">
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Your Flight Booked in 3 Steps</h2>
            <p className="section-sub">We&apos;ve streamlined the booking process so you can get on with your plans, not your screens.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Give Us a Call</h3>
              <p>Dial our dedicated line and you&apos;ll be connected to a live agent in moments. No automated menus, no waiting on hold — just a real person ready to help.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>We Find Your Options</h3>
              <p>Tell us your travel dates, destination, and preferences. We search available routes and fares across departure times and cabin classes to match your needs.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Your Booking is Confirmed</h3>
              <p>We complete the booking on your behalf and you receive confirmation. Simple, done, and you&apos;re ready to travel — without the hassle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="inner">
          <div className="section-label">Why Call Us</div>
          <h2 className="section-title">DIY vs. Calling Our Agents</h2>
          <div className="compare-grid">
            <div className="compare-card">
              <h3>🖥️ Book It Yourself</h3>
              <ul>
                <li>Hours spent browsing multiple booking websites</li>
                <li>Confusing fare rules, baggage fees, and seat add-ons</li>
                <li>Booking errors can be costly and hard to fix</li>
                <li>Miss fares that aren&apos;t visible on comparison sites</li>
                <li>No one to call if something changes last minute</li>
              </ul>
            </div>
            <div className="compare-card highlight">
              <h3>📞 Call Our Agents</h3>
              <ul>
                <li>We search the best available fares for your route</li>
                <li>Clear, plain-language explanations of all fees</li>
                <li>Expert help with multi-city and complex itineraries</li>
                <li>Booking completed quickly with no errors</li>
                <li>Reach us anytime — we&apos;re available 24 hours a day</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT RESULTS */}
      <section className="results">
        <div className="inner">
          <div className="section-center">
            <div className="section-label">Recent Bookings</div>
            <h2 className="section-title">Travelers We&apos;ve Helped Book</h2>
            <p className="section-sub">Real booking outcomes from people who called instead of searching.</p>
          </div>
          <div className="results-grid">
            {[
              { quote: 'Round-trip confirmed at the lowest available fare — handled in about 15 minutes.', route: 'NYC → LAX &nbsp;·&nbsp; Round-Trip Booking' },
              { quote: 'Multi-city itinerary sorted out across three stops — saved us a lot of time and confusion.', route: 'ORD → MIA → ATL &nbsp;·&nbsp; Multi-City Booking' },
              { quote: 'Needed to fly within the same week — agent found availability and got it booked right away.', route: 'DFW → SEA &nbsp;·&nbsp; Last-Minute Booking' },
              { quote: 'Group of five passengers booked together with preferred seats locked in — smooth process.', route: 'BOS → LAS &nbsp;·&nbsp; Group Booking' },
              { quote: 'Upgraded to a better cabin class within my budget — agent knew exactly where to look.', route: 'SFO → JFK &nbsp;·&nbsp; Cabin Upgrade' },
              { quote: 'Day-before travel, still found a flight and got everything confirmed before I hung up.', route: 'PHX → DTW &nbsp;·&nbsp; Same-Day Booking' },
            ].map((item, i) => (
              <div className="result-card" key={i}>
                <div className="result-status">✓ Booked</div>
                <blockquote dangerouslySetInnerHTML={{ __html: `&ldquo;${item.quote}&rdquo;` }} />
                <div className="result-route" dangerouslySetInnerHTML={{ __html: item.route }} />
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--gray)' }}>
            Results vary. Outcomes depend on airline availability and individual booking conditions.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="inner">
          <div className="features-wrap">
            <div>
              <div className="section-label">Why Travelers Choose Us</div>
              <h2 className="section-title">Booking Help That Actually Works</h2>
              <div className="features-list" style={{ marginTop: 32 }}>
                {[
                  { icon: '🔍', title: 'Fare Expertise', desc: 'Our agents understand how fare classes, routing rules, and availability windows work — and use that knowledge to find options that suit your trip.' },
                  { icon: '⚡', title: 'Fast, Hassle-Free Process', desc: 'No confusing portals, no error-prone forms. We take care of the entire booking and confirm your reservation quickly so you can move on.' },
                  { icon: '🕐', title: 'Available Around the Clock', desc: 'Whether you\'re planning weeks out or need a flight tomorrow morning, our agents are available 24 hours a day, 7 days a week.' },
                  { icon: '🗺️', title: 'Complex Itineraries Welcome', desc: 'Multi-city trips, open-jaw routes, group bookings — we handle the complicated cases that booking sites make frustrating.' },
                ].map((feat, i) => (
                  <div className="feat" key={i}>
                    <div className="feat-icon">{feat.icon}</div>
                    <div>
                      <h4>{feat.title}</h4>
                      <p>{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="feat-img">
              <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80&auto=format&fit=crop" alt="Airplane flying" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="inner">
          <div className="badge" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>Agents Available Now</div>
          <h2>Ready to Book Your Flight?</h2>
          <p>Let our agents take care of it. Call now and get your itinerary confirmed without the hassle.</p>
          <div className="cta-btns">
            <a href="tel:8557716048" className="btn-primary">📞 Call +1 855-771-6048</a>
          </div>
        </div>
      </section>

      <div className="disclaimer">
        We are an independent travel assistance service and are not affiliated with any airline, airport, or travel brand. For direct airline inquiries, please visit your airline&apos;s official website.
      </div>
    </>
  );
}
