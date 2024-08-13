document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    const chatbotToggle = document.querySelector('#chatbotToggle');
    const chatbot = document.querySelector('#chatbot');
    
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('active');
        if (chatbot.classList.contains('active')) {
            // Ensure the chatbot scrolls to the bottom when opened
            const chatBody = document.querySelector('#chatbot-body');
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    });

    const sendMessageButton = document.querySelector('#sendMessage');
    const chatInput = document.querySelector('#chatInput');
    const chatBody = document.querySelector('#chatbot-body');

    sendMessageButton.addEventListener('click', async () => {
        const userMessage = chatInput.value;
        if (userMessage.trim() !== '') {
            // Display user message
            const userMessageElem = document.createElement('div');
            userMessageElem.classList.add('message', 'user');
            userMessageElem.innerHTML = <p>${userMessage}</p>;
            chatBody.appendChild(userMessageElem);
            
            // Clear input field
            chatInput.value = '';

            // Fetch bot response from Gradio API
            try {
                const response = await fetch('YOUR_GRADIO_API_URL', { // Replace with your Gradio API URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ message: userMessage }),
                });

                const data = await response.json();
                const botResponse = data.response; // Adjust based on your API response structure

                // Display bot response
                const botResponseElem = document.createElement('div');
                botResponseElem.classList.add('message', 'bot');
                botResponseElem.innerHTML = <p>${botResponse}</p>;
                chatBody.appendChild(botResponseElem);

                // Scroll to bottom
                chatBody.scrollTop = chatBody.scrollHeight;
            } catch (error) {
                console.error('Error fetching response:', error);
            }
        }
    });


    // scripts.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Valid email is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Valid phone number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        document.getElementById('messageError').style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});
});
