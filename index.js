var button3=document.getElementById("button3");
var bg1=document.getElementsByClassName("bg-modal")[0];
button3.addEventListener("click", function()
{
    bg1.style.display= "flex";
})
document.getElementsByClassName("close")[0].addEventListener("click",function()
{
bg1.style.display="none";
})