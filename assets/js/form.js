document.getElementById("contact-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form from redirecting

    var form = event.target;
    var formStatus = document.getElementById("form-status");
    
    // Create FormData object
    var formData = new FormData(form);

    // Send the form data using fetch API
    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(function(response) {
        if (response.ok) {
            formStatus.style.display = "block"; // Show thank you message
            form.reset(); // Reset the form
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(function(error) {
        alert("There was a problem submitting your form. Please try again.");
    });
});
