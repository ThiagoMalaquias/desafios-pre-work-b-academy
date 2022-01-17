const person = {
  fisrtName: 'Thiago',
  lastName: 'Malaquias',
  age: 20,
  size: 1.81
}

const newPerson = {
  ...person, // Os 3 pontos espalha as informações pra dentro novo objeto.
  age: 21
}

console.log('person :>> ', person);
console.log('newPerson :>> ', newPerson);

//Destructing
const array = [['Nome', 'Carlos'], ['Nome', 'Maria']]
console.log('Destructing Array :>> ', array.map(([arr1, arr2]) =>{
  return `${arr1}: ${arr2}`
}));

const obj = [{obj1: 'Teste', obj2: 'Destructing'}]
console.log('Destructing Objeto :>> ', obj.map(({obj1, obj2}) =>{
  return `${obj1}: ${obj2}`
}));
