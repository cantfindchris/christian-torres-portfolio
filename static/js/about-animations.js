document.addEventListener("DOMContentLoaded", () => {
    const about = document.querySelector(".about-profile");
    if (!about) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const sections = about.querySelectorAll(".about-section");
    if (!sections.length) return;

    about.classList.add("about-motion-ready");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    sections.forEach((section) => observer.observe(section));
});
