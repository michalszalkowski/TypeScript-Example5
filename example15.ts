class Helper {
    static environment = "dev";

    public static log(...str): void {
        console.log(str);
    }
}

console.log(Helper.environment);
Helper.log("Wow", 1, true);