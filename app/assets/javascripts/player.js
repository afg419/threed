var Player = function(p, n){
  this.loc = p;
  this.heading = n;
  // this.a = new Vector(0,0,1/300)
  this.b = scalMult(1,new Vector(n.y,-n.x, 0))
  // this.a = scalMult(1/1000,new Vector(0,0, 1))
  // pre = new Vector(n.y*n.z, -2*n.x*n.z, n.x*n.y)
  // this.b = scalMult(1/(300*pre.mag()),pre)
  // this.b = scalMult(1/300, new Vector( - n.x * n.z, -n.y * n.z, n.x * n.x + n.y * n.y))
  this.a = this.heading.cross(this.b)
};

Player.prototype.rotateBy = function(deg, aORb){
  direction = {"a": this.a, "b": this.b}[aORb];
  newX = Math.cos(deg)*this.heading.x - Math.sin(deg)*this.heading.y;
  newY = Math.sin(deg)*this.heading.x + Math.cos(deg)*this.heading.y;
  newHeading = new Vector(newX, newY, 0);
  return new Player(this.loc, newHeading);
};

Player.prototype.rotateVertBy = function(deg){
  return new Player(this.loc, this.heading.rotateVert(deg))
}

// Player.prototype.rotate = function(direction){
//   switch (key) {
//     case "A":
//       newPlayer = player.rotateBy(Math.PI/132,"b")
//       break;
//     case "D":
//       newPlayer = player.rotateBy(-Math.PI/132,"b")
//       break;
//     case "O":
//       newPlayer = player.rotateBy(-Math.PI/132,"b")
//       break;
//     case "L":
//       newPlayer = player.rotateBy(Math.PI/132,"b")
//       break;
//     default:
//       newPlayer = player
//       break;
//   }
//   return newPlayer
// }


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
