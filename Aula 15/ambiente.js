let num = [5 , 8, 2, 9, 3]
num[5] = 8 //adiciona um valor em um lugar especifico
num.push(7)//adicioma um numero no final
console.log(num) // com []
num.sort() //deixar em ordem
console.log(`${num}`) //sem []

console.log(`O vetor tem ${num.length} posições `) //quantas posições tem
console.log(num[0]) //posição num especifico

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

let posi = num.indexOf(4)
console.log(`O valor 4 está na posição ${posi}`)

let p = num.indexOf(6)
if (p == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${p}`)
}


