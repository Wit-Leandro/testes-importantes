const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.post('/pedido', (req, res) =>{
    const pedido = req.body
    console.log('peido recebido: ', pedido)
    res.status(200).json({message: 'Pedido recebido com sucesso!', pedido: pedido})
})
app.listen(PORT, () => {
    console.log('servidor rodando na porta '+ PORT)
})