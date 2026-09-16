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
// SUPPORTS MULTIPLE CATEGORIES
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


// -----------------------------------------
// UPDATE PORTFOLIO
// -----------------------------------------

function updatePortfolio(selectedFilter) {

  portfolioCategories.forEach((category) => {

    const categoryProjects =
      category.querySelectorAll(".project-card");

    let hasVisibleProject = false;


    categoryProjects.forEach((card) => {

      // Get all categories from data-category
      //
      // Example:
      // data-category="reporting systems"
      //
      // becomes:
      // ["reporting", "systems"]

      const categories =
        (card.dataset.category || "")
          .toLowerCase()
          .split(/\s+/)
          .filter(Boolean);


      // Show everything when "all" is selected
      // Otherwise check if the selected filter
      // exists inside the card's categories

      const shouldShow =
        selectedFilter === "all" ||
        categories.includes(selectedFilter);


      // -----------------------------------------
      // SHOW PROJECT
      // -----------------------------------------

      if (shouldShow) {

        card.classList.remove("hidden");
        card.classList.remove("filter-hide");

        hasVisibleProject = true;

      }


      // -----------------------------------------
      // HIDE PROJECT
      // -----------------------------------------

      else {

        card.classList.add("filter-hide");
        card.classList.add("hidden");

      }

    });


    // -----------------------------------------
    // SHOW / HIDE PORTFOLIO CATEGORY
    // -----------------------------------------

    if (hasVisibleProject) {

      category.classList.remove(
        "category-hidden"
      );

    } else {

      category.classList.add(
        "category-hidden"
      );

    }

  });

}


// -----------------------------------------
// PORTFOLIO FILTER BUTTONS
// -----------------------------------------

if (portfolioFilters.length && projectCards.length) {

  portfolioFilters.forEach((filter) => {

    filter.addEventListener("click", () => {

      // -----------------------------------------
      // ACTIVE FILTER BUTTON
      // -----------------------------------------

      portfolioFilters.forEach((button) => {

        const isActive =
          button === filter;

        button.classList.toggle(
          "active",
          isActive
        );

        button.setAttribute(
          "aria-pressed",
          String(isActive)
        );

      });


      // -----------------------------------------
      // GET SELECTED FILTER
      // -----------------------------------------

      const selectedFilter =
        (filter.dataset.filter || "all")
          .toLowerCase();


      // -----------------------------------------
      // UPDATE PORTFOLIO
      // -----------------------------------------

      updatePortfolio(
        selectedFilter
      );

    });

  });


  // -----------------------------------------
  // INITIAL PORTFOLIO STATE
  // -----------------------------------------

  updatePortfolio("all");

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


// -----------------------------------------
// OPEN MODAL
// -----------------------------------------

function openCaseStudy(modal) {

  if (!modal) return;

  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow = "hidden";

}


// -----------------------------------------
// CLOSE MODAL
// -----------------------------------------

function closeCaseStudy(modal) {

  if (!modal) return;

  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow = "";

}


// -----------------------------------------
// CASE STUDY BUTTONS
// -----------------------------------------

caseStudyButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const modalId =
      button.dataset.modal;

    const modal =
      document.getElementById(modalId);


    if (modal) {

      openCaseStudy(modal);

    } else {

      console.warn(
        `Case study modal "${modalId}" was not found.`
      );

    }

  });

});


// -----------------------------------------
// CLOSE BUTTON + OVERLAY
// -----------------------------------------

caseStudyModals.forEach((modal) => {

  const closeButton =
    modal.querySelector(".case-study-close");


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      () => {
        closeCaseStudy(modal);
      }
    );

  }


  const overlay =
    modal.querySelector(".case-study-overlay");


  if (overlay) {

    overlay.addEventListener(
      "click",
      () => {
        closeCaseStudy(modal);
      }
    );

  }

});


// -----------------------------------------
// CLOSE MODAL WITH ESC KEY
// -----------------------------------------

document.addEventListener(
  "keydown",
  (event) => {

    if (event.key !== "Escape") return;


    const activeModal =
      document.querySelector(
        ".case-study-modal.active"
      );


    if (activeModal) {

      closeCaseStudy(activeModal);

    }

  }
);


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const animatedElements =
  document.querySelectorAll(
    ".section-heading, " +
    ".service-card, " +
    ".project-card, " +
    ".skill-column, " +
    ".timeline-item, " +
    ".education-card"
  );


if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(

      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "reveal",
              "visible"
            );

            observer.unobserve(
              entry.target
            );

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
