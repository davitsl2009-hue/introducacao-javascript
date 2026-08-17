let livrosDisponiveis = 10;
livrosDisponiveis -= 3;
livrosDisponiveis += 1;

console.log(livrosDisponiveis);

document.getElementById("resultado").textContent = `Livros disponiveis na estante:` + `${livrosDisponiveis}`;