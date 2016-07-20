/**
 * Created by Mapple on 16/7/20.
 */
$(document).ready(function () {
    $("#btn").button();
    $("#select").selectable();
    $("#btn").on("click",function () {
        if($("#right").hasClass("ui-selected")){
            alert("您答对了");
        }
    });
});