document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".mobile-menu-toggle");
    const navigation = document.getElementById("primary-navigation");

    if (!button || !navigation) return;

    function closeMenu() {
        navigation.classList.remove("is-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
        button.querySelector(".menu-icon").textContent = "☰";
    }

    function openMenu() {
        navigation.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-label", "Close navigation menu");
        button.querySelector(".menu-icon").textContent = "✕";
    }

    button.addEventListener("click", () => {
        const isOpen = navigation.classList.contains("is-open");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navigation.classList.contains("is-open")) {
            closeMenu();
            button.focus();
        }
    });

    navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    window.matchMedia("(min-width: 701px)").addEventListener("change", (event) => {
        if (event.matches) closeMenu();
    });
});
