const nomeDoce = "Brigadeiro";
const preco = 5.0;
const disponivel = true;

console.log(nomeDoce,preco,disponivel);
document.getElementById("resultado").textContent = `${nomeDoce} custa R$` + `${preco.toFixed(2)} - disponivel:` + `${disponivel}`;