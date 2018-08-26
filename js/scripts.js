// Business Logic
var player1;
var player2;

function Player(name, playerId) {
  this.playerName = name;
  this.playerId = playerId;
  this.playerTotalScore = 0;
  this.playerTempscore = 0;
  this.playerTurn = false;
}
Player.prototype.roll = function () {
  var dieValue = Math.floor(Math.random() * 6) + 1;
  if (dieValue === 1) {
    alert("Sorry " + this.playerName + " you rolled 1");
    this.playerTempscore = 0;
    changeTurn(this.playerId);
  } else {
    this.playerTempscore += dieValue;
    return dieValue;
  }
}
Player.prototype.hold = function () {
  this.playerTotalScore += this.playerTempscore;
  changeTurn(this.playerId);
  this.playerTempscore = 0;
}
Player.prototype.checkWinner = function () {
  if (this.playerTotalScore >= 100 || (this.playerTotalScore + this.playerTempscore) >= 100) {
    alert(this.playerName + " is the winner!");
  }
}
var changeTurn = function (Id) {
  if (Id === 1) {
    player1.playerTurn = false;
    player2.playerTurn = true;
  } else if (Id === 2) {
    player2.playerTurn = false
    player1.playerTurn = true
  }
}
