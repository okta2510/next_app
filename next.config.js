/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
}


// if you want to configure the Sass compiler you can do so by using sassOptions in next.config.js.
// For example to add includePaths:

