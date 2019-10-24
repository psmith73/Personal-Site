var isDown = false;

$('#caree').mousedown(function (e) { 
  isDown = true;
});

$('html').mouseup(function (e) { 
  isDown = false;
});
$('html').mousemove(function (e) {
  if (isDown)
  {
    $('#caree').offset({ top: e.pageY-40, left: e.pageX-40 });
  }
});

function touch2Mouse(e)
{
  var theTouch = e.changedTouches[0];
  var mouseEv;

  switch(e.type)
  {
    case "touchstart": mouseEv="mousedown"; break;  
    case "touchend":   mouseEv="mouseup"; break;
    case "touchmove":  mouseEv="mousemove"; break;
    default: return;
  }

  var mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
  
  theTouch.target.dispatchEvent(mouseEvent);
  e.preventDefault();
}

document.addEventListener("touchstart", touch2Mouse, true);
document.addEventListener("touchmove", touch2Mouse, true);
document.addEventListener("touchend", touch2Mouse, true);