import './main'


const formCars = document.querySelector("[data-js='form-cars']")
const tbody = document.querySelector("[data-js='tbody']")
const cars = []

const formInput = (e) => (name) => {
  const element = e.target.elements[name]
  const value = element.value
  element.value = ""
  if(name == "imagem"){
    element.focus()
  }
  return value
}

formCars.addEventListener('submit', (e) => {
  e.preventDefault()
  const getValues = formInput(e)
  const car = {
    imagem: getValues('imagem'),
    marca: getValues('marca'),
    ano: getValues('ano'),
    placa: getValues('placa'),
    cor: getValues('cor')
  }

  cars.push(car)

  tbody.innerHTML += `
    <tr>
      <td><img src="${car.imagem}" alt="car-${car.ano}" width='100' height='100'></td>
      <td>${car.marca}</td>
      <td>${car.ano}</td>
      <td>${car.placa}</td>
      <td>${car.cor}</td>
    </tr>
  `
})
