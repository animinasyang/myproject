
class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;


    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        // console.log(newCell);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            // console.log(newX, newY);
            matrix[newY][newX] = this.index;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }

}
class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newVan = random(emptyCells);
        if (newVan) {
            this.energy--;
            var x = newVan[0];
            var y = newVan[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
        }
    }
    vtang() {
        var emptyCells = this.chooseCell(5);
        var newVan = random(emptyCells);
        if (newVan) {
            this.energy -= 2;
            console.log(this.energy);
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.index;

            var newGrassEater = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(newGrassEater);
            this.energy = 6;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var newVan = random(emptyCells);
        if (newVan) {
            this.energy++;
            var x = newVan[0];
            var y = newVan[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;


            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 12) {
                 this.mul();
                this.energy = 6;
            }

        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                 this.die();
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }
}
class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.multiply = 0;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newVan = random(emptyCells);
        if (newVan) {
            this.energy--;
            var x = newVan[0];
            var y = newVan[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;



        }

    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.index;

            var newgish = new Gishatich(newX, newY, this.index);
            gishArr.push(newgish);
            this.energy = 5;
        }
    }
    eat() {
        var emptyCells = this.chooseCell(1);
        var newVan = random(emptyCells);
        if (newVan) {
            this.energy++;
            var x = newVan[0];
            var y = newVan[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;


            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 12) {
                this.mul();
                this.energy = 4;
            }

        }
        else {
            this.move();
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishArr) {
            if (this.x == gishArr[i].x && this.y == gishArr[i].y) {
                gishArr.splice(i, 1);
                break;
            }
        }
    }
}
class Ancrev {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in ancrevArr) {
            if (this.x == ancrevArr[i].x && this.y == ancrevArr[i].y) {
                ancrevArr.splice(i, 1);
                break;
            }
        }
    }
    move() {
        var emptyCells = this.chooseCell(0);
        var newVan = random(emptyCells);
        if (newVan) {
            var x = newVan[0];
            var y = newVan[1];
            matrix[this.y][this.x] = 1;
            matrix[y][x] = 4;
            this.x = x;
            this.y = y;



        }
        else {
            this.die();

        }

    }

}
class Charagayt {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;
    }
    charagaytum() {
        for (var x = 0; x < matrix[this.y].length; x++) {
            if (matrix[this.y][x] == 2) {
                for (var i in grassEaterArr) {
                    if (this.y == grassEaterArr[i].y && x == grassEaterArr[i].x) {
                        grassEaterArr[i].energy -= 5;
                    }
                }
            }
            else if (matrix[this.y][x] == 3) {
                for (var i in gishArr) {
                    if (this.y == gishArr[i].y && x == gishArr[i].x) {
                        gishArr[i].energy -= 5;
                    }
                }
            }
        }
    }
}






