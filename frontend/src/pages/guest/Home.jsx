import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="partnership-banner" aria-label="PFW-only notice" id="home">
        <div className="partnership-content" />
      </section>

      <section className="hero" aria-label="Welcome">
        <div className="hero-content">
          <h1>Welcome to MastoRide</h1>
          <p>
            Get affordable rides from campus to anywhere off-campus. Exclusively for students with a valid PFW Email.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn primary">Book a Ride</Link>
            <Link to="/how" className="btn secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="features" aria-label="How It Works">
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Student-Friendly Pricing</h3>
            <p>Affordable rates designed for student budgets. No surge pricing during peak campus hours.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎓</div>
            <h3>PFW Students Only</h3>
            <p>Exclusive service for verified PFW students with valid .edu emails. Safe and trusted community.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📍</div>
            <h3>Off-Campus Destinations</h3>
            <p>Rides to shopping centers, restaurants, airports—wherever you need to go off-campus.</p>
          </div>
        </div>
      </section>
    </>
  );
}
