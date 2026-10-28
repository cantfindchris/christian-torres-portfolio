document.addEventListener("DOMContentLoaded", () => {
    const roadmap = document.querySelector(".career-roadmap");

    if (!roadmap) return;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        return;
    }

    const items = roadmap.querySelectorAll(".career-roadmap-item");
    const heading = roadmap.querySelector(".career-roadmap-heading");

    const targets = [heading, ...items].filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
    });

    targets.forEach((target) => observer.observe(target));

    roadmap.classList.add("roadmap-motion-ready");

    targets.forEach((target) => {
        if (target.getBoundingClientRect().top < window.innerHeight * 0.85) {
            target.classList.add("is-visible");
            observer.unobserve(target);
        }
    });
});
