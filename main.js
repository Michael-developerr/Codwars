// Конец учебного года, судьбоносный момент вашего школьного отчета.Средние баллы должны быть подсчитаны.Все ученики приходят к вам и умоляют вас подсчитать их средний балл.Легко!Вам просто нужно написать сценарий.

// Возвращает среднее значение заданного массива, округленное до ближайшего целого числа.

// Массив никогда не будет пустым.
let arr = [4, 5, 5, 4, 5, 2, 3]

function getAverage(marks) {
    let sum = 0

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i]

    }
    return Math.round(sum / marks.length)
}
console.log(getAverage(arr))









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