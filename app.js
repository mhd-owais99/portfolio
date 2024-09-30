let skils = document.querySelector('.aboutResult');
let prj = document.querySelector('#prjRender');
let eduCheck = document.querySelector('#eduCheck');
let skilCheck = document.querySelector('#skilCheck');

let hmCheck = document.querySelector('#hmCheck');
let abCheck = document.querySelector('#abCheck');
let prCheck = document.querySelector('#prCheck');
let cnCheck = document.querySelector('#cnCheck');

let data = [
    resto = {
        keys: 1,
        check: 'resto',
        name: 'Resturant App',
        link: 'https://mhd-owais99.github.io/restaurant-app/',
        imgSrc: './content/images/restro-pic.png',
        aboutWeb: 'One page Resturent App design by usign Html, CSS and Bootstrap'
    },
    decor = {
        keys: 2,
        check: 'decor',
        name: 'Home Decor',
        link: 'https://mhd-owais99.github.io/homeStyler/',
        imgSrc: './content/images/decor.png',
        aboutWeb: 'A Home Decor website develop by using Html, CSS, Bootstrap, Javascript and a bit of jQuery and aos animation library'
    },
    quiz = {
        keys: 3,
        check: 'quiz',
        name: 'Quiz App',
        link: 'https://mdowais99.github.io/',
        imgSrc: './content/images/quiz-pic.png',
        aboutWeb: 'A simple Quiz App develop by using Html, CSS, Javascript and a bit of Bootstrap'
    },
    todo = {
        keys: 4,
        check: 'todo',
        name: 'ToDo App',
        link: 'https://mhd-owais99.github.io/todo-app/',
        imgSrc: './content/images/todo-pic.png',
        aboutWeb: 'A simple Todo App was created to practice Javascript'
    }
];


// ========    SKILLS RENDER   ========
const tecShow = () => {
    skils.innerHTML = `
    <li>React JS</li>
    <li>JavaScript</li>
    <li>HTML / CSS</li>
    <li>Bootstrap</li>
    <li>Git / Github</li>
    <li>Figma</li>
    `
    eduCheck.style.borderBottom = 'none';
    skilCheck.style.borderBottom = '#74FFFF 4px solid'
}
const eduShow = () => {
    skils.innerHTML = `
    <li>BS Computer Science</li>
    <p>&emsp; 2023</p>
    <li>Intermediate </li>
    <p>&emsp; 2018</p>
    <li>Matriculation</li>
    <p>&emsp; 2016</p>`
    skilCheck.style.borderBottom = 'none';
    eduCheck.style.borderBottom = '#74FFFF 4px solid'
}


// ========    PROJECT RENDER ==========
(
    function () {

        data.map(({ name, link, imgSrc, keys, check, aboutWeb }) => {

            prj.innerHTML += `<div id="prCardId" class="car text-white col-12 col-md-6 mb-lg-5 mb-md-4 mb-sm-3 mb-4 text-center softLeftAni" onclick="how(${check})" style="background-image: url(${imgSrc});">
            <div class="inCar">
                    <h1 class="text-center pb-2 pt-4 bCol">${name}</h1>
                    <p class='py-4 pb-4'>${aboutWeb}</p>
                        <button class="downBtn rounded-pill" id="visitBtn" )'>Demo</button>
                </div>
        </div>`
        })
    }


)();

const how = (an) => {
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = `${an.link}`;
    a.click();
}


// ===========     scroll   ========
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2000,
    delay: 50
});
ScrollReveal().reveal('.topAni ', { origin: 'top' });
ScrollReveal().reveal('.bottomAni', { origin: 'bottom' });
ScrollReveal().reveal('.leftAni', { origin: 'left' });
ScrollReveal().reveal('.rightAni', { origin: 'right' });

ScrollReveal({
    //  reset: true,
    distance: '30px',
    duration: 1600,
    delay: 30
});
ScrollReveal().reveal('.softTopAni', { origin: "top" })
ScrollReveal().reveal('.softLeftAni', { origin: "left" })
ScrollReveal().reveal('.softBottomAni', { origin: "bottom" })
ScrollReveal().reveal('.softRightAni', { origin: "right" })


// ======  TYPE-Text   =====
setTimeout(() => {
    const typed = new Typed('.multi-text', {
        strings: ['Frontend Developer', 'React Js Developer', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });

}, 800);


// ======  LINKS BORDER CHECK    ======
const linkBorderCheck = (something) => {
    if (something === "home") {
        hmCheck.style.borderBottom = "#74FFFF 4px solid"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'about') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "#74FFFF 4px solid"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'project') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "#74FFFF 4px solid"
        cnCheck.style.borderBottom = "none"
    } else if (something === 'contact') {
        hmCheck.style.borderBottom = "none"
        abCheck.style.borderBottom = "none"
        prCheck.style.borderBottom = "none"
        cnCheck.style.borderBottom = "#74FFFF 4px solid"
    }
}


function myFun(win) {
    if (win.matches) {

        window.addEventListener('scroll', function () {
            if (window.pageYOffset < 400) {
                hmCheck.style.borderBottom = "#74FFFF 4px solid"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "none"
            } else if (window.pageYOffset > 400 && this.window.pageYOffset < 1100) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "#74FFFF 4px solid"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "none"

            } else if (window.pageYOffset > 1100 && this.window.pageYOffset < 1700) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "#74FFFF 4px solid"
                cnCheck.style.borderBottom = "none"
            } else if (window.pageYOffset > 1700) {
                hmCheck.style.borderBottom = "none"
                abCheck.style.borderBottom = "none"
                prCheck.style.borderBottom = "none"
                cnCheck.style.borderBottom = "#74FFFF 4px solid"
            }
        }, true);
    } else {
        console.log('screen width is min')
        // window.addEventListener('scroll', function () {
        //     if (window.pageYOffset < 800) {
        //         hmCheck.style.borderBottom = "#74FFFF 4px solid"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "none"
        //     } else if (window.pageYOffset > 800 && this.window.pageYOffset < 1500) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "#74FFFF 4px solid"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "none"

        //     } else if (window.pageYOffset > 1600 && this.window.pageYOffset < 2400) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "#74FFFF 4px solid"
        //         cnCheck.style.borderBottom = "none"
        //     } else if (window.pageYOffset > 2400) {
        //         hmCheck.style.borderBottom = "none"
        //         abCheck.style.borderBottom = "none"
        //         prCheck.style.borderBottom = "none"
        //         cnCheck.style.borderBottom = "#74FFFF 4px solid"
        //     }
        // }, true);
    }
}
let win = window.matchMedia('(width >700px)')
myFun(win)
win.addEventListener('onload', myFun)


const download = () => {
    let a = document.createElement('a')
    let url = "./content/MHD Owais.pdf"
    a.href = url
    a.download = 'MHD-Cv'
    document.body.appendChild(a)
    a.click()
    // document.body.removeChild(a)
}