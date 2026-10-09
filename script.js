document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

if (menuButton && navigation) {
  const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')]
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter(({ section }) => section);
  let scrollUpdateScheduled = false;

  const updateActiveLink = () => {
    const header = document.querySelector(".site-header");
    const activationPoint = window.scrollY + (header?.offsetHeight ?? 0) + 24;
    const activeSection = sectionLinks
      .filter(({ section }) => section.offsetTop <= activationPoint)
      .at(-1)?.section;

    for (const { link, section } of sectionLinks) {
      if (section === activeSection) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    }
  };

  const scheduleActiveLinkUpdate = () => {
    if (scrollUpdateScheduled) return;
    scrollUpdateScheduled = true;
    window.requestAnimationFrame(() => {
      updateActiveLink();
      scrollUpdateScheduled = false;
    });
  };

  window.addEventListener("scroll", scheduleActiveLinkUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveLinkUpdate);
  updateActiveLink();

  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  };

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    navigation.classList.toggle("is-open", !isExpanded);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menuButton.focus();
    }
  });
}

const copyrightYear = document.querySelector("#copyright-year");
if (copyrightYear) {
  copyrightYear.textContent = String(new Date().getFullYear());
}
