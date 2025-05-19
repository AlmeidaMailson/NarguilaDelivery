function atualizarLabel() {
    const tipo = document.getElementById("tipoUsuario").value;
    const label = document.getElementById("labelDocumento");
  
    if (tipo === "fornecedor") {
      label.textContent = "CNPJ";
    } else {
      label.textContent = "CPF";
    }
  }
  
  function enviarChamado() {
    const tipo = document.getElementById("tipoUsuario").value;
    const doc = document.getElementById("documento").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const msg = document.getElementById("mensagem").value.trim();
  
    if (!tipo || !doc || !descricao) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }
  
    alert("Chamado enviado com sucesso!\nEm breve, entraremos em contato.");
    document.getElementById("formSuporte").reset();
  }
  
  