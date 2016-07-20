/**
 * Created by Mapple on 16/7/20.
 */

$(document).ready(function () {
    $("#Rect1").draggable();
    $("#Rect2").droppable();

    $("#Rect2").on("drop",function (event,ui) {
       // alert(event);
        $("#Rect2").text("drop事件");
    });
});