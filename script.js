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