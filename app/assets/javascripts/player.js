var Player = function(p, n){
  this.loc = p;
  this.heading = n;
  this.a = scalMult(1/300,new Vector(-n.y, n.x, 0))
  this.b = scalMult(1/300, new Vector( - n.x * n.z, -n.y * n.z, n.x * n.x + n.y * n.y))
};

Player.prototype.rotateBy = function(mult, aORb){
  direction = {"a": this.a, "b": this.b}[aORb];
  var nPre = this.heading.plus(scalMult(mult,direction));
  var n = scalMult(1/nPre.mag(), nPre);
  return new Player(this.loc, n);
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
