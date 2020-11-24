function $getElById(id) {
    return document.getElementById(id);
}

const logs = document.querySelector('#logs');

const kickBtn = $getElById('btn-kick');
const watergunBtn = $getElById('btn-watergun');
const healPotionBtn = $getElById('btn-heal-potion');

const character = {
    name: "Squirtle",
    lvl: 4,
    defaultHP: 120,
    currentHP: 120,
    elLvl: $getElById('lvl-character'),
    elName: $getElById('name-character'),
    elHP: $getElById('health-character'),
    elProgressBarHP: $getElById('progressbar-character'),
    damaging: damaging,
    renderPerson: renderPerson,
    heal: heal
}

const enemy = {
    name: "Rattata",
    lvl: 2,
    defaultHP: 90,
    currentHP: 90,
    elLvl: $getElById('lvl-enemy'),
    elName: $getElById('name-enemy'),
    elHP: $getElById('health-enemy'),
    elProgressBarHP: $getElById('progressbar-enemy'),
    damaging: damaging,
    renderPerson: renderPerson
}

function init() {
    console.log("Start Game");

    character.renderPerson();
    enemy.renderPerson();
}

function renderPerson() {
    this.elLvl.textContent = this.lvl;
    this.elName.textContent = this.name;
    this.elHP.textContent = this.currentHP + ' / ' + this.defaultHP;
    this.elProgressBarHP.style.width = 100 + '%';
}

function damaging(count) {
    this.currentHP -= count + this.lvl;

    const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy)
    const logsItem = document.createElement('p');

    logsItem.textContent = `${log}`;
    logs.insertBefore(logsItem, logs.children[0]);

    if (this.currentHP <= count) {
        this.currentHP = 0;
        alert(this.name + ' - Проиграл!')
        kickBtn.disabled = true;
        watergunBtn.disabled = true;
        healPotionBtn.disabled = true;
    }

    this.elHP.textContent = this.currentHP + ' / ' + this.defaultHP;
    this.elProgressBarHP.style.width = (this.currentHP / this.defaultHP * 100) + '%';
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

function generateLog(firstPerson, secondPerson) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. [${firstPerson.currentHP} / ${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1];
}

function heal(count) {
    if (this.currentHP < this.defaultHP) {
        if (this.defaultHP - this.currentHP < count) {
            this.currentHP = this.defaultHP;
        } else {
            this.currentHP += count;
        }
    }

    this.elHP.textContent = this.currentHP + ' / ' + this.defaultHP;
    this.elProgressBarHP.style.width = (this.currentHP / this.defaultHP * 100) + '%';
}


kickBtn.addEventListener('click', function () {
    character.damaging(random(20));
    enemy.damaging(random(20));
});

watergunBtn.addEventListener('click', function () {
    enemy.damaging(random(40));
});

healPotionBtn.addEventListener('click', function () {
    character.heal(40);
});


const buttons = document.getElementsByTagName('button');

function makeCounter() {
    let currentCount = 1;

    return function() {
        return currentCount++;
    };
};

let clicker = function(e) {
    let value = this.counter();
    console.log(value);
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].counter = makeCounter();

    buttons[i].addEventListener('click', function (e) {
        clicker.apply(this)
    });
}








init();