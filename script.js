// ::::: MENU SHOW Y HIDDEN
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

//  SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//  HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

// REMOVE MENU
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//  Typing Animation
document.addEventListener("DOMContentLoaded", () => {
  const professionSpan = document.querySelector(".home_profession");
  const professionText = "Frontend Developer";
  const typingSpeed = 150; // Adjust the typing speed here (lower value for faster typing)
  const eraseSpeed = 90; // Adjust the erase speed here (lower value for faster erasing)

  function typeText() {
    let charIndex = 0;
    let typingInterval = setInterval(() => {
      if (charIndex < professionText.length) {
        professionSpan.textContent += professionText.charAt(charIndex);
        charIndex++;
        console.log(professionText);
      } else {
        clearInterval(typingInterval);
        setTimeout(eraseText, 1000); // Add a pause before erasing the text
      }
    }, typingSpeed);
  }

  function eraseText() {
    let charIndex = professionText.length - 1;
    let eraseInterval = setInterval(function () {
      if (charIndex >= 0) {
        professionSpan.textContent = professionSpan.textContent.slice(
          0,
          charIndex
        );
        charIndex--;
      } else {
        clearInterval(eraseInterval);
        setTimeout(typeText, 500); // Add a pause before typing again
      }
    }, eraseSpeed);
  }

  typeText();
});

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
