document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("membersContainer");
  const gridViewBtn = document.getElementById("gridView");
  const listViewBtn = document.getElementById("listView");

  async function fetchMembers() {
    try {
      const response = await fetch("data/members.json");
      const members = await response.json();
      displayMembers(members);
    } catch (error) {
      console.error("Error fetching member data:", error);
      container.innerHTML = "<p>Error loading directory.</p>";
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach((member) => {
      const div = document.createElement("div");
      div.className = "empresa";
      div.innerHTML = `
        <h3>${member.name}</h3>
        <p><strong>Sector:</strong> ${member.sector}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
      `;
      container.appendChild(div);
    });
  }

  function toggleView(view) {
    container.className = view;
    gridViewBtn.classList.toggle("active", view === "grid");
    listViewBtn.classList.toggle("active", view === "list");
  }

  gridViewBtn.addEventListener("click", () => toggleView("grid"));
  listViewBtn.addEventListener("click", () => toggleView("list"));

  fetchMembers();
  document.addEventListener("DOMContentLoaded", () => {
  const lastModified = document.lastModified;
  const modifiedElement = document.getElementById("lastModified");
  if (modifiedElement) {
    modifiedElement.textContent = `Last Modification: ${lastModified}`;
  }
});

});