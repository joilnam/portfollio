'use strict'

// Make navbar 상단 위치할때 투명, 내려오면 1페이지 색으로
const navbar =document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
});

//navbar 클릭시 원하는 id 추출

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target =event.target;
    const link =target.dataset.link;
    if(link==null){
        return;
    }
    const scrollTo=document.querySelector(link);
    scrollTo.scrollIntoView({behavior:'smooth'});
})
