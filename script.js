let display = document.getElementById("display");

function appendToDisplay(value) {
    if (value === "AC") {
        display.value = "";
    } else if (value === "+/-") {
        if (display.value) {
            display.value = String(-parseFloat(display.value));
        }
    } else if (value === "%") {
        if (display.value) {
            display.value = String(parseFloat(display.value) / 100);
        }
    } else if (value === "=") {
        try {
            let expression = display.value.replace(/x/g, "*");
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}