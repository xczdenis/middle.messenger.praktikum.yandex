const jsdom = require('jsdom')
const { JSDOM } = jsdom

// class XMLHttpRequest {}

// global.XMLHttpRequest = XMLHttpRequest

const dom = new JSDOM(
  `<!doctype html>
<html lang='en'>
<head></head>
<body>
  <div id='app'>
    <div id='routerView'></div>
  </div>
</body>
</html>
`,
  { url: 'http://localhost' }
)

global.window = dom.window
global.document = dom.window.document
