var togglebtn= document.querySelector(".togglebtn")
var closebtn= document.querySelector(".close")
var sidebar= document.querySelector(".sidebar")


togglebtn.addEventListener("click",()=>{
    sidebar.classList.toggle("showsidebar")
})
closebtn.addEventListener("click",()=>{
    sidebar.classList.toggle("showsidebar")
})


