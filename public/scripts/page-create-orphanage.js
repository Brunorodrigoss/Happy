const map = L.map('mapid').setView([-27.222637,-49.6449961], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;
let latitude;
let longitude;

// create and add marker
map.on('click',(event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // remove icon
    marker && map.removeLayer(marker)
    latitude = "";
    longitude = "";

    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);

    latitude = lat;
    longitude = lng;
});

// add field photos
function addPhotoField() {
    const container = document.querySelector('#images');

    const fieldsContainer = document.querySelectorAll('.new-upload');

    const newFieldsContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    const input = newFieldsContainer.children[0];

    if(input.value == "") {
        return;
    }

    input.value = ""

    container.appendChild(newFieldsContainer)


}

// delete field photos
function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = "";
        return;
    }

    span.parentNode.remove();
}

// select yes or no
function toggleSelect(event) {
    document.querySelectorAll('.button-select button').forEach((button) => {
        button.classList.remove('active');
    });

    const button = event.currentTarget;
    button.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
}

function validate(event) {
    lat = document.querySelector('[name="lat"]').value;
    lng = document.querySelector('[name="lng"]').value;
    
    if(lat == "" || lng == "") {
        event.preventDefault()
        alert('Selecione o ponto no mapa referente ao orfanato')
    }
    
}