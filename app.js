document.addEventListener("DOMContentLoaded", () => {
    // Interfaz del botón de Play interactivo de la radio
    const playBtn = document.getElementById('play-btn');
    const btnText = playBtn.querySelector('.btn-text');
    const btnIcon = playBtn.querySelector('.btn-icon');
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            btnText.textContent = "SINTONIZANDO...";
            btnIcon.textContent = "■";
            playBtn.style.animation = "pulse 1.5s infinite";
        } else {
            btnText.textContent = "ESCUCHAR LA VOZ GT";
            btnIcon.textContent = "▶";
            playBtn.style.animation = "none";
        }
    });

    // Logging para el framework radial simulado
    console.log("Grupo Radial Guatemala - Core Systems Loaded.");
    console.log("SEO Tags Initialized successfully.");
});

// Añadiendo una suave animación de "pulso" con JS injectado en estilos
const styleSheet = document.createElement("style")
styleSheet.innerText = `
@keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
}
`;
document.head.appendChild(styleSheet);
