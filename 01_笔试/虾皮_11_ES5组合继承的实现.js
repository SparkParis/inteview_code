function Father(name) {
  this.name = name
}
function Son() {
  Father.call(this, name)
}
Son.prototype = Object.create(Father.prototype);
Son.prototype.constructor = Son