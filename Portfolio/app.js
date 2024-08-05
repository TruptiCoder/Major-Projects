let links = document.querySelectorAll(".nav-options a");

for(let link of links) {
    link.addEventListener("click", () => {
        for(let li of links) {
            li.classList.remove("active");
        }
        link.classList.add("active");
    });
}