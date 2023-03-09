function getAdultos() {
    return Number(document.getElementById("adultos").value);
}

function getCriancas() {
    return Number(document.getElementById("criancas").value);
}

function getDuracao() {
    return Number(document.getElementById("duracao").value);
}
function carne() {
    let consumocarne = getDuracao() < 6 ? 400:650;
    let totalcarne = ((getAdultos() * consumocarne) + (getCriancas() * consumocarne * 0.5))/1000;
    document.getElementById("carne_result").value = totalcarne + " kg";
}

function cerveja() {
    let consumocerva = getDuracao() < 6 ? 1200:2000;
    let totalcerva = (getAdultos() * consumocerva) /1000;
    document.getElementById("cerva_result").value = totalcerva + " litros";
    
}

function refri() {
    let consumorefri = getDuracao() < 6 ? 1000:1500;
    let totalrefri = ((getAdultos()* consumorefri) + (getCriancas() * consumorefri *0.5)) /1000;
    document.getElementById("refri_result").value = totalrefri + " litros";
}

window.onload = function(){
    const botao = document.getElementById("calcular");
    botao.addEventListener('click', carne);
    botao.addEventListener('click',cerveja);
    botao.addEventListener('click',refri);

}