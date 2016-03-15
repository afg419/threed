var runMain = function(){
  function setup(){
    height = 500;
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

    if(points.length < 1000){
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
      points.push(new Point(new Vector(200 * Math.random(), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) ) )
    }

    for (i = 0; i < points.length; i++){
      if( points[i].isVisibleBy(player)){
        points[i].sketchRelativeTo(player)
      }
    }
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
}
