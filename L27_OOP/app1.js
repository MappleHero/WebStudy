/**
 * Created by Mapple on 16/7/11.
 */


(function () {
    var n = "mapples"
    function People(name) {
        this._name = name;
    }

    People.prototype.say = function () {
        alert("peo-hello"+name);
    }
    window.People = People;
}());

(function () {
    function Student(name) {
        this._name = name;
    }

    Student.prototype = new People();
    var superSSay = Student.prototype.say;
    Student.prototype.say = function () {
        superSSay.call(this);
        alert("stu-hello"+this._name);
    }
    window.Student = Student;
}());


var s = new Student("mapple");
s.say();