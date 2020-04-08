'use strict';

let main = document.querySelector(' .main');
const desmondBlock = document.querySelector(' .desmond-block');
const altairBlock = document.querySelector(' .altair-block');
const ezioBlock = document.querySelector(' .ezio-block');
const connorBlock = document.querySelector(' .connor-block');
const edwardBlock = document.querySelector(' .edward-block');
let emptyBlock = document.querySelector(' .empty-block');
let element1 = document.querySelector(' .element1');
let element2 = document.querySelector(' .element2');
let element3 = document.querySelector(' .element3');
let element4 = document.querySelector(' .element4');
let element5 = document.querySelector(' .element5');

let callDesmond = function getCallDesmond(event) {
    if (desmondBlock.classList.contains('block-active')) {
        desmondBlock.classList.add('scale-out-center');
        desmondBlock.classList.remove('scale-in-center');
        setTimeout(function () {
            desmondBlock.classList.remove('block-active');
            main.classList.remove('desmond-choose');
            emptyBlock.classList.remove('bounceOutDown');
            emptyBlock.classList.add('empty-block-active', 'animated', 'bounceInDown');
        }, 550);
    } else {
        emptyBlock.classList.add('bounceOutDown');
        altairBlock.classList.add('scale-out-center');
        ezioBlock.classList.add('scale-out-center');
        connorBlock.classList.add('scale-out-center');
        edwardBlock.classList.add('scale-out-center');
        setTimeout(function () {
            main.classList.add('desmond-choose');
            main.classList.remove('altair-choose');
            main.classList.remove('ezio-choose');
            main.classList.remove('connor-choose');
            main.classList.remove('edward-choose');
            desmondBlock.classList.remove('scale-out-center');
            desmondBlock.classList.add('block-active', 'animated', 'scale-in-center');
            altairBlock.classList.remove('block-active');
            ezioBlock.classList.remove('block-active');
            connorBlock.classList.remove('block-active');
            edwardBlock.classList.remove('block-active');
        }, 550);
        setTimeout(function () {
            emptyBlock.classList.add('bounceOutDown');
            emptyBlock.classList.remove('bounceInDown');
            emptyBlock.classList.remove('empty-block-active');
        }, 550);
        event.stopPropagation();
    }
};


let callAltair = function getCallAltair(event) {
    if (altairBlock.classList.contains('block-active')) {
        altairBlock.classList.add('scale-out-center');
        altairBlock.classList.remove('scale-in-center');
        setTimeout(function () {
            altairBlock.classList.remove('block-active');
            main.classList.remove('altair-choose');
            emptyBlock.classList.remove('bounceOutDown');
            emptyBlock.classList.add('empty-block-active', 'animated', 'bounceInDown');
        }, 1000);

    } else {
        emptyBlock.classList.add('bounceOutDown');
        desmondBlock.classList.add('scale-out-center');
        ezioBlock.classList.add('scale-out-center');
        connorBlock.classList.add('scale-out-center');
        edwardBlock.classList.add('scale-out-center');
        setTimeout(function () {
            main.classList.add('altair-choose');
            main.classList.remove('desmond-choose');
            main.classList.remove('ezio-choose');
            main.classList.remove('connor-choose');
            main.classList.remove('edward-choose');
            altairBlock.classList.remove('scale-out-center');
            altairBlock.classList.add('block-active', 'animated', 'scale-in-center');
            desmondBlock.classList.remove('block-active');
            ezioBlock.classList.remove('block-active');
            connorBlock.classList.remove('block-active');
            edwardBlock.classList.remove('block-active');
        }, 1000);
        setTimeout(function () {
            emptyBlock.classList.add('bounceOutDown');
            emptyBlock.classList.remove('bounceInDown');
            emptyBlock.classList.remove('empty-block-active');
        }, 550);
        event.stopPropagation();
    }
};


