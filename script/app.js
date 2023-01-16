//variaveis


const btnEncriptar = document.querySelector(".btnEncriptar");
const btnDecencriptar = document.querySelector(".btnDecencriptar");
const resultado = document.querySelector('.resultado');
const btnCopiar = document.querySelector('.btnCopiar');
const validar = document.querySelector('.validar');

//eventos
(() => {

    btnEncriptar.addEventListener('click', encriptarTexto);
    btnDecencriptar.addEventListener('click', decencriptarTexto);
    resultado.addEventListener('click', copiarTexto);

})()

//funções
function encriptarTexto() {

    let texto = document.querySelector("#texto").value;
    if (removerAcentos(texto)) {
        return
    }

    let textoPassed = codifyString(texto);
    mostrarHTML(textoPassed)
    document.querySelector("#texto").value = '';
}

function removerAcentos(texto) {
    if (texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "") !== texto) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Entre com um texto sem acentos';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true
    };
    if (texto !== texto.toLowerCase()) {
        const alerta = document.createElement('div');
        alerta.textContent = 'Entre com um texto sem maisculas';
        alerta.classList.add('error')
        setTimeout(() => {
            alerta.remove();
        }, 1500);
        validar.appendChild(alerta);
        return true
    };
    return false
    /* return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); */
}

function mostrarHTML(textoCode) {
    resultado.innerHTML = `
    <div class="sk-circle">
      <div class="sk-circle1 sk-child"></div>
      <div class="sk-circle2 sk-child"></div>
      <div class="sk-circle3 sk-child"></div>
      <div class="sk-circle4 sk-child"></div>
      <div class="sk-circle5 sk-child"></div>
      <div class="sk-circle6 sk-child"></div>
      <div class="sk-circle7 sk-child"></div>
      <div class="sk-circle8 sk-child"></div>
      <div class="sk-circle9 sk-child"></div>
      <div class="sk-circle10 sk-child"></div>
      <div class="sk-circle11 sk-child"></div>
      <div class="sk-circle12 sk-child"></div> 
    </div>
    `
    setTimeout(() => {
        resultado.innerHTML = `
        <textarea>${textoCode}</textarea>
        <button class="btnCopiar">Copiar</button>
        `
    }, 1000)
}

function copiarResultado() {
    return document.querySelector('.resultado textarea');
}

function copiarTexto() {
    const textoEncriptado = copiarResultado();
    textoEncriptado.select();
    document.execCommand('copy');
}

function decencriptarTexto() {

    let teste = copiarResultado();

    if (teste == undefined || teste == '') {
        mostrarHTML("s");
    } else {
        let texto = document.querySelector("#texto").value;
        let decodificador = uncodifyString(texto);
        mostrarHTML(decodificador)
        document.querySelector("#texto").value = '';

    }
}