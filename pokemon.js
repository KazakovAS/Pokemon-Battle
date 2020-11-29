// import $getElById from "./utils.js"

// const $btn = $getElById('btn-water-gun');
// const $btn2 = $getElById('btn-kick');

class Selectors {
    constructor(name) {
        this.elName = document.getElementById(`name-${name}`);
        // this.elImg = document.getElementById(`name-${name}`);
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, hp, type, selectors, attacks = [] }) {
        super(selectors);

        this.name = name;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;

        this.renderName();
        this.renderHP();
    }

    changeHP = (count, cb) => {
        this.hp.current -= count;

        if (this.hp.current <= 0) {
            this.hp.current = 0;

            alert('Бедный ' + this.name + ' проиграл бой!');
            $btn.disabled = true;
            $btn2.disabled = true;
        }

        this.renderHP();
        cb && cb(count);
    }

    renderHP = () => {
        this.renderHPLife();
        this.renderProgressbarHP();
    }

    renderName = () => {
        const { elName } = this;

        elName.innerText = this.name;
    }

    renderHPLife = () => {
        const { elHP, hp: { current, total } } = this;

        elHP.innerText = current + ' / ' + total;
    }

    renderProgressbarHP = () => {
        const { hp: { current, total }, elProgressbar } = this;
        const procent = current / (total / 100);
        elProgressbar.style.width = procent + '%';
    }
}

export default Pokemon;