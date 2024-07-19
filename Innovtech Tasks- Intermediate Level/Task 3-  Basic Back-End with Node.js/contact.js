document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        try {
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            responseMessage.innerText = result.message;
            form.reset();
        } catch (error) {
            responseMessage.innerText = 'An error occurred. Please try again later.';
        }
    });
});
