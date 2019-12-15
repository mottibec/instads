export default {
    PORT: process.env["PORT"] || "3000",
    rootServiceUrl: "http://localhost:3000",
    jwtSecret: process.env["jwtSecret"] || "instadsappsupersecret",
    databaseUrl: process.env["MONGODB_URI"] || "mongodb://localhost/insta-ads-dev",
    oAuth: {
        facebook: {
            appId: process.env["facebookAppId"] || "facebookAppId",
            secret: process.env["facebookAppSecret"] || "facebookAppSecret",
        },
        google: {
            appId: process.env["googleAppId"] || "googleAppId",
            secret: process.env["googleAppId"] || "googleAppId"
        }
    }

};
