const { getAllClients, getClientById, createClient, updateClient, deleteClientByID } = require('../servicos/client')

function getClients(req, res) {
    try {
        const clients = getAllClients()
        res.send(clients)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function getClient(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const client = getClientById(id)
            res.send(client)
        } else {
            res.status(422).send('Unvalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function postClient(req, res) {
    try {
        const newClient = req.body
        if (req.body.name) {
            createClient(newClient)
            res.send('Client created')
            res.status(201)
        } else {
            res.status(422).send('Unvalid name')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function patchClient(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            updateClient(id, body)
            res.send('Client updated')
        } else {
            res.status(422).send('Unvalid ID')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteClient(req, res){
    try {
        const id = req.params.id
        if(id && Number(id)){
            deleteClientByID(id)
            res.send(`Client with id ${id} deleted`)
        } else {
            res.status(422).send('Unvalid ID')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getClients,
    getClient,
    postClient,
    patchClient,
    deleteClient
}

