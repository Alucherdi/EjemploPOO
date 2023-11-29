let player = new Player()
let input = new Input()
let meteorFactory = new MeteorFactory()

let isColliding = []

function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(220)

  meteorFactory.generate()

  noStroke()
  fill(color(255, 0, 0))
  player.render()
  input.handle(player)

  fill(color(50, 50, 50))
  meteorFactory.update()
  isColliding = meteorFactory.map_meteors(v => player.collide(v))
  meteorFactory.render_all()

  if (isColliding.some(v => v)) {
    isColliding = []
    player = new Player()
    meteorFactory = new MeteorFactory()
  }
}

