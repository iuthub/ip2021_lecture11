// console.log('Hello World');
// alert('Hello World');
var currentSeconds = 0;
var timer;

$(document).ready(function(){
	$('#btnClickMe').click(onButtonClick);


	let txtName = $('#txtName');
	txtName.keypress(function(ev) {
		console.log(ev);
	});
	timer = setInterval(tick, 1000);
});


function tick() {
	currentSeconds += 1;
	$('#lblTitle').text(`${currentSeconds} seconds elapsed`);

	// let liEl = $('<li/>', {
	// 	text: `Item ${currentSeconds}`
	// });

	// $('#items').append(liEl);

	if (currentSeconds==5){
		$('#btnClickMe').hide();		

	}
}

function stopTimer() {
	clearInterval(timer);
}


function onButtonClick() {
	// console.log(this);
	// alert('Hey you clicked me!');

	// let lblTitle = document.querySelector('#lblTitle');
	// lblTitle.innerText = 'Hi, I got changed';
	// // style="background-color: grey;"
	// lblTitle.style.backgroundColor = "grey";

	// window.open("http://www.google.com", "_blank");
}