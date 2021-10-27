myCanvas = document.getElementById("myCanvas")

ctx = myCanvas.getContext("2d")

var color = "Black"

var width_of_line = 1

var mp = ""

myCanvas.addEventListener("touchstart", touchingscreen)

var last_positionofx
var last_positionofy

var current_x
var current_y

function touchingscreen(e)
{
    color = document.getElementById("color").value

    console.log(e)

    width_of_line = document.getElementById("linewidth").value

    last_positionofx = e.touches[0].clientX - myCanvas.offsetLeft
    last_positionofy = e.touches[0].clientY - myCanvas.offsetTop
}

myCanvas.addEventListener("touchmove", touch_move)

function touch_move(r)
{
    current_x = r.touches[0].clientX - myCanvas.offsetLeft
    current_y = r.touches[0].clientY - myCanvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth=width_of_line
    ctx.moveTo(last_positionofx, last_positionofy)
    ctx.lineTo(current_x, current_y)
    ctx.stroke()

    last_positionofx=current_x
    last_positionofy=current_y
}

function clearareas()
{
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height)
}