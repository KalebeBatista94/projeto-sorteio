const button = document.getElementById("botao");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const modalLoading = document.querySelector(".modal-loading");
const modalMessage = document.getElementById("modal-message");
const closeBtn = document.getElementsByClassName("close")[0];
let intervalId; // Variável para armazenar o ID do setInterval

button.addEventListener("click", () => {
  var min = parseInt(inputMin.value);
  var max = parseInt(inputMax.value);

  showModalWithLoading();

  intervalId = setInterval(() => {
    var numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    showModal(numeroAleatorio);
  }, 2000); // Atualiza o número aleatório a cada 2 segundos
});

function showModalWithLoading() {
  modal.style.display = "block";
  modalLoading.style.display = "block";
  modalMessage.textContent = "";
}

function showModal(message) {
  clearInterval(intervalId); // Limpa o intervalo quando o modal é fechado
  modalLoading.style.display = "none";
  modalMessage.textContent = `O número ganhador foi o "${message}"`;
}

function closeModal() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);
