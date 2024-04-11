const fs = require('fs')

function getAllClients(){
    return JSON.parse(fs.readFileSync('clients.json'))
}

function getClientById(id){
    const clients = getAllClients()
    return clients.filter(client => client.id === id)
}

function createClient(newClient){
    const clients = getAllClients()
    const newClientList = [...clients, newClient]
    fs.writeFileSync('clients.json', JSON.stringify(newClientList))
}

function updateClient(id, modifications){
    let currentClients = getAllClients()
    const modifiedIndex =  currentClients.findIndex(client => client.id === id)
    const modifiedContent = {...currentClients[modifiedIndex], ...modifications}
    currentClients[modifiedIndex] = modifiedContent
    fs.writeFileSync('clients.json', JSON.stringify(currentClients))
}

function deleteClientByID(id) {
    const clients = getAllClients()
    const filteredList = clients.filter(client => client.id !== id)
    fs.writeFileSync('clients.json', JSON.stringify(filteredList))
}

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    updateClient,
    deleteClientByID
}
