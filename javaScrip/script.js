
function encriptar() {
    var texto = document.getElementById("textoEsquerda").value.toLowerCase();
    var txtCodificado = texto.replace(/e/igm, "enter");
    var txtCodificado = txtCodificado.replace(/i/igm, "imes");
    var txtCodificado = txtCodificado.replace(/a/igm, "ai");
    var txtCodificado = txtCodificado.replace(/o/igm, "ober");
    var txtCodificado = txtCodificado.replace(/u/igm, "ufat");

    document.getElementById("bonecoimg").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCodificado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
}

function desencriptar() {
    var texto = document.getElementById("textoEsquerda").value.toLowerCase();
    var txtCodificado = texto.replace(/enter/igm, "e");
    var txtCodificado = txtCodificado.replace(/imes/igm, "i");
    var txtCodificado = txtCodificado.replace(/ai/igm, "a");
    var txtCodificado = txtCodificado.replace(/ober/igm, "o");
    var txtCodificado = txtCodificado.replace(/ufat/igm, "u");

    document.getElementById("bonecoimg").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCodificado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    
}

function copiarTexto(){
    let textoCopiado = document.getElementById("texto2");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    document.execCommand("copy");
    alert("texto copiado");   
}

