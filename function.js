var screen = document.getElementById('screen');
function buttonValue(value) {
    screen.value += value;
}
function clearScreen() {
    screen.value = "";
}
function buttonResult() {
    var result = eval(screen.value);
    screen.value = result;
}

