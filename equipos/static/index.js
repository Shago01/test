const fomulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
const btn_submit = document.getElementById("from-submit");
let noCumpleRegular = true;

const expresionRegular = {
  numeroLestras: /[a-zA-Z]+[a-zA-Z0-9\s]+$/,
  letras: /^[a-zA-Z\s]+$/,
  numeros: /^\d+$/,
};

const desactivarError = (n) => {
  document.getElementById(n.target.id).classList.remove("form-imput-error");
  document
    .getElementById(`form-error-${n.target.name}`)
    .classList.remove("form-error-active");
  btn_submit.disabled = false;
};

const activarError = (n) => {
  document
    .getElementById(`form-error-${n.target.name}`)
    .classList.add("form-error-active");
  document.getElementById(n.target.id).classList.add("form-imput-error");
  btn_submit.disabled = true;
};

const comprovar = (nameInput) => {
  switch (nameInput.target.name) {
    case "nombre":
      expresionRegular.numeroLestras.test(nameInput.target.value)
        ? desactivarError(nameInput)
        : activarError(nameInput);
      expres = expresionRegular.numeroLestras.test(nameInput.target.value);
      break;

    case "marca":
      expresionRegular.letras.test(nameInput.target.value)
        ? desactivarError(nameInput)
        : activarError(nameInput);

      break;

    case "estado":
      expresionRegular.letras.test(nameInput.target.value)
        ? desactivarError(nameInput)
        : activarError(nameInput);
      break;

    case "cantidad":
      expresionRegular.numeros.test(nameInput.target.value)
        ? desactivarError(nameInput)
        : activarError(nameInput);
      break;

    case "description":
      expresionRegular.numeroLestras.test(nameInput.target.value)
        ? desactivarError(nameInput)
        : activarError(nameInput);
      break;
  }
};

const noCumple = () => {
  let noCumple = false;
  for (let entrada of inputs) {
    if (entrada.value === "") {
      noCumple = true;
      break;
    }
  }
  btn_submit.disabled = noCumple;
};

btn_submit.addEventListener("mouseenter", noCumple);

inputs.forEach((input) => {
  input.addEventListener("keyup", comprovar);
  input.addEventListener("blur", comprovar);
});
