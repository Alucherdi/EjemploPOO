class Player {
  position
  size

  constructor() {
    this.position = new Vector2(40, 200)
    this.size = new Vector2(30, 30)
  }

  move(direction) {
    this.position.y += direction * 2
  }

  collide(ob) {
    return this.position.x + this.size.x > ob.position.x &&
           this.position.x < ob.position.x + ob.size.x &&
           this.position.y + this.size.y > ob.position.y &&
           this.position.y < ob.position.y + ob.size.y
  }

  render() {
    ellipse(this.position.x, this.position.y, this.size.x, this.size.y)
  }
}
