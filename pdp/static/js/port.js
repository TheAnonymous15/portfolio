const whatsappBtn = document.getElementById('whatsapp-btn');
const whatsappPanel = document.getElementById('whatsapp-panel');
const closeBtn = document.getElementById('close-btn');
const sendBtn = document.getElementById('send-btn');
const messageInput = document.getElementById('message-input');
const header = document.querySelector('.header'); // Define header
let lastScrollY = window.scrollY; // Initialize lastScrollY

whatsappBtn.addEventListener('click', () => {
    whatsappPanel.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    whatsappPanel.style.display = 'none';
});

sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        window.open(`https://wa.me/254726781724?text=${encodeURIComponent(message)}`, '_blank');
        messageInput.value = '';
        whatsappPanel.style.display = 'none';
    }
});

window.addEventListener('scroll', function () {
    if (window.scrollY > lastScrollY) {
        header.classList.add('hidden-header');
    } else {
        header.classList.remove('hidden-header');
    }
    lastScrollY = window.scrollY;
});
// Function to open the popup modal
function openPopup(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and set it inside the modal
    var img = event.target;
    var modalImg = document.getElementById("modalImg");

    modalImg.src = img.src; // Set the src of the modal image to the src of the clicked image

    // Show the modal
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
