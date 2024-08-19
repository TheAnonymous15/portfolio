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
