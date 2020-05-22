const name = 'Rafał';
const lastName = 'Duma';
const year = 2016;
const userName = 'Frankie';



const heading = document.querySelector('.section__paragraph--js');
heading.innerHTML = 'Witaj ' + userName + ', jak się masz? Nazywam się ' + name + ' ' + lastName + ' i uczę sie frontedu od ' + year + ' roku.'


console.log(`Witaj ${userName}, jak się masz? Nazywam się ${name} ${lastName} i uczę sie frontedu od ${year} roku`);