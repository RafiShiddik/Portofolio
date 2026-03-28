const menu = document.querySelector('.nav-links');
const hamburgermenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgermenu.addEventListener('click', displayMenu);

// Also close menu when a link is clicked
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if(menu.classList.contains('active')) {
            displayMenu();
        }
    });
});

function displayMenu() {
    if(menu.classList.contains('active')) {
        menu.classList.remove('active');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('active');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}