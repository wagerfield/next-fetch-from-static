module.exports = {
  exportPathMap() {
    return {
      '/en': {
        page: '/',
        query: {
          locale: 'en'
        }
      },
      '/fr': {
        page: '/',
        query: {
          locale: 'fr'
        }
      }
    }
  }
}