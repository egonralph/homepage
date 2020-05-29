const name = 'Rafał';
const lastName = 'Duma';
const age = 38;
const year = 2016;
const userName = 'Frankie';

const heading = document.querySelector('.section__paragraph--js');
heading.innerHTML = 'Witaj ' + userName + ', jak się masz? Nazywam się ' + name + ' ' + lastName + ' i zajmuję sie frontedem od ' + year + ' roku.'


console.log(`Witaj ${userName}, jak się masz? Nazywam się ${name} ${lastName} i zajmuję sie frontedem od ${year} roku`);

function welcomeOld(age, name, lastName) {
    console.log(`Czesc, Nazywam się ${name} ${lastName} i mam ${age} lat`);
}
welcomeOld(15, 'Tomek', 'Sawyer');

const welcome = (age, name, lastName) =>{
    console.log(`Czesc, Nazywam się ${name} ${lastName} i mam ${age} lat`);
}
welcomeOld(24, 'Marysia', 'Konopnicka');

function addContent(querySelectorPage, contentPage) {
    const element = document.querySelector(querySelectorPage);
    element.innerHTML = contentPage;
}

addContent('.section__paragraph--js','Witaj na mojej stronie');