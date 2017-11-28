document.addEventListener('DOMContentLoaded', function () {


var Furry = function(){
    this.x = 0;
    this.y = 0;
    this.direction = 'right';
};


var Coin = function() {
    this.x = Math.floor(Math.random()*10);
    this.y = Math.floor(Math.random()*10);
};

var Game = function() {
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;

    this.index = function(x, y) {
        return x + (y * 10);
    };

    this.hideVisibleFurry = function() {
        this.classFurry = document.querySelector('.furry');
        this.classFurry.classList.remove('furry');
    };

    this.showFurry = function() {
        this.board[ this.index(this.furry.x, this.furry.y) ].classList.add('furry');
    };

    this.showCoin = function() {
        this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin');
    };

    this.moveFurry = function () {
        this.hideVisibleFurry();

        if (this.furry.direction === 'right') {
            this.furry.x += 1;
        }
        else if (this.furry.direction === 'left') {
            this.furry.x -= 1;
        }
        else if (this.furry.direction === 'up') {
            this.furry.y -= 1;
        }
        else if (this.furry.direction === 'down') {
            this.furry.y += 1;
        }

        this.showFurry();
    };

    this.startGame = function() {
        var self = this;
        this.idSetInterval = setInterval( function() {
            self.moveFurry();
        }, 2500);
    };

    this.turnFurry = function(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
        }
    };

};
var game = new Game();
game.showFurry();
game.showCoin();
game.startGame();
document.addEventListener('keydown', function(event){
    game.turnFurry(event);
});
});


