const policy = {
    userAgent: "*",
    allow: "/"
};
const siteUrl = "https://www.attomo.digital";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            policy
        ],
        additionalSitemaps: [`${siteUrl}/server-sitemap.xml`]
    },
    outDir: "./out"
}
