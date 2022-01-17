// Higher Order Function (Função Extraordinaria)
// - Usado para fazer Enclausuaramento de Valores
// - Inversão de Controle
// - Injeção de Dependencia


// function makeAdder(x) {
//   return function(y) {
//     return x + y
//   }
// }

//ou

const makeAdder = (x) => (y) => x + y

const add5 = makeAdder(5)
const add10 = makeAdder(10)

console.log('add5(2) :>> ', add5(2))
console.log('add10(2) :>> ', add10(2))

// Ambas as funções add5 e add10 são closures. Compartilham o mesmo corpo de definição de função mas
// armazenam diferentes ambientes. No ambiente da add5, por exemplo, x equivale a 5, enquanto na add10 o
// valor de x é 10.
