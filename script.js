const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


//show nav
toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-nav');
    const icon = document.querySelector('i');
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-arrow-left');
    }else{
        icon.classList.remove('fa-arrow-left');
        icon.classList.add('fa-bars');
        
    }
});

//modal pop
open.addEventListener('click', () => modal.classList.add('show-modal'));


close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal'):false);


