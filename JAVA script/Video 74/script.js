let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
document.querySelector(".box").innerHTML="<b> wohh! you were clicked</b> enjoy your click"
})

button.addEventListener("contextmenu", ()=>{
    alert(" dont click right side of mouse")
    })

   document.addEventListener("keydown", (e)=>{
        console.log(e.key , e.keyCode )      
        })