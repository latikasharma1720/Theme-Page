import { useState } from "react";

function QA({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ border: "1px solid var(--border)", borderRadius: 12, padding: 16, background: "#fff" }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{
          width: "100%", textAlign: "left", background: "transparent", border: "none",
          fontWeight: 800, fontSize: "1.05rem", color: "var(--primary)", cursor: "pointer"
        }}
      >
        {q}
      </button>
      {open && <p style={{ marginTop: 10, color: "var(--muted)" }}>{a}</p>}
    </div>
  );
}

export default function FAQ() {
  return (
    <main id="main">
      <section className="features" aria-label="FAQ">
        <h1 style={{ textAlign: "center", marginBottom: 16 }}>Frequently Asked Questions</h1>

        <div className="feature-grid" style={{ gridTemplateColumns: "1fr" }}>
          <QA
            q="Who can use MastoRide?"
            a="Verified students with a valid university (.edu) email."
          />
          <QA
            q="Is there surge pricing?"
            a="No. Rates are student-friendly and stable during campus peak hours."
          />
          <QA
            q="Can I schedule a ride?"
            a="Yes—book in advance for early morning classes or flights."
          />
          <QA
            q="Is my trip trackable?"
            a="Yes—share your trip status with friends for peace of mind."
          />
        </div>
      </section>
    </main>
  );
}
