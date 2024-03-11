const burgerMenuBtn = document.getElementById('burgerMenu');
const sidebarMenu = document.getElementById('sidebarMenu');
const menu = document.getElementById('menu');



burgerMenuBtn.addEventListener('click', () => {
  if(burgerMenuBtn.classList.contains('active')){
    closeSidebar();
    return
  }

  openSidebar();
});

sidebarMenu.addEventListener('click', (e) => {
  if(e.target === sidebarMenu){
    closeSidebar();
  }
})

function openSidebar(){
  burgerMenuBtn.classList.add('active');
  sidebarMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar(){
  burgerMenuBtn.classList.remove('active');
  sidebarMenu.classList.remove('active');
  document.body.style.overflow = 'auto';
}