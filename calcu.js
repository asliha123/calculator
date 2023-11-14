
let screen = document.getElementById('output');

function display(value) {
    output.innerHTML += value;
}

function clearScreen() {
    output.innerHTML = '';
}

function calculate() {
    try {
        output.innerHTML = eval(output.innerHTML);
    } catch (error) {
        output.innerHTML = 'Error';
    }
}
