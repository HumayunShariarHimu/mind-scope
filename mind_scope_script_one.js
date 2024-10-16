size = 180
pos = [0,0]
tel = $(".telescope")
function zoomin(){
  size += 10
  tel.css("background-size", size+"%")
}

function zoomout(){
  if (size!=10){
    size -= 10
    tel.css("background-size", size+"%")
  }
}

function up(){
  pos[1]-=5
  tel.css("background-position", pos[0]+"% "+pos[1]+"% ")
}

function down(){
  pos[1]+=5
  tel.css("background-position", pos[0]+"% "+pos[1]+"% ")
}


function left(){
  pos[0]-=5
  tel.css("background-position", pos[0]+"% "+pos[1]+"% ")
}

function right(){
  pos[0]+=5
  tel.css("background-position", pos[0]+"% "+pos[1]+"% ")
}


$(".zoomin").click(zoomin)
$(".zoomout").click(zoomout)

$(".up").click(up)
$(".left").click(left)
$(".right").click(right)
$(".down").click(down)