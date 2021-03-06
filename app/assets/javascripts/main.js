var runMain = function(){
  function setup(){
    height = 1000;
    width = 500;
    cnv = createCanvas(height , width);
  }
  var t = 0;

  var p1 = new Point(new Vector(2,0,0));
  var p2 = new Point(new Vector(10,400,0));
  var p3 = new Point(new Vector(10,300,300));
  var p4 = new Point(new Vector(70,500,200));
  var points = [p1,p2,p3,p4]
  var player = new Player(new Vector(0,0,0), new Vector(1,0,0))

  var draw = function(){
    background(255,255,255);
    // player.loc = (player.loc).plus(scalMult(1.5,player.heading));

    if(points.length < 1000){
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
    }

    for (i = 0; i < points.length; i++){
      if( points[i].isVisibleBy(player)){
        points[i].sketchRelativeTo(player)
        // if(i===0){console.log(points[i].localCoordsOnVisPlane(player))}
      }
    }
  }

  var keyPressed = function(){

    switch (key) {
      case "A":
        newPlayer = player.rotateBy(Math.PI/132,"b")
        player = newPlayer;
        break;
      case "D":
        newPlayer = player.rotateBy(-Math.PI/132,"b")
        player = newPlayer;
        break;
      case "O":
        newPlayer = player.rotateVertBy(-Math.PI/132,"b")
        player = newPlayer;
        break;
      case "L":
        newPlayer = player.rotateVertBy(Math.PI/132,"b")
        player = newPlayer;
        break;
      default:
        break;
    }


//x -0.7998173223302093
//y -0.6002434930097441
    // player = player.rotate(key)

    if (key === "W" ) {
      player.loc = (player.loc).plus(scalMult(0.5,player.heading));
    }
    if (key === "S" ) {
      player.loc = (player.loc).minus(player.heading);
    }
  }
}
