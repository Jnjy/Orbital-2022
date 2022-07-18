const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    target: 'node',
    "stream": false,
    "crypto": false,
    plugins: [
        new NodePolyfillPlugin()
    ]
}