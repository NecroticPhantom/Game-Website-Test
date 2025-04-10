let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("themeSwitch")

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    themeSwitch.style.transform = "translateX(calc(50% + 0.03vw))";
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    themeSwitch.style.transform = "translateX(calc(-50% - 0.03vw))";
}

if (darkmode === "active") {
    enableDarkmode()
}

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})