const Express = require('express')

const app = Express();

app.use((req, res) => {
    res.send('Hello World!');
})

app.listen({ port: 8002 });