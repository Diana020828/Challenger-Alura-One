function encriptar() {
  var texto = document.getElementById("mensaje").value;
  var parte = texto.split("");
  var code = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  }
  var textoEncriptado = "";
  if (validar(texto)) {
    for (var i = 0; i < texto.length; i++) {
      var recibe = parte[i];
      if (code[recibe]) {
        textoEncriptado += code[recibe];
      }
      else {
        textoEncriptado += recibe;
      }
    }
    document.getElementById("mensaje-encriptado").textContent = textoEncriptado;
    document.getElementById("secondary-data").style.display = "none";
    document.getElementById("principal-data").style.display = "block";

  } else {
    validar(texto);
  }
}

function autoMessage() {
  //hacer que se ejecute cada vez 30 segundos
  setInterval(function () {
    if (document.getElementById("mensaje").value == "") {
      document.getElementById("secondary-data").style.display = "block";
      document.getElementById("principal-data").style.display = "none";
    }
  }, 30000);
}

function desencriptar() {
  const texto = document.getElementById("mensaje").value;

  const codigos = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  let textoDesencriptado = "";
  let i = 0;
  if (validar(texto)) {

    while (i < texto.length) {
      let letra = texto[i];
      let codigoEncontrado = false;

      for (const codigo in codigos) {
        if (texto.substring(i, i + codigo.length) === codigo) {
          textoDesencriptado += codigos[codigo];
          i += codigo.length;
          codigoEncontrado = true;
          break;
        }
      }

      if (!codigoEncontrado) {
        textoDesencriptado += letra;
        i++;
      }
    }
    document.getElementById("mensaje-encriptado").textContent = textoDesencriptado
  } else {
    validar(texto);
  }
}

function validar(texto) {
  const modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.appendChild(modal);

  if (!texto) {
    modal.innerHTML = "El texto no puede estar vacío";
    modal.classList.add("error");
    modal.classList.add("show");
    setTimeout(() => {
      modal.classList.remove("show");
      document.body.removeChild(modal);
    }, 3000);
    return false;
  }

  if (texto !== texto.toLowerCase()) {
    modal.innerHTML = "El texto debe estar en minúsculas";
    modal.classList.add("error");
    modal.classList.add("show");
    setTimeout(() => {
      modal.classList.remove("show");
      document.body.removeChild(modal);
    }, 3000);
    return false;
  }

  modal.innerHTML = "El texto es válido";
  modal.classList.add("success");
  modal.classList.add("show");
  setTimeout(() => {
    modal.classList.remove("show");
    document.body.removeChild(modal);
  }, 3000);

  return true;
}

function copiar(texto) {
  var copyText = document.getElementById(texto).textContent;
  navigator.clipboard
    .writeText(copyText)
}

window.addEventListener('DOMContentLoaded', (event) => {
  var bloque = document.getElementById("invisible");
  var boton = encriptar();
  if (boton.trim() == "") {
    bloque.style.display = "none";
  } else {
    bloque.style.display = "block";
  }
});
