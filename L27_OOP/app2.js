/**
 * Created by Mapple on 16/7/11.
 */
function Person(name) {
    var _this = {}
    _this._name = name;
    _this.sayHello = function () {
        alert("pHello"+_this._name);
    }
    return _this;
}

function Teacher(name) {
    var _this = Person(name);
    var supperSay = _this.sayHello;
    _this.sayHello = function () {
        supperSay.call(_this);
        alert("tHello"+_this._name);
    }
    return _this;
}
var t = Teacher("Mapple");
t.sayHello();