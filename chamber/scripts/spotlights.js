document.addEventListener("DOMContentLoaded", () => {
  const spotlightContainer = document.getElementById("spotlightContainer");

  fetch("data/members.json")
    .then(response => response.json())
    .then(data => {
      // Filter gold/silver members
      const goldSilver = data.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
      );

      // Shuffle and select 2 or 3 randomly
      const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

      // Display cards
      selected.forEach(member => {
        const card = document.createElement("div");
        card.className = "empresa";

        card.innerHTML = `
          <h3>${member.name}</h3>
          <img src="${member.logo}" alt="${member.name} logo" style="width:100%; max-height:150px; object-fit:contain; margin:1rem 0;">
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Membership:</strong> ${member.membership}</p>
          <a href="${member.website}" target="_blank">${member.website}</a>
        `;

        spotlightContainer.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading member data:", error);
      spotlightContainer.innerHTML = "<p>Unable to load spotlight members.</p>";
    });
});
