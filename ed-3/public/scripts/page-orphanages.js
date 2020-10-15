const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

const map = L.map('mapid').setView([-19.9901882, -43.8731629], 21);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
).addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das crianças <a href="orphanage.html?id=1" class="choose-orphanage" <img src="./public/images/arrow-white.svg" ></a>')


L
.marker([-19.9901882, -43.8731629], {icon}) 
.addTo(map)

function selectImage(event) {
    const button = event.currentTarget
    const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActiveClass)
    
    function removeActiveClass(button) {
        button.classList.remove('active');
        }
    
        const image = button.children[0]
        const imageContainer = document.querySelector('.orphanage-details > img')
    
        imageContainer.src = image.src
    
        button.classList.add('active')
    }