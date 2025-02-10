
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,

});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".contact__button").addEventListener("click", sendEmail);
});

function sendEmail() {
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userMessage = document.getElementById("userMessage").value;

    if (userName === "" || userEmail === "" || userMessage === "") {
        alert("Please fill out all fields before submitting.");
        return;
    }

    emailjs.send("your_service_id", "your_template_id", {
        from_name: userName,
        from_email: userEmail,
        message: userMessage,
    }, "satyamrao708432@gmail.com")
    .then(response => {
        alert("Email sent successfully!");
        console.log("Success:", response);
        document.querySelector(".contact__form").reset();
    })
    .catch(error => {
        alert("Failed to send email. Please try again later.");
        console.log("Error:", error);
    });
}



// Toggle chat visibility
function toggleChat() {
    const chat = document.querySelector(".chatbot");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

// Handle sending messages
function sendMessage() {
    let input = document.getElementById("chatInput");
    let chatBody = document.getElementById("chatBody");
    let userMessage = input.value.trim();

    if (userMessage !== "") {
        // Display user message
        let userMsgElement = document.createElement("p");
        userMsgElement.textContent = userMessage;
        userMsgElement.classList.add("user-message");
        chatBody.appendChild(userMsgElement);

        // Get bot response
        let botResponse = getBotResponse(userMessage);

        // Display bot message after delay
        setTimeout(() => {
            let botMsgElement = document.createElement("p");
            botMsgElement.textContent = botResponse;
            botMsgElement.classList.add("bot-message");
            chatBody.appendChild(botMsgElement);
            chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll
        }, 500);

        // Clear input
        input.value = "";
    }
}

// Predefined bot responses
function getBotResponse(message) {
    let msg = message.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
        return "Hello! How can I help you?";
    } else if (msg.includes("how are you")) {
        return "I'm just a bot, but I'm doing great! 😊";
    } else if (msg.includes("time")) {
        return `The current time is ${new Date().toLocaleTimeString()}`;
    } else if (msg.includes("your name")) {
        return "I'm a simple chatbot!";
    } else {
        return "I'm not sure how to respond to that. Try asking something else!";
    }
}

// Handle enter key
function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}


sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
