document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector("#pc-photo-dialog");
  const link = document.querySelector(".pc-photo-link");

  if (!dialog || !link) return;

  link.addEventListener("click", (event) => {
    event.preventDefault();
    dialog.showModal();
  });

  dialog.querySelector(".pc-photo-close")?.addEventListener("click", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
});
