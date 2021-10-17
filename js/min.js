
var image=document.querySelector("#image")
var arr=["images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg"]
 var xx=setInterval(function(){
              var random=Math.floor(Math.random()*arr.length)
        image.style.backgroundImage='url('+arr[random]+')';
    
},2000)

var user=document.getElementById("user");
var inp=document.getElementById("inp");
user.onclick=function(){
    if(user.getAttribute("class")=="fas fa-eye-slash"){
inp.setAttribute("type","text");
user.setAttribute("class","far fa-eye" );
}
else{
    inp.setAttribute("type","password");
user.setAttribute("class","fas fa-eye-slash" );
var



























