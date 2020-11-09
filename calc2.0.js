function insert (num){

document.form.textview.value = document.form.textview.value + num;

}


function equal() {
	let result;
	result = document.form.textview.value;
	
	if (eval(result) == 'Infinity'){
	document.form.textview.value = "ERROR";

} else {
	
	document.form.textview.value = eval(result);
		}

}

function reset(){
	document.form.textview.value = '';
}



function change_color() {
//var dlina = document.getElementsByClassName('number').length;

document.querySelector('.main__container').classList.toggle('mcdark');
document.querySelector('.form__output').classList.toggle('fodark');
document.querySelector('.output').classList.toggle('outputdark');


let x = document.querySelectorAll('.number');

for(let i = 0; i < x.length; i++ ) {
	x[i].classList.toggle('numberdark');
}

document.querySelector('.number__eq').classList.toggle('number__eq_dark');
document.querySelector('.btn__change').classList.toggle('btn__change_dark');
document.querySelector('.bodyy').classList.toggle('body_dark');
document.querySelector('.main__container').classList.toggle('norm');
document.querySelector('.form__output').classList.toggle('norm');
document.querySelector('.output').classList.toggle('norm');

console.log("WORK");

}