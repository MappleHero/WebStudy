/**
 * Created by Mapple on 16/7/18.
 */

var ta;
var btn;

window.onload = function () {
    ta = document.getElementById("ta");
    if(localStorage.text){
        ta.value = localStorage.text;
    }

    btn = document.getElementById("btn");
    btn.onclick =function () {
        localStorage.text = ta.value;
    }
}