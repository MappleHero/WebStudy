/**
 * Created by Mapple on 16/7/21.
 */

var pb;
var max = 100;
var current = 0;

$(document).ready(function () {
    pb = $("#pb");
    pb.progressbar({max:100})
    setInterval(changepb,1000);
});

function changepb() {
    current++;
    if(current>=100){
        current = 0;
    }
    pb.progressbar("option","value",current);
}
