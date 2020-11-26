import Pokemon from "./pokemon.js";
import random from "./random.js"
import countBtn from "./count.js"
import $getElById from "./utils.js"
import generateLog from "./generateLog.js"


const player1 = new Pokemon({
    name: 'Squirtle',
    type: 'water',
    hp: 150,
    selectors: 'character',
})

const player2 = new Pokemon({
    name: 'Ratatta',
    type: 'normal',
    hp: 100,
    selectors: 'enemy',
})

const $btn = $getElById('btn-water-gun');
const $btn2 = $getElById('btn-kick');

const btnWaterGun = countBtn(10, $btn);
$btn.addEventListener('click', function () {
    btnWaterGun();
    player1.changeHP(random(60, 20), function (count) {
        console.log(generateLog(player1, player2, count));
    });
    player2.changeHP(random(60, 20), function (count) {
        console.log(generateLog(player2, player1, count));
    });
})

const btnKick = countBtn(10, $btn2);
$btn2.addEventListener('click', function () {
    btnKick();
    player1.changeHP(random(20), function (count) {
        console.log(generateLog(player1, player2, count));
    });
    player2.changeHP(random(20), function (count) {
        console.log(generateLog(player2, player1, count));
    });
})