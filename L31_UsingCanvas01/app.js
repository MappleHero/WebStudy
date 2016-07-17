/**
 * Created by Mapple on 16/7/17.
 */

var canvas;
var stage;
var txt;
var count = 0;
window.onload = function () {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    txt = new createjs.Text("Hello World->0", "20px Arial", "#ff7700");
    stage.addChild(txt);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick",tick);
}

function tick(event) {
    count++;
    txt.text = "Hello World->"+count+"!";
    stage.update();
}