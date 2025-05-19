function solicitarSaque() {
    const chave = document.getElementById("chavePix").value.trim();
    const valor = parseFloat(document.getElementById("valorSaque").value);
    const data = document.getElementById("dataSaque").value;
  
    if (!chave || !valor || !data) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
  
    if (valor <= 0) {
      alert("O valor deve ser maior que zero!");
      return;
    }
  
    const novoItem = document.createElement("li");
    novoItem.textContent = `${data} - R$ ${valor.toFixed(2)} - Solicitado`;
    document.getElementById("listaExtrato").prepend(novoItem);
  
    alert("Saque solicitado com sucesso!");
    document.getElementById("saqueForm").reset();
  }
  