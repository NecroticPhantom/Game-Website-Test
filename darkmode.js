const themeSwitch = document.getElementById("themeSwitch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
  themeSwitch.style.left = "4rem";
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", "inactive");
  themeSwitch.style.left = "0.2rem";
};

if (localStorage.getItem("darkmode") === "active") {
  enableDarkmode();
}
else {
  disableDarkmode();
};

themeSwitch.addEventListener("click", () => {
  localStorage.getItem("darkmode") === "active"
    ? disableDarkmode()
    : enableDarkmode();
});