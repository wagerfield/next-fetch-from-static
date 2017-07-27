import { Component } from 'react'
import fetch from 'isomorphic-fetch'

class Index extends Component {

  static async getInitialProps({ req, query }) {
    const locale = query && query.locale || 'en'
    const host = req && req.host && req.host.headers || 'localhost:3000'
    const baseURL = `http://${host}/static/locales/`
    const dataURL = `${baseURL}${locale}.json`
    const response = await fetch(dataURL)
    if (response.status === 200) {
      const data = await response.json()
      console.log('getInitialProps')
      console.log('- host:', host)
      console.log('- locale:', locale)
      console.log('- baseURL:', baseURL)
      console.log('- dataURL:', dataURL)
      console.log('- data:', data)
      return { data }
    } else {
      throw new Error(`${respose.status} ${dataURL}`)
    }
  }

  // static async getInitialProps({ req, query }) {
  //   const locale = query && query.locale || 'en'
  //   const data = await eval(`require('../static/locales/${locale}.json')`)
  //   return { data }
  // }

  render() {
    return <h1>{this.props.data.hello}</h1>
  }
}

export default Index