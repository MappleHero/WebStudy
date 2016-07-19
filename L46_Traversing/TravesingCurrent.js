/**
 * Created by Mapple on 16/7/19.
 */


/*
 * sibings() ---所有同级元素全部修改
 * next() ----下一个元素修改
 * nextAll() ----下面所有元素修改
 * nextUntil() ----下面元素区间修改
 * prev()
 * preAll()
 * preUntil()
 * */

$(document).ready(function () {
    // $("h4").siblings().css({border:"3px solid red"});
    // $("h4").next().css({border:"3px solid red"});
    // $("h4").nextAll().css({border:"3px solid red"});
    // $("h4").nextUntil("h6").css({border:"3px solid red"});
    $("h4").nextUntil("h6").css({border:"3px solid red"});
});