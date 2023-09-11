document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    formData.append("recipient", "markdmy@hotmail.com");

    fetch("your-server-script-url.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully!");
          contactForm.reset();
        } else {
          alert("Message failed to send. Please try again later.");
        }
        
        // Redirect to a new page after form submission (whether success or error)
        window.location.href = "contactsubmit.html"; // Change "result.html" to the desired page
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
        
        // Redirect to a new page after an error
        window.location.href = "contactsubmit.html"; // Change "error.html" to the desired error page
      });
  });
});