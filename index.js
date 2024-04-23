const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {

    const data = {
        message: 'My name is Jarrett Gaither',
        newField: 'Hello World',
        timestamp: Date.now()
    };

    res.json(data);

});

app.listen(port, () => {

    console.log('Web application is listening on port ' + port);

});
