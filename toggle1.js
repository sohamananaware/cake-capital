var sidebar1= document.querySelector(".sidebar").querySelectorAll("li")

sidebar1.forEach(element =>{
    element.addEventListener('click',function(){
        sidebar1.forEach(sidebar.classList.toggle('showsidebar'))
    })
})

