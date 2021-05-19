//Install express server
const express = require('express');
const path = require('path');
const locale = require('locale');
const supportedLocales = ['en', 'es'];

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular'));
app.use(locale(supportedLocales));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8180);

app.get('/*', (req, res) => {
    const matches = req.url.match(/^\/([a-z]{2}(?:-[A-Z]{2})?)\//);
    const locale = matches && supportedLocales.indexOf(matches[1]) !== -1 ? matches[1] : req.locale;
    res.sendFile('index.html',{root:`dist/angular/${locale}/`});
});
