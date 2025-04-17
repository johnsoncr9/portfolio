function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.style.display = "none";
  });
}

document.querySelectorAll(".project").forEach((projectCard) => {
  projectCard.addEventListener("click", () => {
    console.log("Clicked");
    closeModal(); // Close any open modals first
    const modalId = "#modal-" + projectCard.id;
    const modal = document.querySelector(modalId);
    if (modal) {
      modal.style.display = "block";
    }
  });
});

// Close modal when close button is clicked
document.querySelectorAll(".modal-close-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    closeModal(); // Close the modal
  });
});

// Optional: Close the modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModal();
  }
});
