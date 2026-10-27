document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".projects-page");
    if (!page) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    page.classList.add("projects-motion-ready");

    const sections = page.querySelectorAll(
        ".featured-projects, .github-projects"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    sections.forEach(section => observer.observe(section));
});
