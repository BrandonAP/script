var OpenManubtn = document.getElementById('toggle-button'),
	overlay = document.getElementById('overlay-menu-container'),
	popup = document.getElementById('aside-menu'),
	CloseMenubtn = document.getElementById('close-menu');

OpenManubtn.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

CloseMenubtn.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});