
// =========================================
// JUDY ANN NECESARIO
// PORTFOLIO JAVASCRIPT
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// MOBILE NAVIGATION

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("active");

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

  // Close menu after clicking a navigation link

  navMenu.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}


// SCROLL REVEAL ANIMATION

const animatedElements = document.querySelectorAll(
  ".section-heading, .service-card, .project-card, .skill-column, .timeline-item, .education-card"
);

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("reveal", "visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );

  animatedElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

  });

}


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}
