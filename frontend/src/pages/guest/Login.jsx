export default function Login() {
  function onSubmit(e) {
    e.preventDefault();
    const email = e.currentTarget.elements["login-email"].value.trim();
    const password = e.currentTarget.elements["login-password"].value.trim();
    const err = e.currentTarget.querySelector("#login-err");
    if (!email.includes("@")) {
      err.textContent = "Please enter a valid email (must include @).";
      e.currentTarget.elements["login-email"].focus();
      return;
    }
    if (password.length < 6) {
      err.textContent = "Password must be at least 6 characters.";
      e.currentTarget.elements["login-password"].focus();
      return;
    }
    err.textContent = "";
    alert("Login submitted (demo)");
  }

  return (
    <section className="auth-section" aria-label="Login">
      <h1>Login</h1>
      <form id="login" onSubmit={onSubmit} noValidate>
        <label htmlFor="login-email">Email</label>
        <input type="email" id="login-email" placeholder="Enter email" required />
        <label htmlFor="login-password">Password</label>
        <input type="password" id="login-password" placeholder="Enter password" required />
        <button type="submit" className="btn">Login</button>
        <p id="login-err" className="error" aria-live="polite"></p>
      </form>
    </section>
  );
}
