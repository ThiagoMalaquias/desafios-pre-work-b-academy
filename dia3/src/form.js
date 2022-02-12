import './main'

// Exercício 1
const inputUsername = document.querySelector("[data-js='inputUsername']")
const validtext = (text) => {
  const invalidWord = ["de", "da", "do", "dos"]
  return invalidWord.includes(text)
}

inputUsername.addEventListener('input', (e) => {
  const value = e.target.value
  const arrayTextFormated = value.split(" ").map((text) => {
    const textLowerCase = text.toLowerCase()
    if(!validtext(textLowerCase)){
      return textLowerCase.charAt(0).toUpperCase() + textLowerCase.slice(1)
    }

    return textLowerCase
  })

  e.target.value = arrayTextFormated.join(" ")
})

// Exercício 2
const app = document.querySelector("[data-js='app']")
const form = document.querySelector("[data-js='form']")
const cores = ["black", "brown", "green", "red", "pink"]
const select = document.createElement('select')

cores.map((cor) => {
  select.innerHTML += `<option value='${cor}'>${cor}</option>`
})

select.setAttribute("multiple", '')
select.setAttribute("data-js", "selectMultiple")
form.appendChild(select)

const selectMultiple = document.querySelector("[data-js='selectMultiple']")
selectMultiple.addEventListener("change", (e) => {
  const divSelect = document.createElement('div')
  const selectedOptions = [...e.target.selectedOptions]

  app.innerHTML = ""
  divSelect.style.display = 'flex'

  selectedOptions.map(el => {
    const divSelectOptions = document.createElement('div')
    divSelectOptions.style.backgroundColor = el.value
    divSelectOptions.style.width = '100px'
    divSelectOptions.style.height = '100px'
    divSelect.appendChild(divSelectOptions)
    app.appendChild(divSelect)
  })
})
