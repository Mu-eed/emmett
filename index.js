const express = require('express');

const port = parseInt(process.env.port) || 4000;

const app = express();

const route = express.Router();
app.use(
    route
)

route.get('/', (req, res)=>{
    res.status(200).send("Well done!");
})

app.listen(port, ()=>{
    console.log('Server is running at ${port}');
})