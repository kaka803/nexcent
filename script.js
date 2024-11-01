let navlinks = document.querySelector(".nav-links ul")

let btn = document.querySelector(".nav-toggle")

btn.addEventListener("click" , () => {
    navlinks.classList.toggle("active")
})