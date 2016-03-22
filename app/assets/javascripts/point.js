var Point = function(p){
  this.loc = p;
};

Point.prototype.pointOnVisPlane = function(player){
  var q = this.loc;
  var p = player.loc;
  var n = player.heading;
  return scalMult( n.dot(n)/n.dot(q.minus(p)) , q.minus(p) ).minus(n);
};

Point.prototype.localCoordsOnVisPlane = function(player){
  // if (this.isVisibleBy(player)){
    var r = this.pointOnVisPlane(player);
    var s = r.comp(player.a) / player.a.mag() * 600
    var t = r.comp(player.b) / player.b.mag() * 600
    return new Vector(t + 500,s + 250)
  // } else {
  //   return "sorry"
  // }
};

Point.prototype.isVisibleBy = function(player){
  var test = (this.loc).minus(player.loc.plus(player.heading))
  return test.dot(player.heading) >= 0
}

Point.prototype.sketchRelativeTo = function(player){
  if (this.isVisibleBy(player)){
    var coords = this.localCoordsOnVisPlane(player);
    var dist = this.loc.dist(player.loc)
    ellipse(coords.x, coords.y, 40/(Math.pow(dist,0.5)) ,40/(Math.pow(dist,0.5)))
  }
};

var testVisOps = function(){
  var q = new Vector(100,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 100 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,100)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,120)

  var q = new Vector(200,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 200 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,140)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,160)

  var q = new Vector(1,10,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 1 10 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,180)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,200)

  var q = new Vector(10,10,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 10 10 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,220)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,240)

  var q = new Vector(-10,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = -10 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,260)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,280)

  var q = new Vector(2,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 2 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,300)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,320)

  var q = new Vector(2,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n0 = new Vector(1,1,0);
  var n = scalMult(1/n0.mag(), n0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 1 0 normalized, q = 2 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,340)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,360)

  var q = new Vector(2,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n0 = new Vector(0.5,1,0);
  var n = scalMult(1/n0.mag(), n0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 0.5 1 0 normalized, q = 2 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 100,380)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 100,400)

};