let callEzio = function getCallEzio(event) {
    if (ezioBlock.classList.contains('block-active')) {
        ezioBlock.classList.add('scale-out-center');
        ezioBlock.classList.remove('scale-in-center');
        setTimeout(function () {
            ezioBlock.classList.remove('block-active');
            main.classList.remove('ezio-choose');
            emptyBlock.classList.remove('bounceOutDown');
            emptyBlock.classList.add('empty-block-active', 'animated', 'bounceInDown');
        }, 1000);
    } else {
        emptyBlock.classList.add('bounceOutDown');
        altairBlock.classList.add('scale-out-center');
        desmondBlock.classList.add('scale-out-center');
        connorBlock.classList.add('scale-out-center');
        edwardBlock.classList.add('scale-out-center');
        setTimeout(function () {
            main.classList.add('ezio-choose');
            main.classList.remove('altair-choose');
            main.classList.remove('desmond-choose');
            main.classList.remove('connor-choose');
            main.classList.remove('edward-choose');
            ezioBlock.classList.remove('scale-out-center');
            ezioBlock.classList.add('block-active', 'animated', 'scale-in-center');
            altairBlock.classList.remove('block-active');
            desmondBlock.classList.remove('block-active');
            connorBlock.classList.remove('block-active');
            edwardBlock.classList.remove('block-active');
        }, 1000);
        setTimeout(function () {
            emptyBlock.classList.add('bounceOutDown');
            emptyBlock.classList.remove('bounceInDown');
            emptyBlock.classList.remove('empty-block-active');
        }, 550);
        event.stopPropagation();
    }
};


let callConnor = function getCallConnor(event) {
    if (connorBlock.classList.contains('block-active')) {
        connorBlock.classList.add('scale-out-center');
        connorBlock.classList.remove('scale-in-center');
        setTimeout(function () {
            connorBlock.classList.remove('block-active');
            main.classList.remove('connor-choose');
            emptyBlock.classList.remove('bounceOutDown');
            emptyBlock.classList.add('empty-block-active', 'animated', 'bounceInDown');
        }, 1000);
    } else {
        emptyBlock.classList.add('bounceOutDown');
        altairBlock.classList.add('scale-out-center');
        ezioBlock.classList.add('scale-out-center');
        desmondBlock.classList.add('scale-out-center');
        edwardBlock.classList.add('scale-out-center');
        setTimeout(function () {
            main.classList.add('connor-choose');
            main.classList.remove('altair-choose');
            main.classList.remove('ezio-choose');
            main.classList.remove('desmond-choose');
            main.classList.remove('edward-choose');
            connorBlock.classList.remove('scale-out-center');
            connorBlock.classList.add('block-active', 'animated', 'scale-in-center');
            altairBlock.classList.remove('block-active');
            ezioBlock.classList.remove('block-active');
            desmondBlock.classList.remove('block-active');
            edwardBlock.classList.remove('block-active');
        }, 1000);
        setTimeout(function () {
            emptyBlock.classList.add('bounceOutDown');
            emptyBlock.classList.remove('bounceInDown');
            emptyBlock.classList.remove('empty-block-active');
        }, 550);
        event.stopPropagation();
    }
};


let callEdward = function getCallEdward(event) {
    if (edwardBlock.classList.contains('block-active')) {
        edwardBlock.classList.add('scale-out-center');
        edwardBlock.classList.remove('scale-in-center');
        emptyBlock.classList.remove('bounceOutDown');
        setTimeout(function () {
            edwardBlock.classList.remove('block-active');
            main.classList.remove('edward-choose');
            emptyBlock.classList.add('empty-block-active', 'animated', 'bounceInDown');
        }, 1000);
    } else {
        emptyBlock.classList.add('bounceOutDown');
        altairBlock.classList.add('scale-out-center');
        ezioBlock.classList.add('scale-out-center');
        connorBlock.classList.add('scale-out-center');
        desmondBlock.classList.add('scale-out-center');
        setTimeout(function () {
            main.classList.add('edward-choose');
            main.classList.remove('altair-choose');
            main.classList.remove('ezio-choose');
            main.classList.remove('connor-choose');
            main.classList.remove('desmond-choose');
            edwardBlock.classList.remove('scale-out-center');
            edwardBlock.classList.add('block-active', 'animated', 'scale-in-center');
            altairBlock.classList.remove('block-active');
            ezioBlock.classList.remove('block-active');
            desmondBlock.classList.remove('block-active');
            connorBlock.classList.remove('block-active');
        }, 1000);
        setTimeout(function () {
            emptyBlock.classList.add('bounceOutDown');
            emptyBlock.classList.remove('bounceInDown');
            emptyBlock.classList.remove('empty-block-active');
        }, 550);
        event.stopPropagation();
    }
};


