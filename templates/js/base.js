let isMobile = false;
console.log(navigator.userAgent)
if(/Android|webOS|iPhone|iPad|Tablet|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    isMobile = true;
}

let menuBtn = document.getElementById("nav-Logo");
let isExpand = false

menuBtn.addEventListener('click', function(){
    if(isMobile){
        const list = document.getElementsByClassName('nav-list-ul')[0]
        if(!isExpand){
            isExpand = true
            list.style.right = '0px';
            return
        }
    isExpand = false
    list.style.right = '500px'
    }
    
})