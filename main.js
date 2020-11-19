const kickBtn = document.getElementById('btn-kick');

const character = {
    name: "Squirtle",
    lvl: 4,
    defaultHP: 120,
    currentHP: 120,
    elLvl: document.getElementById('lvl-character'),
    elName: document.getElementById('name-character'),
    elHP: document.getElementById('health-character'),
    elProgressBarHP: document.getElementById('progressbar-character')
}

const enemy = {
    name: "Rattata",
    lvl: 2,
    defaultHP: 90,
    currentHP: 90,
    elLvl: document.getElementById('lvl-enemy'),
    elName: document.getElementById('name-enemy'),
    elHP: document.getElementById('health-enemy'),
    elProgressBarHP: document.getElementById('progressbar-enemy')
}

function init() {
    console.log("Start Game");

    // renderLvl(character);
    // renderLvl(enemy);

    // renderName(character);
    // renderName(enemy);

    // renderProgressBarHP(character);
    // renderProgressBarHP(enemy);

    // renderHP(character);
    // renderHP(enemy);

    renderPerson(character);
    renderPerson(enemy);
}

function renderPerson(person) {
    person.elLvl.textContent = person.lvl;
    person.elName.textContent = person.name;
    person.elHP.textContent = person.currentHP + ' / ' + person.defaultHP;
    person.elProgressBarHP.style.width = 100 + '%';
}

// function renderLvl(person) {
// }

// function renderName(person) {
// }

// function renderHP(person) {
// }

// function renderProgressBarHP(person) {
// }

function damaging(count, person) {
    if (person.currentHP <= count) {
        person.currentHP = 0;
        alert(person.name + ' - Проиграл!')
        kickBtn.disabled = true;
    } else {
        person.currentHP -= count;
    }

    person.elHP.textContent = person.currentHP + ' / ' + person.defaultHP;
    person.elProgressBarHP.style.width = (person.currentHP / person.defaultHP * 100) + '%';
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

kickBtn.addEventListener('click', function () {
    console.log('Kick');
    damaging(random(20), character);
    damaging(random(20), enemy);
});



init();