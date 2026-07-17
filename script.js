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