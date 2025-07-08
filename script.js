// Aplicar tema salvo no carregamento
document.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem('tema');
  if (temaSalvo === 'dark') {
    document.body.classList.add('dark');
  }
});


// Alternar e salvar o tema
const btnTema = document.getElementById('toggle-theme');
if (btnTema) {
  btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const temaAtual = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('tema', temaAtual);
  });
}


// Envio do formulário
const form = document.getElementById('formContato');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Obrigado pelo contato! Em breve responderemos.');
    form.reset();
  });
}


