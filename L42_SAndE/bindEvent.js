/**
 * Created by Mapple on 16/7/19.
 */

$(document).ready(function () {
   // $("#clickMeBtn").click(function () {
   //     alert("hello");
   // }) ;

    // $("#clickMeBtn").bind("click",clickHandler1);
    // $("#clickMeBtn").bind("click",clickHandler2);
    // $("#clickMeBtn").unbind("click",clickHandler1);

    $("#clickMeBtn").on("click",clickHandler1);
    $("#clickMeBtn").on("click",clickHandler2);
    $("#clickMeBtn").off("click",clickHandler1);
});

function clickHandler1(e) {
    console.log("clickHandle1");
}

function clickHandler2(e) {
    console.log("clickHandle2");
}