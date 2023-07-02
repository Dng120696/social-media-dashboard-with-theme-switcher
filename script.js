const body = document.querySelector("body");
const toggle = document.querySelector(".toggle-box");
const darkModeButton = document.querySelector(".dark-mode");
const header = document.querySelector("header");
const toggleName = document.querySelector(".toggle-icon-name");

const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));

function setTheme(darkMode) {
  if (darkMode) {
    toggleName.textContent = "Light Mode";
    body.classList.add("active");
    header.classList.add("light-mode");
    darkModeButton.classList.add("light-mode");
  } else {
    toggleName.textContent = "Dark Mode";
    body.classList.remove("active");
    header.classList.remove("light-mode");
    darkModeButton.classList.remove("light-mode");
  }
}

// Check local storage for user preference and apply the appropriate theme
if (isDarkMode !== null) {
  setTheme(isDarkMode);
} else {
  // If no preference is found in local storage, set the default theme
  setTheme(false);
}

toggle.addEventListener("click", function () {
  darkModeButton.classList.toggle("light-mode");
  this.classList.toggle("light-mode");
  const currentMode = body.classList.contains("active");
  localStorage.setItem("isDarkMode", JSON.stringify(!currentMode));
  setTheme(!currentMode);
});

