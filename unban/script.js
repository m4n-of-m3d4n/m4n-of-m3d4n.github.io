(function() {
    emailjs.init("EVZcOVrAg0gIq_kvg"); 
})();

function inviaRichiesta(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        telegramNick: document.getElementById('telegramNick').value,
        telegramID: document.getElementById('telegramID').value,
        banReason: document.getElementById('banReason').value,
        unbanMotivation: document.getElementById('unbanMotivation').value,
        acceptance: document.getElementById('acceptance').checked ? 'Accettato' : 'Non accettato'
    };

    emailjs.send('service_0nknsu3', 'template_vjsu17k', formData)
        .then(function(response) {
            alert('Email inviata con successo!');
        }, function(error) {
            alert('Errore durante l\'invio dell\'email: ' + JSON.stringify(error));
        });
}

document.getElementById('unbanForm').addEventListener('submit', inviaRichiesta);