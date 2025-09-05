export default function Signup() {
  function onSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.elements.email.value.trim();
    const err = e.currentTarget.querySelector("#err");
    if (!email.includes("@")) {
      err.textContent = "Please enter a valid email (must include @).";
      e.currentTarget.elements.email.focus();
      return;
    }
    err.textContent = "";
    alert("Sign up submitted (demo)");
  }

  return (
    <section className="auth-section" aria-label="Sign Up">
      <h1>Sign Up</h1>
      <form id="signup" onSubmit={onSubmit} noValidate>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter email" required />
        <button type="submit" className="btn">Sign Up</button>
        <p id="err" className="error" aria-live="polite"></p>
      </form>
    </section>
  );
}
