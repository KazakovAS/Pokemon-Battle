const firstRow = prompt("Введите 1-ю строку");
const secondRow = prompt("Введите 2-ю строку");

const char = prompt("Введите символ, количество которого необходимо посчитать");

let resultFirstRow = 0;
let resultSecondRow = 0;

function getRow(firstRow, secondRow) {
    for (let i = 0; i < firstRow.length; i++) {
        let charString = firstRow.charAt(i);

        if (charString === char) {
            resultFirstRow += 1;
        }
    }

    for (let i = 0; i < secondRow.length; i++) {
        let charString = secondRow.charAt(i);

        if (charString === char) {
            resultSecondRow += 1;
        }
    }

    if (resultFirstRow > resultSecondRow) {
        alert(`Количество символов ${char} больше в 1-ой строке`);
    } else {
        alert(`Количество символов ${char} больше во 2-ой строке`);
    }
}

getRow(firstRow, secondRow);
