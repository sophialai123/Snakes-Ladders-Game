
const movers = {
  2: 38,
  7: 14,
  8: 31,
  15: 26,
  28: 84,
  21: 42,
  36: 44,
  51: 67,
  78: 98,
  87: 94,
  71: 91,
  16: 6,
  49: 11,
  46: 25,
  64: 60,
  62: 19,
  74: 53,
  89: 68,
  92: 88,
  95: 75,
  99: 80,
}


class SnakesLadders {
  constructor() {
    this.movers = movers;
    this.gameRunning = true;
    this.player1 = {
      name: "Sophia",
      position: 0,
      turns: 0
    }

    this.player2 = {
      name: "Steven",
      position: 0,
      turns: 0
    }
  }

  play() {
    let player
    if (this.player1.turns <= this.player2.turns) {
      player = this.player1
      console.log(player)
    } else {
      player = this.player2
      console.log(player)
    }

    player.position += this.rollDices()

    if (this.isOnMover(player)) {
      player.position = this.movers[player.position]
    }
    player.turns++

    if (player.position > 100) {
      this.gameRunning = false;
      console.log(player)
      console.log(`${player.name} won!`)
    }

  }

  isOnMover(player) {
    if (this.movers[player.position]) {
      //console.log("I'm on a snake/ladder")
      return true;
    } else {
      //console.log("I'm not on a snake/ladder")
      return false;

    }
  }


  rollDices() {
    const die1 = this.rollDice();
    console.log(`dice 1 random number: ${die1}`)
    let die2 = this.rollDice()
    console.log(`dice 2 random number: ${die2}`)
    if (die1 === die2) {
      //roll one more time and added all together
      die2 += this.rollDice()
      console.log(`dice 2 random number: ${die2}`)
    }
    //the sume of two dies
    console.log(die1 + die2)
    return die1 + die2

  }

  rollDice() {
    //random number between 1 and 6
    return Math.ceil(Math.random() * 6)

  }
}


const game = new SnakesLadders();
while (game.gameRunning) {
  game.play()
}