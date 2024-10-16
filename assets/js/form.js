document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from redirecting

    var form = event.target;    
    var formData = new FormData(form);
    var formspreeURL = "https://formspree.io/f/manyydrp";

    // Modal elements
    var modal = document.getElementById("success-modal");
    var closeButton = document.querySelector(".close-button")

    // Send the form data using fetch API
    fetch(formspreeURL, {
        method: "POST", 
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        if (response.ok) {
            // Show the modal
            modal.style.display = "flex"; // Make modal visible
            form.reset(); // Reset the form
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(function(error) {
        //console.error("Error details:", error);
        alert("There was a problem submitting your form. Please try again.");
    });

    // Close the modal when clicking the "X"
    closeButton.addEventListener("click", function() {
        modal.style.display = "none"; // Hide the modal
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function() {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    })
});

