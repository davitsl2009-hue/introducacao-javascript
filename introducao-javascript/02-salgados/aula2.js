//operadores armeticos
//usamos * para fazer multiplicações
 const nomesalgado = "fogaca";
const preco = 2.50 ;
const quantidade = 6;

const total = preco * quantidade
console.log(`total: R$ ${total}`);
document.getElementById("resultado").textContent=`${quantidade} X ${nomesalgado} = ${total.toFixed(2)}`; 