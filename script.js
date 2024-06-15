document.addEventListener('DOMContentLoaded', (event) => {
    const toggle = document.getElementById('darkmode-toggle');
    const body = document.body;
    const homePage = document.querySelector('.home_page');
    const logoImg = document.querySelector('.logo_img');
    

    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            body.classList.add('dark-mode');
            homePage.classList.add('dark-mode');
            body.classList.remove('light-mode');
            homePage.classList.remove('light-mode');
            logoImg.src = './img/alarado-icon-homepage-dark.svg'; // Imagem do logo para o modo escuro
        } else {
            body.classList.add('light-mode');
            homePage.classList.add('light-mode');
            body.classList.remove('dark-mode');
            homePage.classList.remove('dark-mode');
            logoImg.src = './img/alarado-icon-homepage.svg'; // Imagem do logo para o modo claro
        }
    });

 
});