var selectquantity = document.querySelector('.selectquantity').querySelectorAll("p")
selectquantity.forEach(element1 =>{
    element1.addEventListener('click',function(){
        selectquantity.forEach(nav=>nav.classList.remove('active'))
        this.classList.add('active')
    })
})