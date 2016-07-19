/**
 * Created by Mapple on 16/7/19.
 */

/*
 * first() ---寻找同样元素的第一个
 * last()
 * eq()
 * filter()
 * not()
 * */

$(document).ready(function () {

    // $("div p").first("#div1").css("background-color","red")
    // $("div p").last("#div1").css("background-color","red")
    // $("div p").eq(2).css("background-color","red")
    // $("div p").filter("p").css("background-color","red")
    $("div p").not(".pclass").css("background-color","red")
});