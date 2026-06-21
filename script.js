// ==============================
// Back To Top Button
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


// ==============================
// Dark Mode
// ==============================

const themeBtn = document.getElementById("themeBtn");

// Load saved theme

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";

}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");
        themeBtn.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");
        themeBtn.textContent = "🌙";

    }

});


// ==============================
// Hero Button Smooth Scroll
// ==============================

const primaryBtn = document.querySelector(".primary-btn");

if (primaryBtn) {

    primaryBtn.addEventListener("click", () => {

        document
            .getElementById("contact")
            .scrollIntoView({

                behavior: "smooth"

            });

    });

}


// ==============================
// Contact Form Validation
// ==============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document
        .getElementById("name")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const subject = document
        .getElementById("subject")
        .value
        .trim();

    const message = document
        .getElementById("message")
        .value
        .trim();

    if (name === "") {

        alert("Please enter your name.");
        return;

    }

    if (email === "") {

        alert("Please enter your email.");
        return;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");
        return;

    }

    if (subject === "") {

        alert("Please enter a subject.");
        return;

    }

    if (message.length < 20) {

        alert("Message must contain at least 20 characters.");
        return;

    }

    fetch(
    "http://localhost:5000/api/contact",
    {
        method: "POST",

        headers: {
            "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

            name,
            email,
            subject,
            message

        })

    }
)
.then((res) => res.json())

.then((data) => {

    alert(data.message);

    contactForm.reset();

})

.catch((error) => {

    console.log(error);

});

    contactForm.reset();

});


// ==============================
// Navbar Active Link
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});