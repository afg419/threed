
var runTest = function(){
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
    switch(key){
      case "A":
      player = player.rotate(key)
      break;
      case "D":
      player = player.rotate(key)
      break;
      case "O":
      player = player.rotate(key)
      break;
      case "L":
      player = player.rotate(key)
      break;
    }


    if (key === "W" ) {
      player.loc = (player.loc).plus(scalMult(0.5,player.heading));
    }
    if (key === "S" ) {
      player.loc = (player.loc).minus(player.heading);
    }
  }

}
