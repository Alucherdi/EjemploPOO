class MeteorFactory {
  meteors = []
  max
  lapse

  constructor() {
    this.max = 100
    this.lapse = this.max
  }

  generate() {
    if (this.lapse > 0) {
      this.lapse--
    } else {
      this.lapse = this.max
      this.meteors.push(new Meteor())
    }
  }

  update() {
    this.meteors.forEach(v => v.move())
  }

  map_meteors(f) {
    return this.meteors.map(f)
  }

  render_all() {
    this.meteors.forEach(v => v.render())
  }
}
