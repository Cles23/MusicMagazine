//----I GOT THIS CODE FROM DIFFERENT VIDEOS, IT IS NOT MINE----
const menu = document.querySelector('.toggle-button')
const menuLinks = document.querySelector('.nav__links ul')
const menuButton = document.querySelector('.contact_button')
// const button = document.querySelector('button')

menu.addEventListener('click', function(){
    menu.classList.toggle('active')
    menuLinks.classList.toggle('active')
    menuButton.classList.toggle('active')
    // button.classList.toggle('active')
})
//----END OF I GOT THIS CODE FROM DIFFERENT VIDEOS, IT IS NOT MINE----
//SCROLL POSITION
const body = document.body;
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")){
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")){
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }



    lastScroll = currentScroll;
})