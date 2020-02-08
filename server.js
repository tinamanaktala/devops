const express = require('express');

const app= express();

app.get('/api/customers', (req,res)=>{
    const customers=[
        {
            id:1,
            name:'Tina'
        },
        {
            id:2,
            name:'Guneet'
        }
    
    ]

    res.json(customers);
})

const port =5000;

app.listen(port, ()=>console.log(`server started on port ${port}`));