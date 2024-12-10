const toggleButton = document.getElementById("closes");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

const toggleElements = document.querySelectorAll(".toggle");

toggleButton.addEventListener("click", () => {
  // Toggle visibility of menu and close icons
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");

  // Add rotation effect
  menuIcon.classList.toggle("rotate-180");
  closeIcon.classList.toggle("rotate-180");

  // Toggle visibility of the navigation links
  toggleElements.forEach((element) => {
    element.classList.toggle("hidden");
  });
});
