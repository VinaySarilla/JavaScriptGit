var button = document.querySelector("button");
var inum1 = document.getElementById("num1");
var inum2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+inum1.value, +inum2.value));
});
