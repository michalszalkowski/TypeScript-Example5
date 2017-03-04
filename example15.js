var Helper = (function () {
    function Helper() {
    }
    Helper.log = function () {
        var str = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            str[_i - 0] = arguments[_i];
        }
        console.log(str);
    };
    Helper.environment = "dev";
    return Helper;
}());
console.log(Helper.environment);
Helper.log("Wow", 1, true);
