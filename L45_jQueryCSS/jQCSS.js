/**
 * Created by Mapple on 16/7/19.
 */

$(document).ready(function () {
    // $("div").css("width","100px");
    // $("div").css("height","100px");
    // $("div").css("background","red");

    // $("div").css({
    //     width:"100px",height:"100px",backgroundColor:"blue"
    // })

    $("div").addClass("style1");
    $("div").click(function () {
        // $(this).addClass("style2");
        $(this).toggleClass("style2");
    });
});