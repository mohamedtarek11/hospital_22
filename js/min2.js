var settingcolor=document.querySelector(".setting-color");
var nav=document.querySelector(".navcolor");
var navimg=document.querySelector(".navimg");
var bbt =document.querySelector(".bbt");
var sectiontexth=document.querySelector(".section-texth");
var sectiontextp=document.querySelector(".section-textp");
var btnrange=document.querySelector(".btnrange");
btnrange.oninput=function(){
    sectiontextp.style.fontSize=btnrange.value+"px";
}

bbt.onclick=function(){
     nav.style.backgroundColor=settingcolor.value;
    sectiontexth.style.color=settingcolor.value
    sectiontextp.style.color=settingcolor.value
}
var navcolor=document.querySelector(".navcolor")
var navimg=document.querySelector(".navimg")


var section3right=document.querySelector(".section3-right");
var section3left=document.querySelector(".section3-left");
var section4pos1=document.querySelector(".section4pos1");
var  section4pos2=document .querySelector(" .section4pos2");
var section4ff=document.querySelector(".section4-fade");
var seth=document.querySelector(".seth");
var btnarr=document.querySelector("#btnarr");
window.onscroll=function(){
if(pageYOffset>=370){
    section3right.style.position="relative";
    section3left.style.position="relative";
    section3right.style.right="0"
    section3left.style.left="0"
}

if(pageYOffset>=98){
    navcolor.style.position="fixed";
    navcolor.style.left="0px"; 
    navcolor.style.zIndex=999;
    navcolor.style.width="100%"
    navcolor.style.top="0px"
}
else{
    navcolor.style.position="relative"   
}
if(pageYOffset>850){
    section4pos1.style.position="relative" 
    section4pos1.style.left=0
    section4pos2.style.position="relative"
    section4pos2.style.right=0
    section4ff.style.position="relative"
    section4ff.style.left=0

}
if(pageYOffset>=400){
    btnarr.style.display="block"
    btnarr.style.zIndex="10000"
}
else{
    btnarr.style.display="none"
}

}
 btnarr.addEventListener("click" ,function(){
     window.scroll({
         top: 0,
         left:0,
         behavior:"smooth"

     })

 })

  // =======================================================================================================
        /**كل الحكايه ان انا عملت functionو  */
        /**حطيت فيها ال setinterval */
        /**عملت زرار يتحكم فيها */
 var xxclear;
 var backgroundOption=true;
var sectionimg=document.querySelector(".sectionimg");
  
var randomback=document .querySelectorAll(".random-back span");
randomback.forEach(span=>{
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach(element=>{
            element.classList.remove("active")
        })
        e.target.classList.add("active")
        if(e.target.dataset.background === 'yes'){
            var backgroundOption=true
            
            randomizeimg();
        }
        else{
            var backgroundOption=false
            clearInterval(xxclear)

        }
    })
})

var arrimg=["images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg"]
function randomizeimg(){
if(backgroundOption===true){
  xxclear=setInterval(function(){
              var random=Math.floor(Math.random()*arr.length)
        sectionimg.style.backgroundImage='url('+arr[random]+')';

    },2000)
}
}
// ====================================================================