const textoDigitado = document.getElementById("input");
const textoCriptografado = document.getElementById("output");

function btnEncriptar() {
    const textoEncriptado = encriptar(textoDigitado.value);
    textoCriptografado.value = textoEncriptado;
    textoDigitado.value = "";
    esconderCaixaInicial();
    mostrarConteudoNovo();
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textoDigitado.value);
    textoCriptografado.value = textoDesencriptado;
    textoDigitado.value = "";
    esconderCaixaInicial();
    mostrarConteudoNovo();
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function esconderCaixaInicial() {
    const caixaInicial = document.getElementById("caixaContainer");
    caixaInicial.classList.add("hidden");
}

function mostrarConteudoNovo() {
    const textoNovo = document.querySelector(".textoNovo");
    const botaoCopiar = document.getElementById("copiar");
    textoNovo.style.display = "block";
    botaoCopiar.style.display = "block";
    botaoCopiar.addEventListener("click", copiar);
}

function copiar() {
    textoCriptografado.select();
    document.execCommand("copy");
}
