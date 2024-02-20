const siteUrl = "https://attomo.digital";

const policy = {
    userAgent: "*",
    allow: "/",
    disallow: ["/en/privacidad", "/en/terminos", "/en/terms", "/en/privacy", "/terms", "/privacy"],
    // sitemap: `${siteUrl}/server-sitemap.xml`
};

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
