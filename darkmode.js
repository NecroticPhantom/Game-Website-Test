const themeSwitch = document.getElementById("themeSwitch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  themeSwitch.style.transform = "translateX(2rem)";
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
  themeSwitch.style.transform = "translateX(-2rem)";
};

if (localStorage.getItem("darkmode") === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
  localStorage.getItem("darkmode") === "active"
    ? disableDarkmode()
    : enableDarkmode();
});