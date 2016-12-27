const express = require('express')
const next = require('next')
const httpProxy = require('http-proxy')

const app = next({ dir: '.', dev: true })
const handle = app.getRequestHandler()

const proxy = httpProxy.createProxyServer({
  target: "http://api.football-data.org/v1/competitions/426",
  changeOrigin: true
});

app.prepare()
.then(() => {
  const server = express();

  server.use('/api', (req, res) => {
    proxy.web(req, res);
  });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 5000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost')
  })
})
