
   document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hosting-options");
  const confirmation = document.getElementById("confirmation");
  const form = document.getElementById("booking-form");
  const accommodationInput = document.getElementById("accommodation");

  // Load hosting options
  fetch("data/hosting-options.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((place, index) => {
        const card = document.createElement("div");
        card.classList.add("hosting-card");

        card.innerHTML = `
          <img src="${place.image}" alt="${place.title}" class="hosting-img">
          <h3>${place.title}</h3>
          <p>${place.description}</p>
          <p><strong>${place.price}</strong></p>
          <button class="book-btn" data-title="${place.title}">Book Now</button>
        `;

        container.appendChild(card);
      });

      // Attach event listeners to "Book Now" buttons
      document.querySelectorAll(".book-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const title = button.getAttribute("data-title");
          accommodationInput.value = title;
          document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
        });
      });
    });

  // Handle form submission
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.name.value;
      const email = form.email.value;
      const checkin = form.checkin.value;
      const checkout = form.checkout.value;
      const guests = form.guests.value;
      const accommodation = form.accommodation.value;

      confirmation.innerHTML = `
        ✅ Thank you, <strong>${name}</strong>!<br>
        Your booking for <strong>${accommodation}</strong> from <strong>${checkin}</strong> to <strong>${checkout}</strong> 
        for <strong>${guests}</strong> guest(s) has been received.<br>
        A confirmation email will be sent to <strong>${email}</strong>.
      `;

      form.reset();
    });
  }
});
