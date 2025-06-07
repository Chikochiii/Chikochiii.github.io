
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleBtn?.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}
