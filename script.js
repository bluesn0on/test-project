let maintext = document.getElementById('maintext');
let grass = document.getElementById('grass');
let city1 = document.getElementById('city1');
let city2 = document.getElementById('city2');
let city3 = document.getElementById('city3');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let skybox = document.getElementById('skybox');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    maintext.style.marginTop = value * 2.5 + 'px';
});