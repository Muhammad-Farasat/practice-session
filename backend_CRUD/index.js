const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send("Hello..! I'm Farasat.")
})

app.post('/add', (req, res) => {
    const data = req.body
    res.send(data)
})



app.listen(port, ()=>{
    console.log("Listening on PORT", port);
    
})

