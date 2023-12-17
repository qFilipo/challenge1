document.addEventListener("DOMContentLoaded",function(){
    const imgBtn = document.querySelectorAll('.plus')
    const allImg = document.querySelectorAll('.list-item')
    function unroll(){
        let listItem = this.closest('.list-item')
        let imgItem = this.closest('.plus')

        if (listItem.style.height == "auto"){
            reset()
        }

        else{
            reset()
            listItem.style.height = "auto"
            imgItem.src = "assets/images/icon-minus.svg"
        }
    }
    
    function reset(){
        allImg.forEach(div => div.style.height = '40px')
        imgBtn.forEach(img => img.src = "assets/images/icon-plus.svg")
    }

    imgBtn.forEach(function(div){
        div.addEventListener('click', unroll)
    })
})
 