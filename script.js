/* ====== Mobile menu toggle ====== */
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("site-nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    nav.hidden = open; // show when opening, hide when closing
  });
}

/* ====== SIGNUP form validation ====== */
const form = document.getElementById("signup");
const email = document.getElementById("email");
const err = document.getElementById("err");

if (form && email && err) {
  form.addEventListener("submit", (e) => {
    const value = email.value.trim();
    if (!value.includes("@")) {
      e.preventDefault(); // stop page reload
      err.textContent = "Please enter a valid email (must include @).";
      email.focus();
    } else {
      err.textContent = "";
    }
  });
}

/* ====== LOGIN form validation ====== */
const loginForm = document.getElementById("login");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginErr = document.getElementById("login-err");

if (loginForm && loginEmail && loginPassword && loginErr) {
  loginForm.addEventListener("submit", (e) => {
    const emailValue = loginEmail.value.trim();
    const passwordValue = loginPassword.value.trim();

    if (!emailValue.includes("@")) {
      e.preventDefault();
      loginErr.textContent = "Please enter a valid email (must include @).";
      loginEmail.focus();
    } else if (passwordValue.length < 6) {
      e.preventDefault();
      loginErr.textContent = "Password must be at least 6 characters.";
      loginPassword.focus();
    } else {
      loginErr.textContent = "";
    }
  });
}

/* ====== Smooth scroll (optional if using CSS scroll-behavior) ====== */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
