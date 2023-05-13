
const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{8,16}$/ // 8 a 16 digitos.
}

const campos = {
  correo: false,
  password: false
}

const validarFormulario = (e) => {
  switch (e.target.name) {

    case "correo":
    validarCampo(expresiones.correo, e.target, e.target.name);
    break;

    case "password":
    validarCampo(expresiones.password, e.target, e.target.name);
    break;

    default:

  }
}


const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`grupo__${campo}_form`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}_form`).classList.add('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo}_form i`).classList.remove('fa-times-circle');
    document.querySelector(`#grupo__${campo}_form i`).classList.add('fa-check-circle');
    document.querySelector(`#grupo__${campo}_form .formulario__input-error`).classList.remove('formulario__input-error-activo');

    campos[campo] = true;
    if(campos[campo] == true){
      document.getElementById(`formulario__span_${campo}`).classList.add('up');

    }
  }else {
    document.getElementById(`grupo__${campo}_form`).classList.add('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}_form`).classList.remove('formulario__grupo-correcto');
    document.querySelector(`#grupo__${campo}_form i`).classList.add('fa-times-circle');
    document.querySelector(`#grupo__${campo}_form i`).classList.remove('fa-check-circle');
    document.querySelector(`#grupo__${campo}_form .formulario__input-error`).classList.add('formulario__input-error-activo');

    campos[campo] = false;
    if(campos[campo] == false){
      document.getElementById(`formulario__span_${campo}`).classList.add('up');

    }
  }

}




inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})


formulario.addEventListener('submit', (e) => {
  if(campos.correo && campos.password){
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    },3000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });
    document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    document.getElementById('botonenviar').classList.remove('errormargin');

  }else{
    e.preventDefault();
    setTimeout(() => {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
  },150);
    document.getElementById('botonenviar').classList.add('errormargin');
  }
});