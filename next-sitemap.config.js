const policy = {
    userAgent: "*",
    allow: "/"
};

module.exports = {
    siteUrl: "https://www.attomo.digital",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            policy
        ]    
    },
    outDir: "./out"
}
