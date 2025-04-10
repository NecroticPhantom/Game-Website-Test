let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("themeSwitch")
const themeSwitchInner = document.getElementById("themeSwitchInner")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    themeSwitchInner.style.justifyContent = "right";
    themeSwitch.style.transform = "translateX(0.3vw)";
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    themeSwitchInner.style.justifyContent = "left";
    themeSwitch.style.transform = "translateX(-0.3vw)";
}

if (darkmode === "active") {
    enableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})