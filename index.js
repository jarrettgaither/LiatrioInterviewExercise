const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {

    const data = {
        message: 'My name is Jarrett Gaither',
        timestamp: new Date().toISOString() 
    };
    res.json(data);

});

app.listen(port, () => {

    console.log('Web application is listening on port ' + port);

});
