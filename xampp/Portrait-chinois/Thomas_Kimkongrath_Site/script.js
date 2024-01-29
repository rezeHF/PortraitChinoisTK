function updateParallax() {
  const parallaxSections = document.querySelectorAll(".parallax");

  parallaxSections.forEach((section) => {
    const scrollPosition = window.scrollY;
    const sectionOffset = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionSpeed = section.dataset.speed;

    let parallaxEffect = (scrollPosition - sectionOffset) * sectionSpeed;

    section.style.transform = `translateY(-${parallaxEffect}px)`;
  });
}

window.addEventListener("scroll", updateParallax);

window.addEventListener("load", updateParallax);

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");

document
  .querySelectorAll(
    '[id^="manga"], [id^="film"], [id^="instrument"], [id^="musique"], [id^="jeu"], [id^="personnage"], [id^="application"]'
  )
  .forEach((title) => {
    title.addEventListener("click", function () {
      const sectionId = title.parentElement.id;
      const section = document.getElementById(sectionId);
      const sectionTitle = section.querySelector("h2");
      const sectionContent = section.querySelector("p");
      const sectionImage = section.querySelector("img");

      openLegalNotice(
        sectionTitle.innerText,
        sectionContent.innerText,
        sectionImage.src
      );
    });
  });

function activateArrow() {
  document.getElementById("top").scrollIntoView({
    behavior: "smooth",
  });
}

function toggleArrowVisibility() {
  const arrowContainer = document.getElementById("arrowContainer");
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const scrollPosition = window.scrollY;

  const lastSection = document.querySelector("section:last-child");
  const lastSectionPosition = lastSection.offsetTop + lastSection.offsetHeight;

  if (scrollPosition > lastSectionPosition - windowHeight) {
    arrowContainer.style.display = "block";
  } else {
    arrowContainer.style.display = "none";
  }
}

window.addEventListener("scroll", toggleArrowVisibility);
window.addEventListener("load", toggleArrowVisibility);

function openLegalNotice(event) {
  event.preventDefault();
  const legalNotice = document.getElementById("legalNotice");
  legalNotice.style.display = "block";
}

function closeLegalNotice() {
  const legalNotice = document.getElementById("legalNotice");
  legalNotice.style.display = "none";
}
