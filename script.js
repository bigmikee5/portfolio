// ::::: MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

//  SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//  HIDDEN
toggleMenu.addEventListener("click", () => {
  closeMenu.classList.remove("show");
});

// REMOVE MENU
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SCROLL SECTIONS ACTIVE LINK
// const sections = document.querySelectorAll("section[id]");

// window.addEventListener("scroll", scrollActive);

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach((current) => {
//     const sectionHeight = current.OffsetHeight;
//     const sectionTop = current.OffsetTop - 50;
//     sectionId = current.getAttribute("id");

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector(".nav_menu a[href*=" + sectionId + "]")
//         .classList.add("active");
//     } else {
//       document
//         .querySelector(".nav_menu a[href*=" + sectionId + "]")
//         .classList.remove("active");
//     }
//   });
// }

// CONTACT SECTION
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact_form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const projectInput = document.getElementById("project");
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("submit");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Fetch form data
    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      project: projectInput.value,
      message: messageInput.value,
    };

    // You can use this data to perform an AJAX request to a server-side script for further processing

    // For now, let's just log the data to the console
    console.log("Form Data:", formData);

    // Clear form fields after submitting
    nameInput.value = "";
    emailInput.value = "";
    projectInput.value = "";
    messageInput.value = "";

    alert("Message sent successfully!");
  });
});
