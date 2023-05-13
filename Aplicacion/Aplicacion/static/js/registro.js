

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	contr: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telf: /^\d{7,14}$/ // 7 a 14 numeros.
}


const campos = {
	usuario: false,
	nombre: false,
	contr: false,
	correo: false,
	telf: false
}

const validarform = (e) => {
  switch (e.target.name){
    case "usuario":
    validarCampo(expresiones.usuario, e.target, e.target.name);
    break;

    case "nombre":
    validarCampo(expresiones.nombre, e.target, e.target.name);
    break;

    case "contr":
    validarCampo(expresiones.contr, e.target, e.target.name);
    validarPassword2();
    break;

    case "contr1":
    validarPassword2();
    break;

    case "correo":
    validarCampo(expresiones.correo, e.target, e.target.name);
    break;

    case "telf":
    validarCampo(expresiones.telf, e.target, e.target.name);
    break;
  }
}




const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`gform-${campo}`).classList.remove('gform-incorrecto');
		document.getElementById(`gform-${campo}`).classList.add('gform-correcto');
		document.querySelector(`#gform-${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#gform-${campo} i`).classList.remove('fa-times');
		document.querySelector(`#gform-${campo} .error`).classList.remove('error-active');
		campos[campo] = true;
	} else {
		document.getElementById(`gform-${campo}`).classList.add('gform-incorrecto');
		document.getElementById(`gform-${campo}`).classList.remove('gform-correcto');
		document.querySelector(`#gform-${campo} i`).classList.add('fa-times');
		document.querySelector(`#gform-${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#gform-${campo} .error`).classList.add('error-active');
		campos[campo] = false;
	}
}




const validarPassword2 = ((input) => {
	const inputPassword1 = document.getElementById('contr');
	const inputPassword2 = document.getElementById('contr1');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`gform-contr1`).classList.add('gform-incorrecto');
		document.getElementById(`gform-contr1`).classList.remove('gform-correcto');
		document.querySelector(`#gform-contr1 i`).classList.add('fa-times');
		document.querySelector(`#gform-contr1 i`).classList.remove('fa-check-circle');
		document.querySelector(`#gform-contr1 .error`).classList.add('error-active');
		campos['contr'] = false;
	} else {
		document.getElementById(`gform-contr1`).classList.remove('gform-incorrecto');
		document.getElementById(`gform-contr1`).classList.add('gform-correcto');
		document.querySelector(`#gform-contr1 i`).classList.remove('fa-times');
		document.querySelector(`#gform-contr1 i`).classList.add('fa-check-circle');
		document.querySelector(`#gform-contr1 .error`).classList.remove('error-active');
		campos['contr'] = true;
	}
})




inputs.forEach((input) => {
  input.addEventListener('keyup', validarform);
  input.addEventListener('blur', validarform);
});


formulario.addEventListener('submit', (e) => {

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.contr && campos.correo && campos.telf){
		formulario.reset();

		document.getElementById('exito').classList.add('exito-activo');
		setTimeout(() => {
			document.getElementById('exito').classList.remove('exito-activo');
		}, 5000);

		document.querySelectorAll('.gform-correcto').forEach((icono) => {
			icono.classList.remove('gform-correcto');
		});
	} else {
		document.getElementById('mensaje').classList.add('mensaje-activo');
    e.preventDefault();
	}
});