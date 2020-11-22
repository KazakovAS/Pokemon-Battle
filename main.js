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
    elProgressBarHP: $getElById('progressbar-character'),
    damaging: damaging,
    renderPerson: renderPerson
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

    if (this.currentHP <= count) {
        this.currentHP = 0;
        alert(this.name + ' - Проиграл!')
        kickBtn.disabled = true;
        watergunBtn.disabled = true;
    }

    this.elHP.textContent = this.currentHP + ' / ' + this.defaultHP;
    this.elProgressBarHP.style.width = (this.currentHP / this.defaultHP * 100) + '%';
}

function random(num) {
    return Math.ceil(Math.random() * num)
}

kickBtn.addEventListener('click', function () {
    console.log('Kick');
    character.damaging(random(20));
    enemy.damaging(random(20));
});

watergunBtn.addEventListener('click', function () {
    console.log('watergun');
    enemy.damaging(random(40));
});





init();