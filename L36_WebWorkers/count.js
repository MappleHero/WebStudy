/**
 * Created by Mapple on 16/7/18.
 */

var countNum = 0;
function count() {
    postMessage(countNum);
    countNum++;
    setTimeout(count, 1000);
}

count();