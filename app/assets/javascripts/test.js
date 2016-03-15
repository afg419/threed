function setup(){
  height = 500;
  width = 500;
  cnv = createCanvas(height , width);
}

var draw = function(){
  background(255,255,255);
  testVisOps();
}

var keyPressed = function(){
  if (key === "W" ) {
    player.loc = (player.loc).plus(scalMult(0.5,player.heading));
  }
  if (key === "S" ) {
    player.loc = (player.loc).minus(player.heading);
  }

  if (key === "A"){
    var newX = player.heading.x * cos(Math.PI/4) - player.heading.y * sin(Math.PI/4)
    var newY = player.heading.x * sin(Math.PI/4) + player.heading.y * cos(Math.PI/4)
    return player = new Player(player.loc, new Vector(newX, newY, player.heading.z))
  }

  if (key === "D"){
      var newX = player.heading.x * cos(-Math.PI/4) - player.heading.y * sin(-Math.PI/4)
      var newY = player.heading.x * sin(-Math.PI/4) + player.heading.y * cos(-Math.PI/4)
    return player = new Player(player.loc, new Vector(newX, newY, player.heading.z))
  }
}
