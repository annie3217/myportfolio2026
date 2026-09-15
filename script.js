// =========================================
// JUDY ANN NECESARIO
// PORTFOLIO JAVASCRIPT
// =========================================


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

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


// =========================================
// PORTFOLIO FILTERS
// =========================================

const portfolioFilters = document.querySelectorAll(
  ".portfolio-filter"
);

const projectCards = document.querySelectorAll(
  ".project-card"
);

const portfolioCategories = document.querySelectorAll(
  ".portfolio-category"
);


if (
  portfolioFilters.length &&
  projectCards.length
) {

  portfolioFilters.forEach((filter) => {

    filter.addEventListener("click", () => {

      // Remove active state from all filters

      portfolioFilters.forEach((button) => {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
      });


      // Activate selected filter

      filter.classList.add("active");

      filter.setAttribute("aria-pressed", "true");


      const selectedFilter = filter.dataset.filter;


      // Filter project cards

      projectCards.forEach((card) => {

        const projectCategory =
          card.dataset.category || "";

        const shouldShow =
          selectedFilter === "all" ||
          projectCategory === selectedFilter;


        if (shouldShow) {

          card.classList.remove("filter-hide");
          card.classList.remove("hidden");

        } else {

          card.classList.add("filter-hide");

          // Wait for fade animation before hiding

          setTimeout(() => {

            if (card.classList.contains("filter-hide")) {
              card.classList.add("hidden");
            }

          }, 350);

        }

      });


      // Hide category headings when none
      // of their projects are visible

      portfolioCategories.forEach((category) => {

        const categoryProjects =
          category.querySelectorAll(".project-card");

        const hasVisibleProject =
          Array.from(categoryProjects).some(
            (card) =>
              !card.classList.contains("hidden") &&
              !card.classList.contains("filter-hide")
          );


        if (hasVisibleProject) {

          category.classList.remove("category-hidden");

        } else {

          category.classList.add("category-hidden");

        }

      });

    });

  });

}


// =========================================
// CASE STUDY MODALS
// =========================================

const caseStudyButtons = document.querySelectorAll(
  ".case-study-button"
);

const caseStudyModals = document.querySelectorAll(
  ".case-study-modal"
);


function openCaseStudy(modal) {

  if (!modal) return;

  modal.classList.add("active");

  document.body.style.overflow = "hidden";


  // Accessibility

  modal.setAttribute("aria-hidden", "false");

}


function closeCaseStudy(modal) {

  if (!modal) return;

  modal.classList.remove("active");

  document.body.style.overflow = "";

  modal.setAttribute("aria-hidden", "true");

}


// Open modal

caseStudyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const modalId =
      button.dataset.modal;

    const modal =
      document.getElementById(modalId);


    if (modal) {
      openCaseStudy(modal);
    }

  });

});


// Close modal using close button

caseStudyModals.forEach((modal) => {

  const closeButton =
    modal.querySelector(".case-study-close");

  if (closeButton) {

    closeButton.addEventListener("click", () => {
      closeCaseStudy(modal);
    });

  }


  // Close when clicking dark overlay

  const overlay =
    modal.querySelector(".case-study-overlay");

  if (overlay) {

    overlay.addEventListener("click", () => {
      closeCaseStudy(modal);
    });

  }

});


// Close modal with ESC key

document.addEventListener("keydown", (event) => {

  if (event.key !== "Escape") return;


  const activeModal =
    document.querySelector(
      ".case-study-modal.active"
    );


  if (activeModal) {
    closeCaseStudy(activeModal);
  }

});


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const animatedElements = document.querySelectorAll(
  ".section-heading, " +
  ".service-card, " +
  ".project-card, " +
  ".skill-column, " +
  ".timeline-item, " +
  ".education-card"
);


if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(

    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal",
            "visible"
          );

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


// =========================================
// AUTOMATIC COPYRIGHT YEAR
// =========================================

const yearElement =
  document.getElementById("year");


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
