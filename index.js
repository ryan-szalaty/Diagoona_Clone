controls = document.getElementsByClassName("control");

bgImages = ["./img/diagoona-bg-1.jpg", "./img/diagoona-bg-2.jpg", "./img/diagoona-bg-3.jpg"];

i = 0;

function slideshow() {
	document.getElementById("body").style.background = "url(" + bgImages[i] + ")";
	controls[i].style.opacity = 1;
	//controls 
	if (controls[i - 1]) {
		controls[i - 1].style.opacity = 0.5;
	}
	else {
		controls[2].style.opacity = 0.5;
	}
	//background images
	if (i < bgImages.length -1) {
		i++;
	}
	else {
		i = 0;
	}
	setTimeout("slideshow()", 5000);
}

window.onload = slideshow; //immdiate loading of function




