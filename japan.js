let japan = document.querySelector("#japan");
japan.setAttribute("src", "Jepang.jpg");

japan.addEventListener('click', function(event) {
document.querySelector('#count').innerText++;
});