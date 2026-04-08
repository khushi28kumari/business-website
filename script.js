// ✅ Smooth Scroll for Menu
document.querySelectorAll(".menu div").forEach(item => {
    item.addEventListener("click", () => {
        const sectionName = item.className.toLowerCase();
        const section = document.querySelector("." + sectionName);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ✅ Get Started Button Scroll to Contact
let contact = document.querySelector(".contact");
document.getElementById("button").addEventListener("click", () => {
    contact.scrollIntoView({
        behavior: "smooth"
    });
});

// ✅ Form Submit Alert
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;

    if (name === "" || email === "") {
        alert("Please fill all required fields!");
    } else {
        alert("Thank you! Your message has been sent.");
        this.reset();
    }
});


// ✅ Simple Fade-in Animation on Scroll
const sections = document.querySelectorAll(".ourr, .cont, .iconlist");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const boxTop = sec.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            sec.style.opacity = "1";
            sec.style.transform = "translateY(0)";
        } else {
            sec.style.opacity = "0";
            sec.style.transform = "translateY(50px)";
        }
    });
});