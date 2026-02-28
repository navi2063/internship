document.getElementById("loadBtn").addEventListener("click", async function () {
  const container = document.getElementById("userContainer");

  container.innerHTML = "Loading users...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    container.innerHTML = "";

    users.forEach(user => {
      const div = document.createElement("div");
      div.classList.add("user-card");

      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
        <p><strong>Street:</strong> ${user.address.street}</p>
      `;

      container.appendChild(div);
    });

  } catch (error) {
    container.innerHTML = "Error loading users.";
    console.error(error);
  }
});