
const bulbOn = () => {
    let bid = document.getElementById('bulb');
    if (bid.src.match('bulb2')) {
        bid.src = "/images/bulb1.png";
        document.getElementById("bulbStatus").innerHTML = "Bulb in now OFF!";
    } else {
        bid.src = "/images/bulb2.png";
        document.getElementById("bulbStatus").innerHTML = "Bulb in now ON!";
    }
}