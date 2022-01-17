function map (array, fn){
  const tempArray = []
  for (let i = 0; i < array.length; i++) {
    tempArray.push(fn(array[i]))
  }

  return tempArray
}


function filter (array, fn) {
  const tempArray = []
  for (let i = 0; i < array.length; i++) {
    if(fn(array[i])) tempArray.push(array[i])
  }

  return tempArray
}

const arr = [1,2,3,4,5]

console.log('Map de Objetos',
  map(arr, (item) => {
    return  { id: item }
  })
)

console.log('Map de Array',
  map(arr, (item) => {
    return  [item]
  })
)

console.log('Filter', filter(arr, (item) => item > 2))
