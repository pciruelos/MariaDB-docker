const express = require('express');
const app = express();
const pool = require('./database');

app.use(express.json());

app.get('/products', async (req, res) => {
    //get connection
    const conn = await pool.getConnection();
    // new query
    const query = 'select * from products';
    //executing the query
   const rows = await conn.query(query);

   //response to the client
   res.status(200).json(rows);
})

app.post('/new-product', async (req, res) => {
    try {
        //get connection
       const conn = await pool.getConnection();
      const {name} = req.body;
      console.log(req.body)
        // new query
       //const query = 'insert into products(name) value(?)';
        //executing the query
      // const result = await conn.query(query, name1);

       const result = await conn.query('INSERT INTO products(name) VALUE (?)', [name]);
    
       //response to the client
      res.status(200).json(result);
         
    } catch (error) {
        console.log(error)
    }
         
})
app.listen(3000, () => {
    console.log('3000')
})