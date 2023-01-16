var alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&()*+,-./:;<=>?@[]^_{|}~";
var textCodificado = [];
var textoAncodificado = "";
var objetoCodificado = "";
var alfaCodigo = [];

function obj(letra, codigo) {
    return { letra: letra, codigo: codigo }
}

function objCriptografia(string, codificado) {
    return { string: string, codificado: codificado }
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function creatCode(alfabeto) {
    for (let i = 0; i < alfabeto.length; i++) {
        alfaCodigo[i] = obj(alfabeto[i], alfabeto[getRandomArbitrary(0, alfabeto.length)] + alfabeto[getRandomArbitrary(0, alfabeto.length)] + alfabeto[getRandomArbitrary(0, alfabeto.length)])
    }
}

function codifyString(inputTexto) {
    let passwordCodify = "";

    for (let k = 0; k < alfaCodigo.length; k++) {
        for (let validar = 0; validar < inputTexto.length; validar++) {

            if (inputTexto[validar] == alfaCodigo[k].letra) {
                passwordCodify += alfaCodigo[k].codigo;

            }
        }
    }

    objetoCodificado = objCriptografia(inputTexto, passwordCodify);

    return passwordCodify;
}

function uncodifyString(text) {
    if (text = objetoCodificado.codificado) {
        return objetoCodificado.string
    }
}
creatCode(alfabeto);

