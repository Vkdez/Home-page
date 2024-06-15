let btnMenu = document.getElementById('btn_menu')
let menu = document.getElementById('menu_mobile')
let over =document.getElementById('over')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open_menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open_menu')
})

over.addEventListener('click', ()=>{
    menu.classList.remove('open_menu')
})