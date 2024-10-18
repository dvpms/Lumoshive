document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = {
    to: "devranmalik82@gmail.com",
    name: document.querySelector('input[name="name"]').value,
    subject: document.querySelector('input[name="subject"]').value,
    text: document.querySelector('textarea[name="message"]').value,
  };

  fetch("https://lumoshive-academy-email-api.vercel.app/send-email", {
    method: "POST",
    headers: {
      "x-api-key": "RJS1-202404",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(formData),
  })
  .then((response) => response.json())
  .then((data) => {
      document.getElementById("contact-form").reset();
      Swal.fire("Sending Success");
  })
  .catch((error) => {
    console.error("Error:", error);
  })
});
