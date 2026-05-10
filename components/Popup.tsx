'use client';

import { useEffect, useState } from 'react';

export default function Popup() {
  const [visible, setVisible] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setVisible(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d: Record<string, string>) => {
        const city = d.city || '';
        const region = d.region_code || '';
        const loc = city ? city + (region ? ', ' + region : '') : '';
        if (loc) setLocation(loc);
      })
      .catch(() => {});
  }, []);

  if (!visible) return null;

  return (
    <div
      id="popup-overlay"
      style={{
        display: 'flex',
        position: 'fixed',
        inset: 0,
        background: 'rgba(10,20,60,0.72)',
        zIndex: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}
      onClick={(e) => { if ((e.target as HTMLElement).id === 'popup-overlay') setVisible(false); }}
    >
      <div style={{
        background: '#fff',
        borderRadius: 20,
        maxWidth: 480,
        width: '100%',
        padding: '32px 28px 24px',
        position: 'relative',
        boxShadow: '0 24px 80px rgba(10,30,80,0.35)',
        textAlign: 'center',
        animation: 'popIn 0.35s cubic-bezier(.34,1.56,.64,1)',
      }}>
        <button
          onClick={() => setVisible(false)}
          style={{
            position: 'absolute',
            top: 14,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 20,
            cursor: 'pointer',
            color: '#64748b',
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <div style={{ fontSize: 36, marginBottom: 10 }}>✈️</div>
        <h2 style={{
          fontFamily: "'Nunito',sans-serif",
          fontSize: 22,
          fontWeight: 900,
          color: '#0a1e50',
          marginBottom: 8,
          lineHeight: 1.3,
        }}>
          Need Help With Your Booking?
        </h2>
        <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
          Speak with a live agent for booking support, urgent changes, cancellations, and travel assistance.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 18 }}>
          {['Cancellation', 'Flight Change', 'Missed Flight', 'Name Correction', 'Book a Flight'].map((tag) => (
            <span key={tag} style={{
              background: '#eff6ff',
              color: '#1d4ed8',
              fontSize: 12,
              fontWeight: 700,
              padding: '6px 14px',
              borderRadius: 99,
              border: '1px solid #bfdbfe',
            }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 20 }}>
          {['24/7 Support', 'Fast Response', 'No IVR', 'No Hold Music', 'Live Agents'].map((item) => (
            <span key={item} style={{ fontSize: 13, color: '#16a34a', fontWeight: 700 }}>
              ✅ {item}
            </span>
          ))}
        </div>
        <a
          href="tel:8557716048"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            background: '#f59e0b',
            color: '#0a1e50',
            fontFamily: "'Nunito',sans-serif",
            fontWeight: 900,
            fontSize: 17,
            padding: '16px 24px',
            borderRadius: 14,
            textDecoration: 'none',
            marginBottom: 12,
            boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
          }}
        >
          📞 Talk to a Live Agent — +1 855-771-6048
        </a>
        <p style={{ fontSize: 13, color: '#64748b', margin: 0 }}>
          📍 {location ? `Serving travelers in ${location} and across the US` : 'Serving travelers across the US'}
        </p>
      </div>
    </div>
  );
}
