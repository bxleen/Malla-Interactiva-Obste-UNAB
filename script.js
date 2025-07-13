const grid = document.getElementById("grid");

for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");

  cell.addEventListener("click", () => {
    if (cell.textContent) {
      cell.classList.toggle("clicked");
    } else {
      const texto = prompt("Escribe algo para esta celda:");
      if (texto) {
        cell.textContent = texto;
        cell.style.backgroundColor = "#d1e7dd";
      }
    }
  });

  grid.appendChild(cell);
}
