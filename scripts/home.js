/**
 * Created by austin on 3/14/17.
 */

var name = "ALTLAKE";


window.onload = function () {

    console.log(document.cookie);

    // if (document.cookie == 'visited=true') {
    //     console.log("cats");
    // }
    // leaveCookie();
    typeName();
}

function typeName() {
    var x = document.getElementById('name');
    var speed = 300;
    var blinkCounter = 0;
    var textcounter = 0;
    var blinkCursor = setInterval(function() {

        if (blinkCounter < 6) {
            x.style.display = (x.style.display == 'none' ? '' : 'none');
        } else if(textcounter < name.length){
            speed = 100;
            x.innerHTML += name[textcounter];
            textcounter++;
        } else {
            showLinks();
            clearInterval(blinkCursor);
        }
        blinkCounter++;
    }, speed);
}

function showLinks() {
    var toHide = document.getElementsByClassName('button');
    for (var i = 0; i < toHide.length; i++) {
        toHide[i].style.visibility = "visible";
    }
}

// function leaveCookie() {
//     var current = new Date();
//     var newMin = current.getMinutes() + 1;
//     current.setMinutes(newMin);
//     var toLeave = "visited=true; " + current.toUTCString();
//     document.cookie = toLeave;
// }