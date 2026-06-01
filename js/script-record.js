// Espera a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const recordBtn = document.getElementById('record-btn');
    if (recordBtn) {
        recordBtn.addEventListener('click', grabaPantalla);
    }
});

async function grabaPantalla() {
    // Verificar si la API está disponible
    if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
        alert('La captura de pantalla no está disponible en este navegador o contexto.\nAsegúrate de usar HTTPS o localhost.');
        console.error('getDisplayMedia no soportado o contexto inseguro');
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
            audio: false
        });

        const video = document.createElement("video");
        video.srcObject = stream;
        video.autoplay = true;
        document.body.appendChild(video);

        // Opcional: detener la captura cuando el usuario cierre el selector nativo
        stream.getVideoTracks()[0].onended = () => {
            video.srcObject = null;
            video.remove();
        };
    } catch (error) {
        console.error('Error al capturar pantalla:', error);
        alert('No se pudo capturar la pantalla. Es posible que hayas cancelado el permiso.');
    }
}

// async function grabaPantalla() {
//     const stream = await navigator.mediaDevices.getDisplayMedia({
//         video: true,
//         audio: false
//     });
//         const video = document.createElement("video");
//         video.srcObject = stream;
//         video.autoplay = true;
//         // video.play();
//         // video.muted = true;
//         // video.style.display = 'none';
//         document.body.appendChild(video);
// }