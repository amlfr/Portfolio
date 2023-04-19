/** @type {import('next').NextConfig} */
const path = require("path");

const securityHeaders = [
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "Content-Security-Policy",
        value: "default-src 'self;",
    },
];

const nextConfig = {
    async Headers() {
        return [
            {
                source: "/:path*",
                headers: securityHeaders,
            },
        ];
    },

    reactStrictMode: true,

    //Sets up sass to use variables in every files
    sassOptions: {
        includePaths: [path.join(__dirname, "pages")],
        prependData: `@import "_variables.scss";`,
    },
};

module.exports = nextConfig;
