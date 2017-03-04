class Config {

    private static instance: Config;
    private environment = "dev";

    private constructor() {
    }

    static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    public getEnvironment(): string {
        return this.environment;
    }
}

const god = Config.getInstance();
console.log(god.getEnvironment());