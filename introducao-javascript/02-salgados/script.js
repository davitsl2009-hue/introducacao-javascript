const nomeSalgado = "Risole";
const precoUnitario = 7.0;
const quantidade = 4;
const total = precoUnitario * quantidade;

console.log(`Total: R$ ${total}`);
document.getElementById("resultado").textContent = `${quantidade} X ${nomeSalgado} = R$ ` + `${total.toFixed(2)}`;