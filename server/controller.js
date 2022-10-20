const path = require('path')
const Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '31a1f2d38a2b462889b536bdb5865058',
    caputureUncaught: true,
    captureUnhandledRejections: true,
})

let veryRealAlien = "./images/veryReal.png"


module.exports = {
    getHTML: (req, res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },

    getCSS: (req, res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../client/styles.css'))
    },

    getJS: (req, res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../client/script.js'))
    },

    getAlienPic: (req, res) => {
        rollbar.info('someone clicked the pic')
        res.status(200).send(veryRealAlien)
    }
}