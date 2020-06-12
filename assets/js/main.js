const sidenav = document.querySelector('.sidemenu');
// window.addEventListener('r')
const toggler = (x) => {
    x.classList.toggle("change");
    sidenav.classList.toggle('active')

}


let readMore = document.getElementById("more");
let aboutSection = document.querySelector(".about-us-container");
let imagewrapper = document.querySelector(".about-image-wrapper");
let aboutImage = document.querySelector(".about-image");
let textCon = document.querySelector(".text-content");
let aboutText = document.querySelector(".about-us-text");


let displayReadMore = () => {
    aboutSection.classList.toggle("about-us-container-toggle")
    imagewrapper.classList.toggle("about-image-wrapper-toggle")
    aboutImage.classList.toggle("about-image-toggle")
    textCon.classList.toggle("text-content-toggle")
    aboutText.classList.toggle("about-us-text-toggle")
    
    if (aboutText.classList[1] == "about-us-text-toggle"){
        readMore.innerHTML = "CLOSE READ MORE"
    } else {
        readMore.innerHTML = "READ MORE"
    }
}


readMore.addEventListener("click", displayReadMore)