// Esconder a barra de navegação
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Seções de scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Ativar os links da navbar
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
            // Ativando seções para a animação no scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });


    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remover o ícone de menu e a navbar quando clicar em um dos diretórios
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animar o footer
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}