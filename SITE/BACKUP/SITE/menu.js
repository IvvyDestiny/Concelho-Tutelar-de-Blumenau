// menu.js - Script padrão do menu burger para todas as páginas
// Alteração: Centralização do JS do menu burger
function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    const burger = document.querySelector('.menu-burger');
    menu.classList.toggle('active');
    burger.classList.toggle('active');
}
// Botão de info e scroll para o topo (centralizado)
function showInfo() {
    alert('Este site foi criado como parte do projeto de extensão da Uniasselvi pelos alunos Ivan, GP e William.');
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
