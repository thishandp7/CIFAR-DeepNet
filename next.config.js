const path = require('path')

module.exports = {
    reactStrictMode: true, // Enables React's Strict Mode
    // Add your custom Next.js configuration options here
    images: {
        domains: [], // Add any external image domains here
    },
    serverRuntimeConfig: {
        PROJECT_ROOT: __dirname,
    },
}