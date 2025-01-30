// Напишите функцию для преобразования имени в инициалы. Эта ката строго принимает два слова с одним пробелом между ними.

// Вывод должен состоять из двух заглавных букв, разделенных точкой.

// Это должно выглядеть так:

// Sam Harris=>S.H

// patrick feeney=>P.F
// 
function abbrevName(name) {
    let names = name.split(" ");
    return names[0][0].toUpperCase() + '.' + names[1][0].toUpperCase();




}
console.log(abbrevName('Sam Harris'))