var side = 30;
var grassArr = [];
var xQanak = 30;
var yQanak = 30;
var matrix = [];
var grassEaterArr = [];
var gishArr = [];
var ancrevArr = [];
var charagaytArr = [];

function setup() {

    for (var y = 0; y < yQanak; y++) {
        matrix[y] = [];
        for (var x = 0; x < xQanak; x++) {
            matrix[y][x] = Math.round(random(0, 5));
        }
    }

    // matrix = [
    //     [0, 0, 1, 0, 0],
    //     [1, 5, 0, 2, 0],
    //     [0, 0, 1, 0, 1],
    //     [0, 3, 0, 0, 0],
    //     [1, 1, 1, 0, 1],
    //     [1, 1, 4, 0, 0],
    //     [1, 1, 0, 0, 0]
    // ];

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2);
                grassEaterArr.push(ge);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                gishArr.push(gish);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 4) {
                var ancrev = new Ancrev(x, y, 4);
                ancrevArr.push(ancrev);
            }
        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                var char = new Charagayt(x, y, 5);
                charagaytArr.push(char);
            }
        }
    }
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



}



function draw() {


    for (var i in grassArr) {
        //grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
   
    for (var i in gishArr) {
        gishArr[i].move();
    }
    for (var i in gishArr) {
        gishArr[i].eat();
    }
    for (var i in ancrevArr) {
        ancrevArr[i].move();
    }
    for (var i in charagaytArr) {
        charagaytArr[i].charagaytum();
    }

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#581845");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#4D33FF  ");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("#EC0808  ");
                rect(x * side, y * side, side, side);
            }
        }
    }
}











