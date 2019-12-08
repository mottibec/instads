export default {
    PORT: process.env["PORT"] || "3000",
    rootServiceUrl: "http://localhost:3000",
    jwtSecret: "instadsappsupersecret",
    databaseUrl: "mongodb://localhost/insta-ads-dev",
    oAuth: {
        facebook: {
            appId: process.env["facebookAppId"] || "empty",
            secret: process.env["facebookAppSecret"] || "empty",
        },
        google: {
            appId:process.env["googleAppId"] || "empty",
            secret: process.env["googleAppId"] || "empty"
        }
    }

};
