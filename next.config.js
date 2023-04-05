/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    reactStrictMode: true,

    //Sets up sass to use variables in every files
    sassOptions: {
        includePaths: [path.join(__dirname, "pages")],
        prependData: `@import "_variables.scss";`,
    },
};

module.exports = nextConfig;
