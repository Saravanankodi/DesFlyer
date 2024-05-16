let selection = document.querySelectorAll('div')
let navigation = document.querySelectorAll('selection nav ul li a')
// const nav_height = document.querySelector('nav-bar').offsetHeight;


const popupoverlay =document.querySelector(".popup-overlay");
const skip_btn =document.querySelector(".popup-container .skip-btn");
const link_btn =document.querySelector(".popup-container .link-btn");

let remining_time = 3;
let allow_to_skip = false;
let popup_timer;

const show_ad = () =>{
    popupoverlay.classList.add("active");
    popup_timer = setInterval(() => {

        skip_btn.innerHTML = `Skip in ${remining_time} s`;
        remining_time--;
        if (remining_time < 0) {
            allow_to_skip = true;
            skip_btn.innerHTML = "skip";
            clearInterval(popup_timer);
        }
    },1000);
    
}
const skip_ad = () =>{
    popupoverlay.classList.remove("active");
}

skip_btn.addEventListener("click",() => {
    if (allow_to_skip) {
        skip_ad();
    }
});


const start_timer =() => {

    show_ad();
    window.removeEventListener("DOMContentLoaded",start_timer);

}

window.addEventListener("DOMContentLoaded",start_timer);

window.onscroll = () => {
    selection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        

        if (top>= offset && top < offset + height){
            navigation.forEach(links => {
                links.classList.remove('active');
                document.querySelector('navigation[href*=' + id +']').classList.add('active')
            });
        };
    })
}
// document.documentElement.style.setProperty('--scroll-padding '+ nav_height + 'px')