element1.addEventListener('click', callDesmond);
element2.addEventListener('click', callAltair);
element3.addEventListener('click', callEzio);
element4.addEventListener('click', callConnor);
element5.addEventListener('click', callEdward);

const modalDesmond = document.querySelector(' .wrap-desmond');
const closeBtnDesmond = document.querySelector(' .span-desmond');

closeBtnDesmond.addEventListener('click', function (event) {
    modalDesmond.classList.remove('scale-in-ver-center');
    modalDesmond.classList.add('scale-out-vertical');
    setTimeout(function () {
        modalDesmond.classList.add('hidden-desmond');
    }, 1000);
    event.stopPropagation();
});

desmondBlock.addEventListener('click', function () {
    modalDesmond.classList.remove('hidden-desmond', 'scale-out-vertical');
    modalDesmond.classList.add('animated', 'scale-in-ver-center');
});

const modalAltair = document.querySelector(' .wrap-altair');
const closeBtnAltair = document.querySelector(' .span-altair');

closeBtnAltair.addEventListener('click', function (event) {
    modalAltair.classList.remove('scale-in-ver-center');
    modalAltair.classList.add('scale-out-vertical');
    setTimeout(function () {
        modalAltair.classList.add('hidden-altair');
    }, 1000);
    event.stopPropagation();
});

altairBlock.addEventListener('click', function () {
    modalAltair.classList.remove('hidden-altair', 'scale-out-vertical');
    modalAltair.classList.add('animated', 'scale-in-ver-center');
});

const modalEzio = document.querySelector(' .wrap-ezio');
const closeBtnEzio = document.querySelector(' .span-ezio');

closeBtnEzio.addEventListener('click', function (event) {
    modalEzio.classList.remove('scale-in-ver-center');
    modalEzio.classList.add('scale-out-vertical');
    setTimeout(function () {
        modalEzio.classList.add('hidden-ezio');
    }, 1000);
    event.stopPropagation();
});

ezioBlock.addEventListener('click', function () {
    modalEzio.classList.remove('hidden-ezio', 'scale-out-vertical');
    modalEzio.classList.add('animated', 'scale-in-ver-center');
});

const modalConnor = document.querySelector(' .wrap-connor');
const closeBtnConnor = document.querySelector(' .span-connor');

closeBtnConnor.addEventListener('click', function (event) {
    modalConnor.classList.remove('scale-in-ver-center');
    modalConnor.classList.add('scale-out-vertical');
    setTimeout(function () {
        modalConnor.classList.add('hidden-connor');
    }, 1000);
    event.stopPropagation();
});

connorBlock.addEventListener('click', function () {
    modalConnor.classList.remove('hidden-connor', 'scale-out-vertical');
    modalConnor.classList.add('animated', 'scale-in-ver-center');
});

const modalEdward = document.querySelector(' .wrap-edward');
const closeBtnEdward = document.querySelector(' .span-edward');

closeBtnEdward.addEventListener('click', function (event) {
    modalEdward.classList.remove('scale-in-ver-center');
    modalEdward.classList.add('scale-out-vertical');
    setTimeout(function () {
        modalEdward.classList.add('hidden-edward');
    }, 1000);
    event.stopPropagation();
});

edwardBlock.addEventListener('click', function () {
    modalEdward.classList.remove('hidden-edward', 'scale-out-vertical');
    modalEdward.classList.add('animated', 'scale-in-ver-center');
});

let app = {
    run() {
        let footer = document.querySelector('footer');
        footer.classList.add('animated', 'scale-in-bottom');
        main.classList.add('animated', 'scale-in-center');
        let header = document.querySelector('header');
        header.classList.add('animated', 'scale-in-top');
        setTimeout(() => {
            footer.classList.remove('scale-in-bottom');
        }, 500);
        let gallery = document.querySelector(' .gallery');
        gallery.classList.add('animated', 'scale-in-hor-left');
    }
};

app.run();
