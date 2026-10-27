document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("github-repositories");
    if (!container) return;

    container.textContent = "Loading GitHub repositories...";

    try {
        const response = await fetch(
            "https://api.github.com/users/cantfindchris/repos?sort=updated&per_page=100"
        );

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const repositories = await response.json();

        const visibleRepos = repositories.filter(repo =>
            !repo.fork &&
            !repo.archived &&
            repo.name !== "christian-torres-portfolio"
        );

        container.replaceChildren();

        if (visibleRepos.length === 0) {
            container.textContent = "No public repositories available yet.";
            return;
        }

        visibleRepos.forEach(repo => {
            const card = document.createElement("article");
            card.className = "project-card";

            const title = document.createElement("h3");
            title.textContent = repo.name;

            const description = document.createElement("p");
            description.textContent =
                repo.description || "GitHub repository";

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View on GitHub →";

            card.append(title, description);

            if (repo.language) {
                const tags = document.createElement("div");
                tags.className = "project-tags";

                const tag = document.createElement("span");
                tag.className = "project-tag";
                tag.textContent = repo.language;

                tags.appendChild(tag);
                card.appendChild(tags);
            }

            card.appendChild(link);
            container.appendChild(card);
        });
    } catch (error) {
        console.error("Unable to load GitHub repositories:", error);
        container.textContent =
            "Repositories are temporarily unavailable. Visit github.com/cantfindchris to view them.";
    }
});
