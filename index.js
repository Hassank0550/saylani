
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.style.backgroundColor = "#171e2e"; // Fully opaque
        navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)"; // Add shadow
    } else {
        navbar.style.backgroundColor = "#0F172A"; // Transparent
        navbar.style.boxShadow = "none"; // Remove shadow
    }
});

document.querySelector('.toggle-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.toggle-navbar-wrapper');
    navbar.classList.toggle('active');
  });