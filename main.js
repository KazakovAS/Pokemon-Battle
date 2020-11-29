import Pokemon from "./pokemon.js";
import random from "./random.js";
import countBtn from "./count.js";
// import $getElById from "./utils.js";
import generateLog from "./generateLog.js";
import { pokemons } from "./pokemons.js";

const squirtle = pokemons.find(item => item.name === 'Squirtle');
const pikachu = pokemons.find(item => item.name === 'Pikachu');


const player1 = new Pokemon({
    ...squirtle,
    selectors: 'player1',
})


const player2 = new Pokemon({
    ...pikachu,
    selectors: 'player2',
})

const $control = document.querySelector('.control');

player1.attacks.forEach(item => {
    const $btn = document.createElement('button');
    $btn.classList.add('button');
    $btn.innerText = item.name;

    const btnCount = countBtn(item.maxCount, $btn);

    $btn.addEventListener('click', () => {
        btnCount();

        player1.changeHP(random(20), function (count) {
            console.log(generateLog(player1, player2, count));
        });
        player2.changeHP(random(60, 20), function (count) {
            console.log(generateLog(player2, player1, count));
        });
    })

    $control.appendChild($btn);
});

