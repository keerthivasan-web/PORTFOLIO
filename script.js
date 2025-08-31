function toggleCertificates() {
  let container = document.getElementById('certificates');
  let btn = document.getElementById('btnID');

  if (container.style.display === "none" || container.style.display === "") {
    container.style.display = "block";
    btn.textContent = "Hide Certificates";
  } else {
    container.style.display = "none";
    btn.textContent = "Show Certificates";
  }
}


// ✅ Initialize EmailJS
(function() {
    emailjs.init("u5906poHplw-ynCZK"); // your Public Key
})();

// ✅ Attach form submit listener
window.onload = function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        // Send email
        emailjs.sendForm("service_llxl935", "template_2d0dr86", this)
            .then(function () {
                alert("✅ Message Sent Successfully!");
            }, function (error) {
                alert("❌ Failed to send message. Error: " + JSON.stringify(error));
            });
    });
};


