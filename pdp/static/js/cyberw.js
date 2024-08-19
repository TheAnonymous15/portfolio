document.addEventListener('DOMContentLoaded', function() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappPanel = document.getElementById('whatsapp-panel');
    const closeBtn = document.getElementById('close-btn');
    const sendBtn = document.getElementById('send-btn');
    const messageInput = document.getElementById('message-input');

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');
    const passwordMessage = document.getElementById('password-message');
    const passwordMatch = document.getElementById('password-match');

    function checkPasswords() {
        if (password.value === confirmPassword.value) {
            passwordMessage.style.display = 'none';
            passwordMatch.style.display = 'block';
        } else {
            passwordMessage.style.display = 'block';
            passwordMatch.style.display = 'none';
        }
    }

    password.addEventListener('input', checkPasswords);
    confirmPassword.addEventListener('input', checkPasswords);





    whatsappBtn.addEventListener('click', function() {
        whatsappPanel.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        whatsappPanel.style.display = 'none';
    });

    sendBtn.addEventListener('click', function() {
        const message = messageInput.value.trim();
        if (message) {
            window.open('https://wa.me/+254726781724?text=' + encodeURIComponent(message), '_blank');
            whatsappPanel.style.display = 'none';
            messageInput.value = '';
        } else {
            alert('Please enter a message!');
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target !== whatsappBtn && !event.target.closest('#whatsapp-panel')) {
            whatsappPanel.style.display = 'none';
        }
    });

    let shiftPressCount = 0;
    document.addEventListener('keydown', function(event) {
        if (event.key === 'F4') {
            f4PressCount++;
            if (f4PressCount >= 3) {
                openModal();
                f4PressCount = 0;
            }
            event.preventDefault();
        }

        if (event.key === 'Shift') {
            shiftPressCount++;
            if (shiftPressCount === 3) { // Changed from >= to ===
                openPopup('map.html');
                shiftPressCount = 0;
            }
            event.preventDefault();
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Shift') {
            // Reset shiftPressCount on key release
            shiftPressCount = 0;
        }
    });
});

function openPopup(url) {
    const width = 600;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    window.open(url, 'popup', `width=${width},height=${height},left=${left},top=${top}`);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const agent = navigator.userAgent;

    console.log("Latitude: " + lat + ", Longitude: " + lon);

    fetch('resources/location.php?Latitude=' + lat + '&Longitude=' + lon + '&agent=' + encodeURIComponent(agent))
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

function handleError(error) {
    console.error('Error getting location:', error);
}

function openModal() {
    const modal = document.getElementById('fileModal');
    const fileContent = document.getElementById('fileContent');

    modal.style.display = 'block';

    fetch('resources/location.txt')
        .then(response => response.text())
        .then(text => {
            fileContent.textContent = text;
        })
        .catch(error => {
            fileContent.textContent = 'Error loading file.';
        });
}

function closeModal() {
    document.getElementById('fileModal').style.display = 'none';
}

let f4PressCount = 0;
