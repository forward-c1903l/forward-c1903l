let aLeft=document.getElementById('arrow-left');//lay duoc arrow left
let aRight=document.getElementById('arrow-right');//lay duoc arrow right
let sli=document.querySelector('.carousel__item');
let namechange=document.querySelector('.visible');
console.log('namechange');
let changeColor=['black','green','red','yellow'];

function clickLeft(){
    let color=sli.style.backgroundColor;//lay duoc mau background
    if(color==='black'){
        sli.style.backgroundColor='green';
    }
    else if(color==='green'){
        sli.style.backgroundColor='red';
    }
    else if(color==='red'){
        sli.style.backgroundColor='yellow';
    }
    else
        sli.style.backgroundColor='black';

    let namemb=namechange.innerHTML;

    if(namemb==='Nguyễn Hữu Sang'){
        namechange.innerHTML='Lê Nam Trân';
    }
    else if(namemb==='Lê Nam Trân'){
        namechange.innerHTML='Huỳnh Công Phát';
    }
    else if(namemb==='Huỳnh Công Phát'){
        namechange.innerHTML='Hà Thành Đại';

    }

    else
        namechange.innerHTML='Nguyễn Hữu Sang';




}
function clickRight(){
    let color=sli.style.backgroundColor;//lay duoc mau background
    if(color==='black'){
        sli.style.backgroundColor='green';
    }
    else if(color==='green'){
        sli.style.backgroundColor='red';
    }
    else if(color==='red'){
        sli.style.backgroundColor='yellow';
    }
    else
        sli.style.backgroundColor='black';



    let namemb=namechange.innerHTML;

    if(namemb==='Nguyễn Hữu Sang'){
        namechange.innerHTML='Lê Nam Trân';
    }
    else if(namemb==='Lê Nam Trân'){
        namechange.innerHTML='Huỳnh Công Phát';
    }
    else if(namemb==='Huỳnh Công Phát'){
        namechange.innerHTML='Hà Thành Đại';

    }
    else
        namechange.innerHTML='Nguyễn Hữu Sang';

}
sli.style.transition='2s';
aLeft.addEventListener('click', clickLeft);//dung EventListener bat su kien click NOTE::
aRight.addEventListener('click', clickRight);//dung EventListener bat su kien click