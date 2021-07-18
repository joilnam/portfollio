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
    scrollIntoView(link);
})

//Handle click on 'contact me ' button on home

const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact')
})

// Make home slowly to transparent as the window scrolls down
const home=document.querySelector('.home__container');
const homeHeight=home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
   home.style.opacity = 1-window.scrollY/homeHeight;
});

//show "arrow up" btn when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY>homeHeight/2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
})

//Handle click on the 'arrow up' btn
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});








function scrollIntoView(selector){
    const scrollTo=document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
}


