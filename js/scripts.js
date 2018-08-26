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

// User Interface Logic

$(document).ready(function () {
  $("form#players").submit(function (event) {
    event.preventDefault();

    player1 = new Player($("#player1-input").val(), 1);
    player2 = new Player($("#player2-input").val(), 2);

    if (player1.playerName.length < 1) {
      alert("Please enter Player 1's name");
    } else if (player2.playerName.length < 1) {
      alert("Please enter Player 2's name");
    } else {
      $("#player1-name").text(player1.playerName);
      $("#player2-name").text(player2.playerName);
      $("div.users").hide();
      $("div.game").show();
    }
    player1.playerTurn = true;
    checkTurn();
  });

  var checkTurn = function (Id) {
    if (player1.playerTurn === true) {
      $("#player1-roll").prop('disabled', false);
      $("#player1-hold").prop('disabled', false);
      $("#player2-roll").prop('disabled', true);
      $("#player2-hold").prop('disabled', true);
    } else if (player2.playerTurn === true) {
      $("#player2-roll").prop('disabled', false);
      $("#player2-hold").prop('disabled', false);
      $("#player1-roll").prop('disabled', true);
      $("#player1-hold").prop('disabled', true);
    }
  }

  var endgame = function () {
    if ((player1.playerTotalScore >= 100 || (player1.playerTotalScore + player1.playerTempscore) >= 100) || (player2.playerTotalScore >= 100 || (player2.playerTotalScore + player2.playerTempscore) >= 100)) {
      $("div.users").show();
      $("div.game").hide();
    }
  }

  $("#player1-roll").click(function () {
    player1.roll();
    player1.checkWinner();
    $("#player1-rolled-value").text(player1.playerTempscore);
    if (player1.playerTempscore === 0) {
      $("#player1-rolled-value").empty();
    }
    checkTurn();
    endgame();
  });

  $("#player1-hold").click(function () {
    player1.hold();
    $("#player1-score").text(player1.playerTotalScore);
    $("#player1-rolled-value").empty();
    checkTurn();
    endgame();
  });

  $("#player2-roll").click(function () {
    player2.roll();
    player2.checkWinner();
    $("#player2-rolled-value").text(player2.playerTempscore);
    if (player2.playerTempscore === 0) {
      $("#player2-rolled-value").empty();
    }
    checkTurn();
    endgame();
  });
  $("#player2-hold").click(function () {
    player2.hold();
    $("#player2-score").text(player2.playerTotalScore);
    $("#player2-rolled-value").empty();
    checkTurn();
    endgame();
  });
});
