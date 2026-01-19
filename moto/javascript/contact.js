document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;

    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    if (service === "") {
      alert("Please select a service.");
      return;
    }

    alert(
      `Thank you, ${firstName}!\nYour message has been sent successfully.`
    );

  this.reset(); // clear form
});
