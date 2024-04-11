const express = require('express')
const rotaClient = require('./rotas/client')
const rotaExercise = require('./rotas/exercise')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/clients', rotaClient)
app.use('/exercises', rotaExercise)

const port = 8000

app.listen(port, () => {
    console.log(`Executando a porta ${port}`)
})