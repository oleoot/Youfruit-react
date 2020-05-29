const express = require('express');
const cors = require('cors');
const monk = require('monk');

require('dotenv').config();

const app = express();


const db = monk(process.env.DATABASE_URL);
const orderDb = db.get('order')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.json({
        message: "Order"
    })
})

app.get('/order', (req, res) => {
    orderDb.find().then(orderDb => {
        res.json(orderDb)
    })
})


app.post('/order', (req, res) => {
    const order = {
        name: req.body.name,
        phone: req.body.phone,
        comments: req.body.comments,
        products: req.body.products,
        total: req.body.total,
    }
    console.log(order)
    orderDb
        .insert(order)
})








const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
