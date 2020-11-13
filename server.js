const express = require('express');
const app = express();

// Serving our static files which are stored in the dist folder when we run ng build
app.use(express.static('./dist/client-frontend'));

// Wait for a request to any path and direct all requests to index.html
app.get('/*', (req,res) => {
    res.sendFile('index.html', {root: 'dist/client-frontend/'});
});

app.listen(process.env.PORT || 8080);

// Added Comment to push changes