const app = require('express')();
const port = process.env.PORT || 8080;

app.listen(
    port,
    () => console.log(`Working on localhost:${port}`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        date: new Date().toLocaleString()
    })
});