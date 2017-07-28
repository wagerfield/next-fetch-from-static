import { Component } from 'react'
import { resolve } from 'path'
import fetch from 'isomorphic-fetch'

const locales = {
  en: import('../static/locales/en.json'),
  fr: import('../static/locales/fr.json')
}

class Index extends Component {

  static async getInitialProps({ query }) {
    const { locale = 'en' } = query
    const data = await locales[locale]
    return { data }
  }

  render() {
    return <h1>{this.props.data.hello}</h1>
  }
}

export default Index