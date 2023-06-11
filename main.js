function setup(){
    Canvas=createCanvas(500,400)
    Canvas.position(100,250)
    camera=createCapture(VIDEO)
    camera.hide()
    }
    function draw(){
    image(camera,100,75,300,250)
    fill("cyan")
    circle(50,50,50)
    fill("red")
    rect(75,30,350,36);
    fill("cyan")
    circle(450,50,50)
    fill("red")
    rect(432,75,36,250)
    fill("cyan")
    circle(450,350,50)
    fill("red")
    rect(75,332,350,36)
    fill("cyan")
    circle(50,350,50)
    fill("red")
    rect(35,75,36,250)
    }
    function take_snapshot(){
    save("myimage.png")
    }