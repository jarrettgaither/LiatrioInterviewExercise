const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {

    const data = {
        message: 'My name is Jarrett Gaither',
        timestamp: Date.now()
    };

    const dataAsString = JSON.stringify(data);
    const minString = dataAsString.replace(/\s+/g, '');

    res.json(JSON.parse(minString));

});

app.listen(port, () => {

    console.log('Web application is listening on port ' + port);

});
