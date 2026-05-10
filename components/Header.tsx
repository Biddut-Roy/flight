'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Book a Flight' },
  { href: '/cancel', label: 'Flight Cancellation' },
  { href: '/change', label: 'Change Flight' },
  { href: '/baggage', label: 'Baggage Help' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header-top">
        ✈ Agents Available Now — Call <a href="tel:8557716048">+1 855-771-6048</a> &nbsp;|&nbsp; No Hold Music &nbsp;|&nbsp; 24/7 Support
      </div>
      <nav>
        <Link className="logo" href="/">
          <div className="logo-icon">✈</div>
          <div className="logo-text">Book Flights <span>Now</span></div>
        </Link>
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href="tel:8557716048" className="nav-cta">📞 Call Now</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
