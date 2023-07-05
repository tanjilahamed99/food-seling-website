let menu = document.querySelector('#menu');
let navber = document.querySelector('#navber');

menu.onclick = () => {
    menu.classList.toggle('fa-bars');
    navber.classList.toggle('active');
}

window.onscroll = () => {
    navber.classList.remove('active');
}



function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 2000);
}
window.onload = fadeOut;