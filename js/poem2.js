let poemList1 = ['../image/b1.webp','../image/b2.jpg','../image/b3.jpg','../image/b4.jpg']
let poemBtns = document.querySelectorAll('.poem_item')
poemBtns.forEach((item,i)=>{
    item.addEventListener('mouseover',function (){
        let activeShow = document.getElementsByClassName('show')
        if(activeShow.length>0){
            activeShow[0].className = 'suspension'
        }
        let activeItem = document.getElementsByClassName('suspension')
        if(activeItem.length>0){
            activeItem[0].className = 'show'
            let activeImg = document.getElementsByClassName('activeImg')
            activeImg[0].src = poemList1[i]
        }
    })
    item.addEventListener('mouseout',function (){
        let activeShow = document.getElementsByClassName('show')
        if(activeShow.length>0){
            activeShow[0].className = 'suspension'
        }
    })
})