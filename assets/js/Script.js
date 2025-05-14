function logar() {
    const tipo = document.getElementById('tipoLogin').value;
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
  
    if (tipo === "") {
      alert("Por favor, selecione o tipo de login.");
      return;
    }
  
    if (tipo === "usuario") {
      if (email === "usuario@email.com" && senha === "123456") {
        alert('Login de usuário realizado!');
        window.location.href = 'index.html';
      } else {
        alert('Usuário ou senha incorretos.');
      }
    }
  
    if (tipo === "entregador") {
      if (email === "entregador@email.com" && senha === "123456") {
        alert('Login de entregador realizado!');
        window.location.href = 'painel-entregador.html';
      } else {
        alert('Entregador ou senha incorretos.');
      }
    }
  
    if (tipo === "fornecedor") {
      if (email === "fornecedor@email.com" && senha === "123456") {
        alert('Login de fornecedor realizado!');
        window.location.href = 'painel-fornecedor.html';
      } else {
        alert('Fornecedor ou senha incorretos.');
      }
    }
  }
  
  function atualizarBarra(etapa) {
    const barra = document.getElementById('progressBar');
    const texto = document.getElementById('progressText');

    if (etapa === 1) {
      barra.style.width = '33%';
      texto.innerText = 'Etapa 1 de 3';
    } else if (etapa === 2) {
      barra.style.width = '66%';
      texto.innerText = 'Etapa 2 de 3';
    } else if (etapa === 3) {
      barra.style.width = '100%';
      texto.innerText = 'Etapa 3 de 3';
    }
  }

  function validarEtapa1() {
    const inputs = document.querySelectorAll('#etapa1 input');
    let preenchido = true;

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

    document.getElementById('etapa1').style.display = 'none';
    document.getElementById('etapa2').style.display = 'block';
    atualizarBarra(2);
  }

  function validarEtapa2() {
    const inputs = document.querySelectorAll('#etapa2 input');
    let preenchido = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        preenchido = false;
      }
    });

    if (!preenchido) {
      alert('Por favor, preencha todos os campos de endereço!');
      return;
    }

    document.getElementById('etapa2').style.display = 'none';
    document.getElementById('etapa3').style.display = 'block';
    atualizarBarra(3);
  }

  function mostrarCampoFrota(temFrota) {
    const campoQuantidade = document.getElementById('quantidadeFrota');
    if (temFrota) {
      campoQuantidade.style.display = 'block';
    } else {
      campoQuantidade.style.display = 'none';
    }
  }