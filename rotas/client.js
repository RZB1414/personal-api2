const { Router } = require('express')
const { getClients, getClient, postClient, patchClient, deleteClient } = require('../controladores/client')


const router = Router()

router.get('/', getClients)
router.get('/:id', getClient)
router.post('/', postClient)
router.patch('/:id', patchClient)
router.delete('/:id', deleteClient)


module.exports = router