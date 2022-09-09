let toggle;
let big_wrapper;
const main=document.querySelector('main');
let hamburger_menu;
let dark=false;
function declare(){
    toggle=document.querySelector('.toggle-btn');
    big_wrapper=document.querySelector('.big-wrapper');
    hamburger_menu=document.querySelector('.hamburger-menu');
}

declare();
function toggleAnimation(){
    //clone the wrapper
    dark=!dark;
    let clone=big_wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);
    clone.addEventListener("animationend",()=>{
        big_wrapper.remove();
        clone.classList.remove("copy");
        //reset variable
        declare();
        events();
    })
}
function events(){
    toggle.addEventListener('click',toggleAnimation);
    hamburger_menu.addEventListener("click",()=>{
        big_wrapper.classList.toggle("active");
    })
}
events();