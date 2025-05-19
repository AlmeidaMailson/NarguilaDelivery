function validarEtapa1() {
    const inputs = document.querySelectorAll('#etapa1 input');
    let preenchido = true;
  
    // Verifica se todos os campos estão preenchidos (exceto radio buttons)
    inputs.forEach((input) => {
      if (input.type !== "radio" && input.value.trim() === '') {
        preenchido = false;
      }
    });
  
    const generoSelecionado = document.querySelector('input[name="gender"]:checked');
  
    if (!generoSelecionado) {
      preenchido = false;
    }
  
    if (!preenchido) {
      alert('Por favor, preencha todos os campos antes de continuar!');
      return;
    }
  
    // Verifica a idade
    const dataNascimentoInput = document.querySelector('#etapa1 input[name="date"]');
    const dataNascimento = new Date(dataNascimentoInput.value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
  
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
      idade--;
    }
  
    if (idade < 18) {
      alert('Você deve ter 18 anos ou mais para se cadastrar.');
      return;
    }
  
    // Se tudo estiver ok, avança para etapa 2
    document.getElementById('etapa1').style.display = 'none';
    document.getElementById('etapa2').style.display = 'block';
    atualizarBarra(2);
  }
  // Define a data atual no campo "Data de Cadastro"
window.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date();
    const dataFormatada = hoje.toISOString().split('T')[0]; // Formato: yyyy-mm-dd
    document.getElementById("dataCadastro").value = dataFormatada;
  });
  