/**
 * Created by Mapple on 16/7/19.
 */

$.myjq = function () {
    alert("Hello myjQuery");
};

$.fn.myjq = function () {
  $(this).text("Hello");
};