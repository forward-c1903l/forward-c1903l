let arrowLeft = document.getElementById('arrow-left');// lay mui ten trai
let arrowRight = document.getElementById('arrow-right');// lay mui ten phai
let slide = document.querySelector('.carousel__item');//lay duoc carousel__item
let arrayColor = ['black', 'blue', 'green', 'red'];//tao mang color
let indexLast = arrayColor.length - 1; // lay vi tri cuoi cung cua mang
let name = document.querySelectorAll('.carousel__title');

function clickLeft(){
	let x = slide.style.backgroundColor;//lay duoc color slide
	let indexOriginal;//tao bien nay de luu gia tri index ban dau
	arrayColor.map( (item, index) =>{
		if(x === item){
			indexOriginal = index;
		}
	})

	let indexPresent;// tao 1 bien chua vi tri hien tai

	if(indexOriginal === 0){ // neu vi tri ban dau = 0
		indexPresent = indexLast // thi no se set vi tri hien tai la cuoi cung
	}
	else indexPresent = indexOriginal - 1;

	console.log(indexPresent);

	slide.style.backgroundColor = arrayColor[indexPresent]; // set style carousel__item la mau cua array[vi tri hien tai]
	name[indexOriginal].classList.remove('visible');//remove class visible cho title ban dau
	name[indexPresent].classList.add('visible');//add class visible cho title hien tai
}

function clickRight(){
	let x = slide.style.backgroundColor;//lay duoc color slide
	let indexOriginal;//tao bien nay de luu gia tri index ban dau
	arrayColor.map( (item, index) =>{
		if(x === item){
			indexOriginal = index;
		}
	})

	let indexPresent;// tao 1 bien chua vi tri hien tai

	if(indexOriginal === indexLast){// neu vi tri ban dau la cuoi cung
		indexPresent = 0 // thi se set vi tri hien tai = 0
	}
	else indexPresent = indexOriginal + 1;

	console.log(indexPresent);

	slide.style.backgroundColor = arrayColor[indexPresent]; // set style carousel__item la mau cua array[vi tri hien tai]
	slide.style.transition = '2s'; // set css triansition
	name[indexOriginal].classList.remove(visible);//remove class visible cho title ban dau
	name[indexPresent].classList.add(visible);//add class visible cho title hien tai
}

arrowLeft.addEventListener('click', clickLeft);//dung EventListener bat su kien click
arrowRight.addEventListener('click', clickRight);//dung EventListener bat su kien click