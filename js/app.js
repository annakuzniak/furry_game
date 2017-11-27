function Furry(x,y, direction) {
    this.x = 0;
    this.y = 0;
    this.direction = "right";
}

function Coin(x,y) {
    this.x = Math.floor(Math.random() * 10);
    this.y = Math.floor(Math.random() * 10);
}


function Game(board, furry, coin, score) {
    this.board = document.querySelectorAll("#board div"),
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.index = function(x,y) {
        return x + (y * 10);
    };
    this.showFurry = function() {
        this.board[ this.index(this.furry.x,this.furry.y) ].classList.add('furry');
    };
    this.showCoin = function() {
        this.board[ this.index(this.coin.x,this.coin.y) ].classList.add('coin');
    }
}

var game = new Game;
game.showFurry();
game.showCoin();