class Meteor {
  position
  size
  vel

  constructor() {
    this.position = new Vector2(410, Math.random() * 400)
    const s = Math.random() * 80 + 10
    this.size = new Vector2(s, s)
    this.vel = Math.random() * 3
  }

  move() {
    this.position.x -= this.vel
  }

  render() {
    ellipse(this.position.x, this.position.y, this.size.x, this.size.y)
  }
}
