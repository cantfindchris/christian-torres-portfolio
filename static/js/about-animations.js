document.addEventListener("DOMContentLoaded", () => {
    const recent = document.querySelector(".recent-posts");
    if (!recent) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    recent.classList.add("recent-motion-ready");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    observer.observe(recent);
});

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


// Reveal the homepage About introduction on scroll.
document.addEventListener("DOMContentLoaded", () => {
    const about = document.querySelector(".homepage-about .about-profile");
    const intro = about?.querySelector(".about-intro");
    if (!intro) return;

    if (
        !("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    about.classList.add("home-intro-motion-ready");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    observer.observe(intro);
});
