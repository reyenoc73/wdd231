fetch("data/interests.json")
  .then(response => response.json())
  .then(data => {
    const grid = document.querySelector(".discover-grid");
    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.gridArea = `card${index + 1}`;
      card.innerHTML = `
        <h2>${item.name}</h2>
        <figure><img src="${item.image}" alt="${item.name}"></figure>
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      grid.appendChild(card);
    });
  });
