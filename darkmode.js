let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("themeSwitch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    themeSwitch.style.transform = "translateX(3.7vw)";
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    themeSwitch.style.transform = "translateX(-0.3vw)";
}

if (darkmode === "active") {
    enableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})