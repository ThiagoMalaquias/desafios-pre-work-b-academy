import './main'

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

  const textFormated = arrayTextFormated.join(" ")
  e.target.value = textFormated
})

