const express = require('express');
const app = express();

app.use(express.static('./dist/client-frontend'));

app.get('/*', (req,res) => {
    res.sendFile('index.html', {root: 'dist/client-frontend/'});
});

app.listen(process.env.PORT || 8080);

// Added Comment to push changes