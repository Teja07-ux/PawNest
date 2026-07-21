const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }else{
        menuToggle.innerHTML = "☰";
    }
});

// Close mobile menu after clicking a navigation link
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.innerHTML = "☰";

    });

});

// WhatsApp tooltip animation

const whatsappTooltip = document.querySelector(".whatsapp-tooltip");

setTimeout(() => {

    whatsappTooltip.style.opacity = "1";
    whatsappTooltip.style.visibility = "visible";

    setTimeout(() => {

        whatsappTooltip.style.opacity = "0";
        whatsappTooltip.style.visibility = "hidden";

    }, 8000);

}, 3000);

// FAQ Accordion

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const faqItem = question.parentElement;
        const answer = faqItem.querySelector(".faq-answer");

        // Close all other FAQs
        document.querySelectorAll(".faq-item").forEach(item => {

            if(item !== faqItem){

                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        // Toggle current FAQ
        if(faqItem.classList.contains("active")){

            faqItem.classList.remove("active");
            answer.style.maxHeight = null;

        }else{

            faqItem.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";

        }

    });

});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dogName = document.getElementById("dogName").value;
    const breed = document.getElementById("breed").value;
    const dates = document.getElementById("dates").value;
    const notes = document.getElementById("notes").value;

    const contactMethod = document.querySelector(
        'input[name="contact"]:checked'
    ).value;

    const message =
`Hi! 👋

I'd like to check boarding availability.

👤 Name: ${name}

📞 Phone: ${phone}

🐶 Dog's Name: ${dogName}

🐾 Breed: ${breed}

📅 Preferred Dates: ${dates}

📝 Additional Information:
${notes}`;

    if(contactMethod === "whatsapp"){

        const whatsapp =
`https://wa.me/918074480396?text=${encodeURIComponent(message)}`;

        window.open(whatsapp, "_blank");

    }else{

        const subject =
encodeURIComponent("PawNest Boarding Enquiry");

        const body =
encodeURIComponent(message);

        window.location.href =
`mailto:bookings.pawnest@gmail.com?subject=${subject}&body=${body}`;

    }

});

const bookBtn = document.getElementById("bookBtn");

if (bookBtn) {
    bookBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const navbar = document.querySelector(".navbar");

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    // Shadow
    if (currentScrollY > 20) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Hide when scrolling down
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add("hide");
    }

    // Show when scrolling up
    if (currentScrollY < lastScrollY) {
        navbar.classList.remove("hide");
    }

    lastScrollY = currentScrollY;

});

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("active");

            const items = section.querySelectorAll(".reveal-item");

            items.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add("active");

                },index*150);

            });

        }

    });

}

window.addEventListener("scroll",revealSections);
window.addEventListener("load",revealSections);

// Loading Screen

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1000);

});