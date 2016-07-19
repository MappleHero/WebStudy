/**
 * Created by Mapple on 16/7/19.
 */

var clickMeBtn;

$(document).ready(function () {
    clickMeBtn = $("#clickMeBtn");
    clickMeBtn.click(function () {
       var e = jQuery.Event("MyEvent");
        clickMeBtn.trigger(e);
    });

    clickMeBtn.bind("MyEvent",function (event) {
        console.log(event);
    });
});