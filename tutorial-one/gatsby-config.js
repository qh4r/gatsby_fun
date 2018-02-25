module.exports = {
  plugins: [
    // simple way of using plugin
    // 'gatsby-plugin-typography'
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      }
    }
  ]
}
