/**
 * Created by Mapple on 16/7/21.
 */

$(document).ready(function () {
    var autotags = ["mapple","hero", "html","css","javascript","java","android","iOS"];
    $("#tags").autocomplete({
        source:autotags
    });
});