/**
 * Created by Mapple on 16/7/18.
 */

var num = 0;
var btn;
var txt;

window.onload = function () {
    txt = document.getElementById("txt");
    btn = document.getElementById("addbtn");
    if(sessionStorage.num){
        num = sessionStorage.num;
    } else {
        num = 0;
    }

    btn.onclick = function () {
        num++;
        sessionStorage.num = num;
        showNum();
    }
}

function showNum() {
    txt.innerHTML = num;
}