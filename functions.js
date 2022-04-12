const heartBtns = document.querySelectorAll('.heart');
const heartIcons = document.querySelectorAll('.heart i');

heartBtns.forEach(heartBtn => {
	heartBtn.addEventListener('click', () => {
		heartIcons.forEach(heartIcon => heartIcon.classList.toggle('active'));
	});
});
