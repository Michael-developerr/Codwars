// Завершите функцию, которая принимает два аргумента и возвращает все числа, делящиеся на заданный делитель.Первый аргумент— массив, numbersа второй— divisor.

let num = [1, 2, 3, 4, 5, 6, 7, 8]

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor == 0)
}

console.log(divisibleBy(num, 2));