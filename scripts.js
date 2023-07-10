const button = document.getElementById("botao");
const inputMin = document.querySelector(".input-min");
const inputMax = document.querySelector(".input-max");

button.addEventListener("click", () => {
  const min = parseInt(inputMin.value);  //converte os valores de entrada para números
  const max = parseInt(inputMax.value);

  const generateNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  alert(generateNumber);
});

//    console.log(inputMin.value, inputMax.value)

// function sorteador(min, max){

//    return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(sorteador(10,20))
