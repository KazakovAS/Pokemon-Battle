const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', count());
}

function count() {
    counter = 0;

    return function () {
        counter += 1;
    }
};