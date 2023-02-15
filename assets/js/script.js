const button = document.getElementById("gerar");

button.addEventListener("click", () => {
  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);

  let valorFinal = Math.floor(Math.random() * (max - min + 1)) + min;

  if (isNaN(valorFinal)) {
    valorFinal = "Valor inválido";
  }
  document.querySelector("#resultado > span").textContent = valorFinal;
});
