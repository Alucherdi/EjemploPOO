class Input {
  handle(player) {
    if (keyIsDown(75)) {
      player.move(-1)
    }

    if (keyIsDown(74)) {
      player.move(1)
    }
  }
}
