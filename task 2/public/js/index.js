const category_boxes  = document.querySelectorAll(".category_boxes");


category_boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.transform = "translateZ(20px)"
    })
    
    box.addEventListener("mouseout", () => {
        box.style.transform = "translateZ(0px)"
    })
})
const select=document.querySelector(".hero_container");
const select_div=select.querySelectorAll("div");
const about_page=document.getElementById("about");

about_page.addEventListener("onclick",()=>{
    select_div.forEach( x => {
        if(x.style.display==="block")
        {
            console.log("display none");
        }
        else{
            console.log("display block");
        }
    
    })
})


const featureBtns = document.querySelectorAll(".feature_slider_btn");
const featureWrapper = document.querySelector(".featuresWrapper");
const menuList = document.querySelector(".menuList");
const checkbtn = document.querySelector(".checkbtn");

featureBtns.forEach((item,index) => {
    item.addEventListener("click", () => {
        featureWrapper.style.transform = `translateX(${-80 * index}vw)`;
    })
})

const mediaQuery = window.matchMedia('(min-width: 850px)');

function handleMediaQueryChange(e) {
    if (e.matches) {
        menuList.style.display = "flex";
    } else {
        menuList.style.display = "block";
    }
}

handleMediaQueryChange(mediaQuery);


    menuList.addEventListener('change', function() {
        handleMediaQueryChange(mediaQuery)})

checkbtn.addEventListener("click" , () => {
    if(menuList.style.display == "flex") {
    menuList.style.display = "none";
}
else {
    menuList.style.display = "flex";
}
})  
