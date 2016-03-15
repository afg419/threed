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
  if (this.isVisibleBy(player)){
    var r = this.pointOnVisPlane(player);
    var s = r.comp(player.a)
    var t = r.comp(player.b)
    return new Vector(s,t)
  } else {
    return new Vector(1000000, 1000000)
  }
};

Point.prototype.isVisibleBy = function(player){
  var test = (this.loc).minus(player.loc.plus(player.heading))
  return test.dot(player.heading) >= 0
}

Point.prototype.sketchRelativeTo = function(player){
  var coords = this.localCoordsOnVisPlane(player);
  var dist = this.loc.dist(player.loc)
  fill(this.loc.dist(player.loc));
  return ellipse(coords.x + 250, coords.y + 250, 40/(Math.pow(dist,0.5)) ,40/(Math.pow(dist,0.5)))
};










var testVisOps = function(){
  var q = new Vector(100,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 100 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 300,100)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 300,120)

  var q = new Vector(200,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 200 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 300,140)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 300,160)

  var q = new Vector(1,10,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 1 10 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 300,180)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 300,200)

  var q = new Vector(10,10,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = 10 10 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 300,220)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 300,240)

  var q = new Vector(-10,0,0);
  var point = new Point(q);
  var p = new Vector(0,0,0);
  var n = new Vector(1,0,0);
  var player = new Player(p,n)

  text("p = 0 0 0, n = 1 0 0, q = -10 0 0, a:" + (point.localCoordsOnVisPlane(player).x) + " b:" + point.localCoordsOnVisPlane(player).y, 300,260)
  text("point on vis plane" + "x:" + point.pointOnVisPlane(player).x + " y:" + point.pointOnVisPlane(player).y + " z:" + point.pointOnVisPlane(player).z, 300,280)
};
