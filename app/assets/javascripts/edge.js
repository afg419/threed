var Edge = function(p0, p1){
  this.source = p0;
  this.target = p1;
};

Edge.prototype.pointsRelativeTo = function(player){
  return {s: this.source.localCoordsOnVisPlane(player), t: this.target.localCoordsOnVisPlane(player) }
}

Edge.prototype.sketchRelativeTo = function(player){
  this.source.sketchRelativeTo(player);
  this.target.sketchRelativeTo(player);
  pts = this.pointsRelativeTo(player)
  line(pts.s.x, pts.s.y, pts.t.x, pts.t.y)
}
