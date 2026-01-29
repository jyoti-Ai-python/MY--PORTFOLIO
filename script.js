# script
// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email}.`);
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});