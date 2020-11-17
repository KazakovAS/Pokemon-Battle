const firstRow = prompt("Введите 1-ю строку");
const secondRow = prompt("Введите 2-ю строку");

const char = prompt("Введите символ, количество которого необходимо посчитать");

function getRow(firstRow, secondRow, char) {
    const resultFirstRow  = countCharInRow(firstRow, char);
    const resultSecondRow = countCharInRow(secondRow, char);

    if (resultFirstRow > resultSecondRow) {
        alert(`Количество символов ${char} больше в 1-ой строке`);
    } else if (resultFirstRow < resultSecondRow) {
        alert(`Количество символов ${char} больше во 2-ой строке`);
    } else {
        alert(`Количество символов ${char} одинаково в обех строках`)
    }
}

function countCharInRow(row, char) {
    let cnt = 0;

    for (let i = 0; i < row.length; i++) {
        if (row[i] === char) {
            console.log(row[i])
            cnt += 1;
        }
    }
    return cnt;
}

getRow(firstRow, secondRow, char);
