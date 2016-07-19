/**
 * Created by Mapple on 16/7/19.
 */

/*
* parent
* parents
* parentUntil
* */

$(document).ready(function () {
    // $("#div1").children().css({border:"3px solid blue"})
    // $("#div1").find("a").css({border:"3px solid red"})
    $("a").parentsUntil("#div1").css({border:"3px solid red"})
});