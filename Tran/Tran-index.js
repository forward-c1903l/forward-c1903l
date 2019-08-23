let arrowLeft = document.getElementById("arrow-left"); // lấy mũi tên qua trái
let arrowRight = document.getElementById("arrow-right");// lấy mũi tên qua phải
let slide = document.querySelector(".carousel-item");//lấy khu vực carousel-item
console.log(arrowLeft)
console.log(slide)
let arrayColor = ['black', 'blue', 'green', 'red'];// tạo mảng màu nền 
let indexLast = arrayColor.length - 1; // lay vi tri cuoi cung cua mang
let name = document.querySelectorAll('.carousel-title');

function clickL()
{
	let x = slide.style.backgroundColor; // lấy màu nền đầu tiên
	let indexOriginal; // lưu giá trị nền vào biến
	arrayColor.map( (item, index) =>{
		if(x === item){
			indexOriginal = index;
}
	})
	let indexPresent;// Tạo 1 biến chứa giá trị hiện tại
	if(indexOriginal === 0){ // Xét vị trí nó có bằng 0
		indexPresent = indexLast // suy ra vị trí nó là vị trí cuối cùng 
	}
	else indexPresent = indexOriginal - 1;
console.log(indexPresent);

	slide.style.backgroundColor = arrayColor[indexPresent]; // chỉnh style carousel-item là màu của mảng
	name[indexOriginal].classList.remove('visible');// xóa class visible của vị trí ban đầu
	name[indexPresent].classList.add('visible');//thêm class visible cho vị trí hiện tại
}

function clickR(){
	let x = slide.style.backgroundColor;
	let indexOriginal;
	arrayColor.map( (item, index) =>{
		if(x === item){
			indexOriginal = index;
		}
	})

	let indexPresent;

	if(indexOriginal === indexLast){  
		indexPresent = 0 
	}
	else indexPresent = indexOriginal + 1;

	console.log(indexPresent);

	slide.style.backgroundColor = arrayColor[indexPresent]; 
	slide.style.transition = '2s'; 
	name[indexOriginal].classList.remove('visible');
	name[indexPresent].classList.add('visible');
}

arrowLeft.addEventListener('click', clickL);
arrowRight.addEventListener('click', clickR);
