var rng = Math.floor(Math.random() * 3) + 1;

window.onload = function() {
  document.getElementById(rng).style.display = "block";
}

function showDiv(i){
document.getElementById("ans" + i).style.display = 'block';
console.log(i);
}