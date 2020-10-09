/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-sass', 'gatsby-plugin-react-helmet', {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'GatsbyJS',
      short_name: 'GatsbyJS',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      // Enables 'Add to Homescreen' prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: 'standalone',
      icon: 'src/assets/images/icon.png', // This path is relative to the root of the site.
      icons:[
        {
          src: "icons/icon.png",
          sizes: "48x48",
          type: "image/png"
        },{
          src: "icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png"
        },{
          src: "icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png"
        },{
          src: "icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },{
          src: "icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },{
          src: "icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png"
        },{
          src: "icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png"
        },{
          src: "icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: '/maskable_icon.png',
          sizes: '480x480',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to 'anonymous'
      crossOrigin: 'use-credentials',
    },
  }, 'gatsby-plugin-offline'],
}
