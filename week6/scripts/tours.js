
    document.addEventListener("DOMContentLoaded", () => {
      fetch("data/tour-packages.json")
        .then(response => response.json())
        .then(data => {
          const container = document.getElementById("tour-packages");
          data.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
              <img src="${item.image}" alt="${item.title}" />
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <p><strong>Price:</strong> ${item.price}</p>
            `;
            container.appendChild(card);
          });
        });
    });
 