export default function Services() {
  return (
    <main id="main">
      <section className="features" aria-label="Services">
        <h1 style={{ textAlign: "center", marginBottom: 16 }}>Our Services</h1>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🚕</div>
            <h3>Campus → Off-Campus</h3>
            <p>Safe, reliable rides from campus to shopping, restaurants, airports, and more.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🕒</div>
            <h3>Scheduled Rides</h3>
            <p>Book ahead for early flights or exam days—no surprise pricing, ever.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Safety Focused</h3>
            <p>Verified student riders, shareable trip status, and support when you need it.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
