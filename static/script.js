document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inputForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const userInput = document.getElementById('userInput').value;

        // AJAX-Anfrage an den Server senden
        fetch('/submit', {
            method: 'POST',
            body: new URLSearchParams({
                user_input: userInput
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.text())
        .then(data => {
            responseDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
