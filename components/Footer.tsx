import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <Link className="logo" href="/" style={{ marginBottom: 8, display: 'inline-flex' }}>
              <div className="logo-icon">✈</div>
              <div className="logo-text" style={{ fontSize: 17 }}>Book Flights <span>Now</span></div>
            </Link>
            <p>Live agent assistance for flight booking, cancellations, changes, and more. Available 24/7 at +1 855-771-6048.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/">Book a Flight</Link></li>
              <li><Link href="/cancel">Flight Cancellation</Link></li>
              <li><Link href="/change">Change Your Flight</Link></li>
              <li><Link href="/baggage">Baggage Assistance</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:8557716048">+1 855-771-6048</a></li>
              <li><Link href="/contact">Send a Message</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>24/7 — Live Agents</li>
              <li style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>No Hold Music</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} Book Flights Now. All rights reserved.</span>
          <span><Link href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</Link> &nbsp;·&nbsp; <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</Link></span>
        </div>
        <div className="footer-disclaimer">
          Book Flights Now is an independent travel assistance service. We are not affiliated with, endorsed by, or connected to any airline, booking platform, or travel agency. All trademarks belong to their respective owners. Results vary by availability and individual booking conditions.
        </div>
      </footer>
    </>
  );
}
