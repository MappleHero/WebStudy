/**
 * Created by Mapple on 16/7/19.
 */

var myjq = $.noConflict();

myjq(document).ready(function () {
    myjq("#btn").click(function () {
        myjq("div").text("new Hello");
    }); 
});