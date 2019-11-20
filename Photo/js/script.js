lightbox.option({
    'showImageNumberLabel': false,
    'wrapAround': true,
    'positionFromTop': 125,
    'alwaysShowNavOnTouchDevices': true
})


document.getElementById("search").addEventListener("keyup", filter);

function filter() {
    var x = document.getElementById("search");
    x.value = x.value.toLowerCase();
    console.log(x.value);

    const gallery = document.querySelectorAll('a[data-title]');
    for (let i = 0; i < gallery.length; i++) {
        let caption = gallery[i].getAttribute("data-title").toLowerCase();
        
        if(caption.indexOf(x.value)> -1) { 
            document.getElementsByClassName('photo')[i].style.display = ""; 
        } else {
            document.getElementsByClassName('photo')[i].style.display = "none";
        }
    }
}


