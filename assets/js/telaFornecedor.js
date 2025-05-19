// Exemplo de JS para alternar abas (Agora vs Agendados)
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    // Aqui você pode alternar a exibição dos pedidos
    // Por enquanto, só muda o estilo da aba ativa
  });
});
console.log("Painel do fornecedor carregado.");