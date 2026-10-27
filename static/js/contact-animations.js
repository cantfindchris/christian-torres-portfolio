document.addEventListener("DOMContentLoaded", () => {
    const page = document.querySelector(".contact-page");
    const card = page?.querySelector(".contact-unified");

    if (!page || !card) return;

    const command = card.querySelector(".contact-command");
    const entries = Array.from(card.querySelectorAll(".contact-entry"));

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window) || !command) {
        return;
    }

    const fullCommand = command.textContent.trim();

    // Prepare the animation before revealing the terminal.
    page.classList.add("contact-motion-ready");
    card.classList.add("contact-typing-ready");

    command.textContent = "";

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function playTerminalAnimation() {
        card.classList.add("is-visible");

        await sleep(450);

        // Type the terminal command character by character.
        for (const character of fullCommand) {
            command.textContent += character;
            await sleep(35);
        }

        await sleep(350);

        // Reveal the contact entries in sequence.
        for (const entry of entries) {
            entry.classList.add("is-visible");
            await sleep(220);
        }

        card.classList.remove("contact-typing-ready");
    }

    const observer = new IntersectionObserver((observations) => {
        for (const observation of observations) {
            if (observation.isIntersecting) {
                observer.unobserve(card);
                playTerminalAnimation();
            }
        }
    }, { threshold: 0.1 });

    observer.observe(card);
});
