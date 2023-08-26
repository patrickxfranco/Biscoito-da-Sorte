const cookie = document.querySelector('#cookie')
const btnOpenAgain = document.querySelector('#openAgain')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let phraseNumber = Math.floor(Math.random() * 10)
const phrases = [
  '"Acredite no poder dos seus sonhos, pois são eles que podem moldar o seu destino."',
  '"A sorte acompanha os corajosos. Arrisque e conquiste novos horizontes."',
  '"A verdadeira riqueza está na jornada, não apenas no destino final."',
  '"Nunca subestime o impacto de um pequeno gesto de bondade."',
  '"O aprendizado é a chave que abre as portas para um futuro brilhante."',
  '"Enxergue as dificuldades como trampolins para o seu crescimento pessoal."',
  '"A vida é uma tela em branco. Use cores vivas e crie uma obra-prima."',
  '"Semeie boas ações e você colherá felicidade em abundância."',
  '"A paciência é uma virtude que levará você a grandes realizações."',
  '"A felicidade é encontrada quando você valoriza as coisas simples da vida."']

cookie.addEventListener('click', openCookie)
btnOpenAgain.addEventListener('click', openAgain)
document.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    if (screen1.classList.contains('hide')) {
      openAgain()
    } else {
      openCookie()
    }
  }
})

function openCookie() {
  document.querySelector('.screen2 p').innerText = phrases[phraseNumber]
  toggleScreen()
}

function openAgain() {
  phraseNumber = Math.floor(Math.random() * 10)
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}