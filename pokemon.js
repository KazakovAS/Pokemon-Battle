// const $control = document.querySelector('.control');

class Selectors {
    constructor(name) {
        this.elName = document.getElementById(`name-${name}`);
        this.elImg = document.getElementById(`img-${name}`);
        this.elHP = document.getElementById(`health-${name}`);
        this.elProgressbar = document.getElementById(`progressbar-${name}`);
    }
}

class Pokemon extends Selectors {
    constructor({ name, img, hp, type, selectors, attacks = [] }) {
        super(selectors);

        this.name = name;
        this.img = img;
        this.hp = {
            current: hp,
            total: hp,
        };
        this.type = type;
        this.attacks = attacks;

        this.renderName();
        this.renderImg();
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

    renderImg = () => {
        const { elImg } = this;

        elImg.src = this.img;
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