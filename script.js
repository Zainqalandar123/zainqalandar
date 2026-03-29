const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// Close menu on nav click
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("show");
  });
});

// Active nav on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 120;
    const sectionId = section.getAttribute("id");

    const activeLink = document.querySelector('.navbar a[href*="' + sectionId + '"]');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      activeLink?.classList.add("active");
    } else {
      activeLink?.classList.remove("active");
    }
  });
});

// =========================
// Portfolio Filter Tabs
// =========================
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // active button change
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    portfolioCards.forEach(card => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});