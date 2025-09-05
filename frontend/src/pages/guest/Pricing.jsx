export default function Pricing() {
  return (
    <main id="main">
      <section className="features" aria-label="Pricing">
        <h1 style={{ textAlign: "center", marginBottom: 16 }}>Pricing</h1>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💵</div>
            <h3>Standard</h3>
            <p>Budget-friendly rates for most trips around town.</p>
            <p style={{ marginTop: 8, fontWeight: 700 }}>$8–$15 typical</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛫</div>
            <h3>Airport</h3>
            <p>Flat, transparent fares to regional airports.</p>
            <p style={{ marginTop: 8, fontWeight: 700 }}>$25–$45</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Split Fare</h3>
            <p>Share with friends; split the total at checkout.</p>
            <p style={{ marginTop: 8, fontWeight: 700 }}>+$0 per rider</p>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: 16, color: "var(--muted)" }}>
          Exact prices depend on distance and time; no surge pricing during peak campus hours.
        </p>
      </section>
    </main>
  );
}
