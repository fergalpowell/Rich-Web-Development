function insert(value) {
    if (document.getElementById("display").value === "0") {
        document.getElementById("display").value = ""
    }
    document.getElementById("display").value += value
}

function clearAll() {
    document.getElementById("display").value = "0"
}

function equals() {
    var equals = eval(document.getElementById("display").value)
    document.getElementById("display").value = ""
    document.getElementById("display").value += equals
}

function plusminus() {
    document.getElementById("display").value = document.getElementById("display").value * -1
}

document.addEventListener('keydown', function (event) {
    if (document.getElementById("display").value === "0") {
        document.getElementById("display").value = ""
    }
    switch (event.keyCode) {
        case 48:
            document.getElementById("display").value += "0";
            break;
        case 49:
            document.getElementById("display").value += "1";
            break;
        case 50:
            document.getElementById("display").value += "2";
            break;
        case 51:
            document.getElementById("display").value += "3";
            break;
        case 52:
            document.getElementById("display").value += "4";
            break;
        case 53:
            document.getElementById("display").value += "5";
            break;
        case 54:
            document.getElementById("display").value += "6";
            break;
        case 55:
            document.getElementById("display").value += "7";
            break;
        case 56:
            document.getElementById("display").value += "8";
            break;
        case 57:
            document.getElementById("display").value += "9";
            break;
        case 106:
            document.getElementById("display").value += "*";
            break;
        case 107:
            document.getElementById("display").value += "+";
            break;
        case 109:
            document.getElementById("display").value += "-";
            break;
        case 110:
            document.getElementById("display").value += ".";
            break;
        case 111:
            document.getElementById("display").value += "/";
            break;
        default:
            if (document.getElementById("display").value.length > 0) {
                document.getElementById("display").value += "";
            }
            else {
                document.getElementById("display").value += "0";
            }
            break;
    }
});