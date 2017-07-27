1. Install dependencies: `yarn install`
2. Run in development: `yarn dev`
3. Navigate to: `http://localhost:3000`
    - See that 'Hello' is rendered from `static/locales/en.json`
    - Look in the terminal to see the values logged from `getInitialProps`
4. Update the URL to: `http://localhost:3000?locale=fr`
    - See that 'Bonjour' is rendered from `static/locales/fr.json`
    - Look in the terminal to see the values logged from `getInitialProps`
5. Update the URL to: `http://localhost:3000?locale=de`
    - Notice that 404 errors are handled
6. Kill the dev server and run: `yarn build`
    - See `FetchError` in terminal
    - No server is running to host the `static` dir, therefore the JSON files cannot be loaded

I have also tried replacing the `fetch` logic with `eval('require('path/to/dynamic-locale.json'))`:

```js
static async getInitialProps({ req, query }) {
  const locale = query && query.locale || 'en'
  const data = eval(`require('../static/locales/${locale}.json')`)
  return { data }
}
```

...but get the error: `Cannot find module '../static/locales/en.json'`