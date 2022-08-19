const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const text = document.getElementById('text');
let count = 0;

function addElement() {
    text.innerHTML = count;
    if (count > 0)
        text.style.color = 'green';
    else if (count < 0)
        text.style.color = 'red';
    else
        text.style.color = 'black';
}
increase.addEventListener('click', function () {
    count = count + 1;
    addElement();
})
decrease.addEventListener('click', function () {
    count = count - 1;
    addElement();
})
reset.addEventListener('click', function () {
    count = 0;
    addElement();
})