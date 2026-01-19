let maintext1 = document.getElementById('maintext1');
let maintext2 = document.getElementById('maintext2');
let grass = document.getElementById('grass');
let city1 = document.getElementById('city1');
let city2 = document.getElementById('city2');
let city3 = document.getElementById('city3');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let skybox = document.getElementById('skybox');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    maintext1.style.marginTop = value * 1.5 + 'px';
    maintext2.style.top = value * 1 + 'px';
    grass.style.top = value * -0.3 + 'px';
    city1.style.top = value * -0.2 + 'px';
    city2.style.top = value * -0.3 + 'px';
    city3.style.top = value * -0.2 + 'px';
    cloud1.style.left = value * -0.5 + 'px';
    cloud2.style.left = value * 0.5 + 'px';
});