function toggleNavMenu() {
    hamburgerButton.classList.toggle("is-active");
    document.querySelector("#nav-list").classList.toggle("nav-list-hide");
    document.querySelector("#nav-list").classList.toggle("nav-list-show");
}

// Hamburger navbar show/hide
const hamburgerButton = document.querySelector("#hamburger-button");

hamburgerButton.onclick = () => {
    toggleNavMenu();
};

// Active nav link
const navList = document.querySelectorAll(".nav-link");

navList.forEach((navLink) => {
    navLink.onclick = () => {
        document.querySelector(".nav-link-active")?.classList.remove("nav-link-active");
        navLink.classList.add("nav-link-active");
        toggleNavMenu();
    };
});

const sections = document.querySelectorAll("main > section");

window.onscroll = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navList.forEach((navLink) => {
        navLink.classList.remove("nav-link-active");
        if (navLink.classList.contains(current)) {
            navLink.classList.add("nav-link-active");
        }
    });
};
