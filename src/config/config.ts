export default {
    PORT: process.env["PORT"] || "3000",
    rootServiceUrl: "http://localhost:3000",
    jwtSecret: "moneywhereappsupersecret",
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
