/**
 * Created by Mapple on 16/7/11.
 */
window.onload = function () {
    imgLocation("container", "box");
}

function imgLocation(parent, content) {
    // 将parent下所有的content全部取出来
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    // console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.documentElement.clientWidth / imgWidth);
    cparent.style.cssText = "width:"+imgWidth * cols+"px;margin:0 auto";
}


function getChildElement(parent, content) {
    var contentArr = [];
    var allContent = parent.getElementsByTagName("*");
    for(var i =0;i<allContent.length;i++){
        if(allContent[i].className = content){
            contentArr.push(allContent[i]);
        }
    }
    return contentArr;
}