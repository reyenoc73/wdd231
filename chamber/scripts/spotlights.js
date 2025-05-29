document.addEventListener("DOMContentLoaded", () => {
  const spotlightContainer = document.getElementById("spotlightContainer");
  const filterDropdown = document.getElementById("membershipFilter");

  let allMembers = [];

  async function loadSpotlights() {
    try {
      const response = await fetch("data/members.json");
      const members = await response.json();

      // Keep only gold or silver members
      allMembers = members.filter(member =>
        member.membership === "Gold" || member.membership === "Silver"
      );

      updateSpotlights("all");
    } catch (error) {
      console.error("Error loading spotlight members:", error);
    }
  }

  function updateSpotlights(filter) {
    spotlightContainer.innerHTML = "";

    let filtered = allMembers;
    if (filter !== "all") {
      filtered = allMembers.filter(member => member.membership === filter);
    }

    // Shuffle and pick 2 or 3
    filtered.sort(() => 0.5 - Math.random());
    const selected = filtered.slice(0, 3);

    selected.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("spotlight-card");

      card.innerHTML = `
        <h3>${member.name}</h3>
        <img src="${member.logo}" alt="Logo of ${member.name}" loading="lazy">
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="membership ${member.membership.toLowerCase()}">${member.membership} Member</p>
      `;

      spotlightContainer.appendChild(card);
    });
  }

  filterDropdown.addEventListener("change", () => {
    updateSpotlights(filterDropdown.value);
  });

  loadSpotlights();
});
