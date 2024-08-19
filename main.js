// Вам будет предоставлен список строк. Вы должны отсортировать его в алфавитном порядке (с учетом регистра и на основе значений ASCII символов), а затем вернуть первое значение.

// Возвращаемое значение должно быть строкой и содержать "***"
// между каждой из ее букв.

// Не следует удалять или добавлять элементы из / в массив.
const animals = ['elephant', 'Dog', 'CAT', 'cow', 'horse', 'Bird'];

function twoSort(s) {
    s.sort((a, b) => {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });

    let firstWord = s[0]; 
    let result = "";
    for (let i = 0; i < firstWord.length; i++) {
        result += firstWord[i];
        if (i < firstWord.length - 1) {
            result += "***";
        }
    }
    return result;
}

console.log(twoSort(animals))