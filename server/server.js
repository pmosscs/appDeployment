const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('client'))

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
    accessToken: '31a1f2d38a2b462889b536bdb5865058',
    caputureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

const { getHTML, getCSS, getJS } = require('./controller')

app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)
 

const port = process.env.PORT || 4000


app.listen(port, console.log(`Server running on ${port}`))