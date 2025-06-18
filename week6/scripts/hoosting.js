
  document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("hosting-options");
  const confirmation = document.getElementById("confirmation");
  const form = document.getElementById("booking-form");
  const accommodationInput = document.getElementById("accommodation");


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

      document.querySelectorAll(".book-btn").forEach((button) => {
        button.addEventListener("click", () => {
          const title = button.getAttribute("data-title");
          accommodationInput.value = title;
          localStorage.setItem("selectedAccommodation", title);
          document.getElementById("booking-form").scrollIntoView({ behavior: "smooth" });
        });
      });
    });


  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = form.name.value;
      const email = form.email.value;
      const checkin = form.checkin.value;
      const checkout = form.checkout.value;
      const guests = form.guests.value;
      const accommodation = form.accommodation.value;

      const bookingData = {
        name,
        email,
        checkin,
        checkout,
        guests,
        accommodation
      };
      localStorage.setItem("bookingInfo", JSON.stringify(bookingData));

      confirmation.innerHTML = `
        <div class="card confirmation-box">
          ✅ <strong>Thank you, ${name}!</strong><br>
          Your booking for <strong>${accommodation}</strong><br>
          From <strong>${checkin}</strong> to <strong>${checkout}</strong><br>
          For <strong>${guests}</strong> guest(s)<br>
          A confirmation email will be sent to <strong>${email}</strong>.
        </div>
      `;

      form.reset();
      window.scrollTo({ top: confirmation.offsetTop, behavior: 'smooth' });
    });
  }
});
