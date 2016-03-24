var Edge = function(p0, p1){
  this.source = p0;
  this.target = p1;
};

Edge.prototype.pointsRelativeTo = function(player){
  var s = this.source.localCoordsOnVisPlane(player)
  var t = this.target.localCoordsOnVisPlane(player)

  if(!this.source.isVisibleBy(player)){
    s = new Vector(-10000*(s.x - 500) + 500, -10000*(s.y - 250)+250)
  }

  if(!this.target.isVisibleBy(player)){
    t = new Vector(-10000*(t.x - 500) + 500, -10000*(t.y - 250)+250)
  }

  return {s: s, t: t}
}

Edge.prototype.sketchRelativeTo = function(player){
  if (this.source.isVisibleBy(player) || this.target.isVisibleBy(player)){
    pts = this.pointsRelativeTo(player)
    line(pts.s.x, pts.s.y, pts.t.x, pts.t.y)
  }
}
