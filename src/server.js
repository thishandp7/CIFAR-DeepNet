const path = require('path')
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    // Serve static files from the "data" directory
    server.use('/data', express.static(path.join(__dirname, '../data')))

    // All other requests go to Next.js
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3001, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3001')
    })
}).catch((err) => {
    console.error(err.stack)
    process.exit(1)
})