const pg = document.querySelector('.playground');

pg.onclick = function(event) {
    let target = event.target; // где был клик?
    if (target.tagName != 'BUTTON') return; // не на TD? тогда не интересует

    count()
};

function count() {
    counter = 0;

    return function () {
        counter += 1;
        console.log(counter)
    }
};