const siteUrl = "https://www.attomo.digital";

const policy = {
    userAgent: "*",
    allow: "/",
    disallow: ["/privacidad", "/terminos", "/en/privacidad", "/en/terminos"],
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
