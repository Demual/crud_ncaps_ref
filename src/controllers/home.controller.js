// Variables //
let _homeService = null

// Class - Debe coincidir con el container //
class HomeController {
    constructor({ HomeService }) {
        _homeService = HomeService
    }
    // Requerimos de home.services.js el mético index
    index(req, res) {
        return res.send(_homeService.index())
    }
}

// Exports //
module.exports = HomeController