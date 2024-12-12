window.onload = init;

function init() {
    const mymap = L.map('mapid', {
        center: [-3.78222, -38.5434], // Ajuste nas coordenadas para subir o mapa
        zoom: 12,
        layers: [
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    });
}