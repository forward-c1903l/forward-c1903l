let aLeft=document.getElementById('arrow-left');//lay duoc arrow left
let aRight=document.getElementById('arrow-right');//lay duoc arrow right
let sli=document.querySelector('.carousel__item');
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

}
function clickRight(){


}

aLeft.addEventListener('click', clickLeft);//dung EventListener bat su kien click NOTE::
aRight.addEventListener('click', clickRight);//dung EventListener bat su kien click