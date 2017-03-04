var Config = (function () {
    function Config() {
        this.environment = "dev";
    }
    Config.getInstance = function () {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    };
    Config.prototype.getEnvironment = function () {
        return this.environment;
    };
    return Config;
}());
var god = Config.getInstance();
console.log(god.getEnvironment());
