const path = require('path')
const Rollbar = require('rollbar')
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
        rollbar.log('someone clicked this image')
        res.status(200).send(veryRealAlien)
    }
}