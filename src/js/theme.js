const toggle = document.getElementById("toggleTheme");
const toggleThemeText = document.getElementById("toggleThemeText");

// Verifica se o tema atual é dark baseado no localStorage
let isDark = localStorage.getItem("theme") === "Dark";

// Aplica o tema salvo ao carregar a página
if (isDark) {
  setDarkTheme();
  toggle.checked = true;
  toggleThemeText.textContent = "Dark";
} else {
  setLightTheme();
  toggle.checked = false;
  toggleThemeText.textContent = "Light";
}

toggle.addEventListener("click", () => {
  if (isDark) {
    localStorage.setItem("theme", "Light");
    setLightTheme();
    toggle.checked = false;
    toggleThemeText.textContent = "Light";
  } else {
    localStorage.setItem("theme", "Dark");
    setDarkTheme();
    toggle.checked = true;
    toggleThemeText.textContent = "Dark";
  }
  isDark = !isDark;
});

function setDarkTheme() {
  document.documentElement.style.setProperty("--text-color", "#ecf0f1");
  document.documentElement.style.setProperty("--title-color", "#bebebe");
  document.documentElement.style.setProperty("--background-color", "#1a1a1a");
}

function setLightTheme() {
  document.documentElement.style.setProperty("--text-color", "#222");
  document.documentElement.style.setProperty("--title-color", "#444");
  document.documentElement.style.setProperty("--background-color", "#ffffff");
}
