// Дан массив целых чисел в виде строк и чисел, вернуть сумму значений массива, как если бы все они были числами.

// Ответ дайте числом.

let arr = [2, '4', 5, '6', ]

function sumMix(x) {
    return x.reduce((accum, item) => accum + parseInt(item), 0)
}
console.log(sumMix(arr))










// function points(games) {
//     var sum = 0;
//     for (var i = 0; i < games.length; ++i) {
//         if (games[i][0] > games[i][2])
//             sum += 3;
//         if (games[i][0] == games[i][2])
//             sum += 1;
//     }
//     return sum;
// }