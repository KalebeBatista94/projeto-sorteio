const button = document.getElementById('botao');
const inputMin = document.querySelector('.input-min');
const inputMax = document.querySelector('.input-max');
const modal = document.getElementById('myModal');
const modalMessage = document.getElementById('modal-message');
const closeBtn = document.getElementsByClassName('close')[0];

button.addEventListener('click', () => {
  const min = parseInt(inputMin.value);
  const max = parseInt(inputMax.value);

  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  showModal(numeroAleatorio);
});

function showModal(message) {
  modal.style.display = 'block';
  modalMessage.textContent = `O número ganhador foi o "${message}"`
}

function closeModal() {
  modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);