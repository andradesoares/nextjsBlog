const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER ) {
    return {
      env: {
        mongodb_username: 'blog_admin',
        mongodb_password: '36KR26NVy6xniC05',
        mongodb_clustername: 'blog',
        mongodb_database: 'my_site'
      }
    }
  }
  return {
    env: {
      mongodb_username: 'blog_admin',
      mongodb_password: '36KR26NVy6xniC05',
      mongodb_clustername: 'blog',
      mongodb_database: 'my_site'
    }
  }
}