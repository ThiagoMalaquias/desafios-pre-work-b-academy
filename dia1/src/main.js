import './style.css'

const app = document.querySelector('.app')

// function setState ({title, description}){
//   render({title, description})
// }

// Funcao Ordinaria
function render ({title, description}) {
  app.innerHTML = `
    <h1>${title}</h1>
    ${description && `<p>${description}</p>`}
  `
  // Operador de curto circuito
  // &&: Se a primeira for true, retorna a segunda
  // ||: Se a primeira for true, retorna ela mesma
  // ??: Se a primeira for null ou undefined, retorna a segunda
}

const link = document.querySelector('[data-js="link"]')
link.addEventListener('click', (event) => {
  event.preventDefault()
  // ou
  // const display = app.style.display
  // app.style.display = (display == 'block' ? 'none': 'block')

  // ou
  app.classList.toggle('hide')
  render({title: 'B. Academy', description: 'Boas vindas'})
}, false)

const obj = {title: 'B. Academy', description: 'Boas vindas à semana de pré-work para o Bootcamp em React.js 😁'}
render(obj)
