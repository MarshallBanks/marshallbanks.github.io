document.addEventListener("DOMContentLoaded", function() {
    // Modal elements
    var modal = document.getElementById("success-modal");
    var modalContent = document.querySelector(".modal-content");
    var closeButton = document.querySelector(".close-button");

    // Function to hide the modal with animation
    function closeModal() {
        modalContent.classList.add("slide-out"); // Add the slide-out class
        modalContent.addEventListener("animationend", function() {
            modal.style.display = "none"; // Hide the modal
            modalContent.classList.remove("slide-out"); // Clean up the slide-out class
        }, { once: true }); // Ensure the listener is only called once
    }
    
    // Close the modal when clicking the "X"
    closeButton.addEventListener("click", function() {
        closeModal();
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) { // Only trigger if clicked on the modal (background)
            closeModal();
        }
    });
})    


// TEST SUBMIT BUTTON CODE
/* document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from redirecting

    // Bypass the response check for testing
    var modal = document.getElementById("success-modal");
    var modalContent = document.querySelector(".modal-content");

    // Directly show the modal with the slide-in animation
    modal.style.display = "flex"; // Show modal
    modalContent.classList.add("slide-in"); // Trigger slide-in animation

    // Remove the slide-in class after animation ends
    modalContent.addEventListener("animationend", function() {
        modalContent.classList.remove("slide-in"); // Remove the slide-in class for next time
    }, { once: true }); // Ensure the listener is only called once

    // Reset the form (optional, for testing purposes)
    event.target.reset();
}); */

document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from redirecting

    var form = event.target;    
    var formData = new FormData(form);
    var formspreeURL = "https://formspree.io/f/manyydrp";
    var modal = document.getElementById("success-modal");
    var modalContent = document.querySelector(".modal-content");


    // Send the form data using fetch API
    fetch(formspreeURL, {
        method: "POST", 
        mode: "no-cors",
        body: formData
    }).then(function(response) {
        if (response.ok) {
            // Directly show the modal with the slide-in animation
            modal.style.display = "flex"; // Show modal
            modalContent.classList.add("slide-in"); // Trigger slide-in animation

            // Remove the slide-in class after animation ends
            modalContent.addEventListener("animationend", function() {
            modalContent.classList.remove("slide-in"); // Remove the slide-in class for next time
            }, { once: true }); // Ensure the listener is only called once

            form.reset(); // Reset the form
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(function(error) {
        alert("There was a problem submitting your form. Please try again.");
    });
});
