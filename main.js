function $getElById(id) {
    return document.getElementById(id);
}

const kickBtn = $getElById('btn-kick');
const watergunBtn = $getElById('btn-watergun');

const character = {
    name: "Squirtle",
    lvl: 4,
    defaultHP: 120,
    currentHP: 120,
    elLvl: $getElById('lvl-character'),
    elName: $getElById('name-character'),
    elHP: $getElById('health-character'),
    elProgressBarHP: $getElById('progressbar-character')
}

const enemy = {
    name: "Rattata",
    lvl: 2,
    defaultHP: 90,
    currentHP: 90,
    elLvl: $getElById('lvl-enemy'),
    elName: $getElById('name-enemy'),
    elHP: $getElById('health-enemy'),
    elProgressBarHP: $getElById('progressbar-enemy')
}

function init() {
    console.log("Start Game");

    renderPerson(character);
    renderPerson(enemy);
}

function renderPerson(person) {
    person.elLvl.textContent = person.lvl;
    person.elName.textContent = person.name;
    person.elHP.textContent = person.currentHP + ' / ' + person.defaultHP;
    person.elProgressBarHP.style.width = 100 + '%';
}

function damaging(count, person) {
    if (person.currentHP <= count) {
        person.currentHP = 0;

        alert(person.name + ' - Проиграл!')
        kickBtn.disabled = true;
        watergunBtn.disabled = true;
    } else {
        person.currentHP -= count + person.lvl;
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

watergunBtn.addEventListener('click', function () {
    console.log('watergun');
    damaging(random(40), enemy);
});





init();