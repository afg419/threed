
function cubes(){
    function setup(){
      height = 1000;
      width = 500;
      cnv = createCanvas(height , width);
    }

    var randomPoint = function(){
      return new Point(new Vector(2000 * (Math.random() - 0.5), 2000 * (Math.random() - 0.5), 2000*(Math.random() - 0.5)) )
    }

    var point = function(x,y,z){
      return new Point(new Vector(x,y,z))
    }

    var randomEdge = function(){
      var s = randomPoint();
      var t = randomPoint();
      return new Edge(s,t);
    }


    var t = 0;
    var e1 = new Edge(point(0,0,0), point(200,0,0))
    var e2 = new Edge(point(0,0,0), point(0,200,0))
    var e3 = new Edge(point(0,0,0), point(0,0,200))
    var e4 = new Edge(point(200,200,200), point(0,200,200))
    var e5 = new Edge(point(200,200,200), point(200,0,200))
    var e6 = new Edge(point(200,200,200), point(200,200,0))
    var e7 = new Edge(point(200,0,0), point(200,200,0))
    var e8 = new Edge(point(200,0,0), point(200,0,200))
    var e9 = new Edge(point(0,200,0), point(200,200,0))
    var e10 = new Edge(point(0,200,0), point(0,200,200))
    var e11 = new Edge(point(0,0,200), point(0,200,200))
    var e12 = new Edge(point(0,0,200), point(200,0,200))

    var points = [e1.source, e1.target,
                  e2.source, e2.target,
                  e3.source, e3.target,
                  e4.source, e4.target,
                  e5.source, e5.target,
                  e6.source, e6.target,
                  e7.source, e7.target,
                  e8.source, e8.target ]
    var edges = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12]
    var player = new Player(new Vector(0,0,100), new Vector(1,0,0))

    var draw = function(){
      background(255,255,255);
      for (i = 0; i < edges.length; i++){
        edges[i].sketchRelativeTo(player)
      }
    }

    var keyPressed = function(){
      player = player.rotate(key)

      if (key === "W" ) {
        player.loc = (player.loc).plus(scalMult(0.5,player.heading));
      }
      if (key === "S" ) {
        player.loc = (player.loc).minus(player.heading);
      }
    }
}
