/**
 * Created by Mapple on 16/7/19.
 */

$(document).ready(function () {
    $("#btn1").click(function () {
        $("#p1").text("即可修改");
    });

    $("#btn2").click(function () {
        $("#p2").html("<a>google搜索</a>");
    });

    $("#btn3").click(function () {
        $("#i3").val("学习jQuery");
    });

    $("#btn4").click(function () {
        $("#aid").attr({
            "href":"http://www.google.com",
            "title":"hello"
        });
    });

    $("#btn5").click(function () {
       $("#p5").text(function (i,ot) {
          return "old:"+ot+" new:这是新的内容"+(i);
       });
    });
})