const policy = {
    userAgent: "*"
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
