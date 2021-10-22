function getColor(colorNumber) {
    colorNumber = parseInt(colorNumber);
    switch (colorNumber) {
        case 1: return "red";
        case 2: return "yellow";
        case 3: return "blue";
        case 4: return "green";
        default: return "black";
    }
}

//console.log(getColor(9));

function getAllStudentsColor() {
    for (var i = 1; i <= 10; i++) {
        var numRandom = Math.floor(Math.random() * 4) + 1;
        var exampleColor = getColor(numRandom);
        console.log(exampleColor);
    }
}


getAllStudentsColor();