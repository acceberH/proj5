let poemList1 = ['../image/c1.jpg','../image/c2.jpg','../image/c4.png','../image/c6.webp','../image/c5.jpg']
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