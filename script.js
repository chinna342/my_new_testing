// ==========================================
// 1. Dynamic Greeting Based on Current Time
// ==========================================
function updateGreeting() {
  const heroHeading = document.querySelector(".hero h1");
  if (!heroHeading) return;

  const currentHour = new Date().getHours();
  let greetingText = "Hello";

  if (currentHour < 12) {
    greetingText = "Good Morning";
  } else if (currentHour < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }

  // Prepend the greeting before the name
  heroHeading.innerHTML = `${greetingText}! I'm <span>Your Name</span> 👋`;
}

// ==========================================
// 2. Dark Mode Toggle
// ==========================================
function setupDarkMode() {
  // Create a Dark Mode toggle button in the navigation bar
  const nav = document.querySelector("nav ul");
  if (!nav) return;

  const themeLi = document.createElement("li");
  const themeBtn = document.createElement("button");
  themeBtn.id = "theme-toggle";
  themeBtn.innerText = "🌙 Dark";
  themeBtn.style.cssText = `
    background: transparent;
    border: 1px solid var(--border);
    padding: 0.35rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    color: var(--text);
  `;

  themeLi.appendChild(themeBtn);
  nav.appendChild(themeLi);

  // Check if dark mode was previously enabled
  if (localStorage.getItem("theme") === "dark") {
    enableDarkMode(themeBtn);
  }

  // Handle button click
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode(themeBtn);
    } else {
      enableDarkMode(themeBtn);
    }
  });
}

function enableDarkMode(btn) {
  document.body.classList.add("dark-mode");
  document.documentElement.style.setProperty("--bg", "#0f172a");
  document.documentElement.style.setProperty("--card-bg", "#1e293b");
  document.documentElement.style.setProperty("--text", "#f8fafc");
  document.documentElement.style.setProperty("--text-muted", "#94a3b8");
  document.documentElement.style.setProperty("--border", "#334155");
  btn.innerText = "☀️ Light";
  localStorage.setItem("theme", "dark");
}

function disableDarkMode(btn) {
  document.body.classList.remove("dark-mode");
  document.documentElement.style.setProperty("--bg", "#f8fafc");
  document.documentElement.style.setProperty("--card-bg", "#ffffff");
  document.documentElement.style.setProperty("--text", "#0f172a");
  document.documentElement.style.setProperty("--text-muted", "#64748b");
  document.documentElement.style.setProperty("--border", "#e2e8f0");
  btn.innerText = "🌙 Dark";
  localStorage.setItem("theme", "light");
}

// ==========================================
// 3. Project Card Hover Effect Logs
// ==========================================
function setupProjectCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3") ? card.querySelector("h3").innerText : "Project";
      alert(`You clicked on: ${title}!\nMore details coming soon.`);
    });
  });
}

// ==========================================
// Run everything when page loads
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();
  setupDarkMode();
  setupProjectCards();
});