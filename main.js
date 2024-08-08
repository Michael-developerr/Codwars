let n = [1, 2, 3, 4, ]

function digitize(n) {
    if (n === 0) {
        return [0];
    }
   return String(n).split('').map(Number).reverse()
}
console.log(digitize(n))