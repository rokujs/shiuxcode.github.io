module.exports = {
  async redirects () {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      },
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true
      }
    ]
  }
}
