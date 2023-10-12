let poemList1 = ['../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg','../image/5.jpg','../image/6.jpg']
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
            // shade()
        }
    })
    item.addEventListener('mouseout',function (){
        let activeShow = document.getElementsByClassName('show')
        if(activeShow.length>0){
            activeShow[0].className = 'suspension'
        }
    })
})

// function shade(){
//     let activeImg = document.querySelectorAll('.activeImg')
//     let activeBox = document.querySelectorAll('.show')
//     if(activeBox.length>0){
//         activeImg[0].addEventListener('mouseover',function (e){
//             e.stopPropagation();
//             activeBox[0].className = 'suspension'
//         })
//     }
// }
