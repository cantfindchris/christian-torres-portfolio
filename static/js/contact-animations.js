document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".contact-page");
    const card = page?.querySelector(".contact-unified");

    if (!page || !card) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const entries = card.querySelectorAll(".contact-entry");

    page.classList.add("contact-motion-ready");

    const cardObserver = new IntersectionObserver((observations) => {
        observations.forEach((observation) => {
            if (observation.isIntersecting) {
                card.classList.add("is-visible");
                cardObserver.unobserve(card);
            }
        });
    }, { threshold: 0.1 });

    cardObserver.observe(card);

    const entryObserver = new IntersectionObserver((observations) => {
        observations.forEach((observation) => {
            if (observation.isIntersecting) {
                observation.target.classList.add("is-visible");
                entryObserver.unobserve(observation.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px"
    });

    entries.forEach((entry) => entryObserver.observe(entry));
});
