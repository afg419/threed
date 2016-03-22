var Vector = function(x,y,z){
  this.x = x;
  this.y = y;
  this.z = z;
}

Vector.prototype.dot = function(vec){
  return this.x*vec.x + this.y*vec.y + this.z*vec.z;
};

Vector.prototype.cross = function(vec){
  var new_x = (this.y * vec.z) - (this.z * vec.y)
  var new_y = -(this.x * vec.z) - (this.z * vec.x)
  var new_z = (this.x * vec.y) - (this.y * vec.x)
  return new Vector(new_x, new_y, new_z)
};

Vector.prototype.plus = function(vec){
  return new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
};

Vector.prototype.minus = function(vec){
  return new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
};

Vector.prototype.mag = function(){
  return sqrt(this.dot(this));
};

Vector.prototype.comp = function(vec){
  //this is the component of the projection of this onto vec
  return (vec.dot(this))/(vec.mag())
};

Vector.prototype.dist = function(vec){
  return this.minus(vec).mag();
};

Vector.prototype.rotateVert = function(phi){
  var rho = this.mag()
  var phi0 = acos(this.z/rho)
  var newPhi = phi0 + phi
  return new Vector(this.x/sin(phi0) * sin(newPhi), this.y/sin(phi0) * sin(newPhi), rho * cos(newPhi))
};

var scalMult = function(a, vec){
    return new Vector(a*vec.x, a*vec.y, a*vec.z);
};

var testVecOps = function(){
  var v1 = new Vector(10,10,10)
  var v2 = new Vector(-10,-10,-10)

  v1mv2 = v1.minus(v2)
  text("x:" + v1mv2.x + " y:" + v1mv2.y + " z:" +  v1mv2.z, 100,100)
  v1pv2 = v1.plus(v2)
  text("x:" + v1pv2.x + " y:" + v1pv2.y + " z:" +  v1pv2.z, 100,120)
  v1dv2 = v1.dot(v2)
  text("dot:" + v1dv2, 100,140)
  text("mag:" + v1.mag(), 100,160)
  av1 = scalMult(0.5, v1)
  text("x:" + av1.x + " y:" + av1.y + " z:" +  av1.z, 100,180)

  var v3 = new Vector(10,10,0)
  var v4 = new Vector(100,0,0)
  text("comp:" + v3.comp(v4),100,200);

  var v5 = new Vector(10,10,10)
  text("comp:" + v5.comp(v4),100,220);
}
