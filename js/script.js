// ==============================
// PERSONALIZAÇÃO
// ==============================
// Coloque aqui a data em que vocês começaram a namorar.
// Exemplo: new Date('2025-03-15T00:00:00')
const inicioRelacionamento = new Date('2025-01-01T00:00:00');

function atualizarContador() {
  const agora = new Date();
  let diferenca = agora - inicioRelacionamento;

  if (diferenca < 0) diferenca = 0;

  const segundo = 1000;
  const minuto = segundo * 60;
  const hora = minuto * 60;
  const dia = hora * 24;

  const dias = Math.floor(diferenca / dia);
  const horas = Math.floor((diferenca % dia) / hora);
  const minutos = Math.floor((diferenca % hora) / minuto);
  const segundos = Math.floor((diferenca % minuto) / segundo);

  document.getElementById('days').textContent = dias;
  document.getElementById('hours').textContent = horas;
  document.getElementById('minutes').textContent = minutos;
  document.getElementById('seconds').textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Surpresa final
document.getElementById('surpriseBtn').addEventListener('click', () => {
  document.getElementById('surprise').classList.toggle('show');
  criarCoracoes(18);
});

// Pequena chuva de corações
function criarCoracoes(quantidade = 5) {
  const container = document.querySelector('.hearts');

  for (let i = 0; i < quantidade; i++) {
    const heart = document.createElement('span');
    heart.textContent = Math.random() > .5 ? '♥' : '♡';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-30px';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
  }
}

setInterval(() => criarCoracoes(2), 1800);
