var SimplicialSet = function(s0, s1, s2){
  this.s0 = s0; //point objects -- so 3d vectors
  this.s1 = s1; //pairs of point objects
  this.s2 = s2; //collections of over 3 point objects
};

SimplicialSet.prototype.onVisPlane0Dim = function(){
  this.s0.map((point) => {return point.localCoordsOnVisPlane()})
};

Player.prototype.rotate = function(direction){
  var player = this;
  switch (direction) {
    case "A":
      player = this.rotateBy(-3,"a")
      break;
    case "D":
      player = this.rotateBy(3,"a")
      break;
    case "O":
      player = this.rotateBy(-3,"b")
      break;
    case "L":
      player = this.rotateBy(3,"b")
      break;
    default:
      break;
  }
  return player
}


var testPlayerOps = function(){
  var p = new Vector(0,0,0);
  var unscaled_n = new Vector(1,1,1);
  var n = scalMult(1/unscaled_n.mag(), unscaled_n);
  var player = new Player(p,n);

  text("n dot a:" + (player.heading).dot(player.a), 200,100)
  text("n dot b:" + (player.heading).dot(player.b), 200,120)
  text("a dot b:" + (player.a).dot(player.b), 200,140)

  var p = new Vector(0,0,0);
  var unscaled_n = new Vector(1,0,0);
  var n = scalMult(1/unscaled_n.mag(), unscaled_n);
  var player = new Player(p,n);

  text("a:" + player.a.x + player.a.y + player.a.z, 600,100)
  text("b:" + player.b.x + player.b.y + player.b.z, 600,120)
}
