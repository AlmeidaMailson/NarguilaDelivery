const form = document.getElementById('cardapioForm');
const previewImg = document.getElementById('previewImg');
const previewNome = document.getElementById('previewNome');
const previewDescricao = document.getElementById('previewDescricao');
const previewPreco = document.getElementById('previewPreco');

document.getElementById('imagem').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      previewImg.src = e.target.result;
      previewImg.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

form.addEventListener('input', () => {
  previewNome.textContent = document.getElementById('nome').value || 'Nome do item';
  previewDescricao.textContent = document.getElementById('descricao').value || 'Descrição do item';
  previewPreco.textContent = `R$ ${parseFloat(document.getElementById('preco').value || 0).toFixed(2)}`;
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Item adicionado com sucesso!');
  form.reset();
  previewNome.textContent = 'Nome do item';
  previewDescricao.textContent = 'Descrição do item';
  previewPreco.textContent = 'R$ 0.00';
  previewImg.src = '#';
  previewImg.style.display = 'none';
});


