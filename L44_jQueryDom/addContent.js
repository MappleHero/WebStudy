/**
 * Created by Mapple on 16/7/19.
 */

// append
// prepend
// before
// after

$(document).ready(function () {
   $("#btn1").click(function () {
       // $("#p1").append("this is my web and content");
       $("#p1").prepend("this is my web and content,");
   });

    $("#btn2").click(function () {
        // $("#p1").append("this is my web and content");
        // $("#p2").before("hello");
        $("#p2").after("hello");
    });
});

function appendText() {
    /*
    * html、jQuery、DOm
    * */
    var text1 = "<p>mapple</p>";
    var text2 = $("<p></p>").text("hero");
    var text3 = document.createElement("p");
    text3.innerHTML="haha";
    $("body").append(text1,text2,text3);
}





