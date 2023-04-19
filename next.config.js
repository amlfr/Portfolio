/** @type {import('next').NextConfig} */
const path = require("path");

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src https://amlfr.vercel.app/;
  style-src 'self' 'unsafe-hashes' 'sha256-zlqnbDt84zf1iSefLU/ImC54isoprH/MRiVZGskwexk=';
  font-src 'self';  
`;

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
        value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
    },
];

const nextConfig = {
    async headers() {
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
