import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="navbar" aria-label="Primary">
        {/* Logo */}
        <div className="logo-section">
          <Link to="/">
            <img src="/images/Logo.png" alt="MastoRide" className="brand-logo" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="menu-btn"
          className="menu-toggle"
          aria-expanded={open ? "true" : "false"}
          aria-controls="site-nav"
          onClick={() => setOpen((s) => !s)}
        >
          ☰ Menu
        </button>

        {/* Navigation links */}
        <ul id="site-nav" className="nav-links" hidden={!open}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink className="btn" to="/signup">Sign Up</NavLink></li>
          <li><NavLink className="btn" to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
