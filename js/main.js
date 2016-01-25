var matisse = ['#138262', '#3161A7', '#CB4C83', '#E57F33', '#8BB050']
var randomMatisse = function () {
    var m = matisse[Math.floor(Math.random() * matisse.length)];
    return(m);
}

document.addEventListener("DOMContentLoaded", function(event) {
    var squares = document.getElementsByClassName('square');
    console.log(squares.length)
    for (var i = 0; i < squares.length; ++i) {
        console.log(i);
        var square = squares[i];
        console.log(square)
        square.style.backgroundColor = randomMatisse()
    }
    var stripe = document.getElementsByClassName('stripe-3')[0];
    stripe.style.backgroundColor = randomMatisse()
});
