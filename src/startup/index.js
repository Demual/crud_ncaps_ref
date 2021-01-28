// Requires //
const express = require('express')

let _express = null
let _config = null

class Server {
    constructor({ config, router }) {
        _config = config,
        _express = express().use(router)
    }
    // Method start //
    start() {
        return new Promise((resolve) => {
            _express.listen(_config.PORT, () => {
                console.log(_config.APPLICATION_NAME, 'Server ON, port:', _config.PORT)
                resolve()
            })
        })
    }
}

// Exports //
module.exports = Server