// Contador de tempo
let startDate = new Date('2022-01-01'); // Coloque a data que você quiser
let timerElement = document.getElementById('timer');

function updateTimer() {
    let now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    timerElement.textContent = `${days}d ${hours}h ${minutes}m`;
}

setInterval(updateTimer, 1000); // Atualiza o contador a cada segundo
