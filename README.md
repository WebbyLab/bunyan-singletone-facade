# bunyan-singletone-facade
Bunyan logger singletone facade

## Usage

In app.js

```js
var logger = require('bunyan-singletone-facade');

logger.init({
    directory: __dirname + "/logs",
    name: 'apixaban'
});
```

After init you can require logger where are you need.
