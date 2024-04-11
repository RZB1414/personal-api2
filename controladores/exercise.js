const { getAllExercises, getExerciseById, createExercise, updateExercise, deleteExerciseByID } = require('../servicos/exercise')

function getExercises(req, res) {
    try {
        const exercises = getAllExercises()
        res.send(exercises)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function getExercise(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const exercise = getExerciseById(id)
            res.send(exercise)
        } else {
            res.status(422).send('Unvalid ID')
        }
    }
    catch (error) {
        res.status(500).send(error.message)
    }
}

function postExercise(req, res) {
    try {
        const newExercise = req.body
        if (req.body.name) {
            createExercise(newExercise)
            res.send('Exercise created')
            res.status(201)
        } else {
            res.status(422).send('Unvalid name')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function patchExercise(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const body = req.body
            updateExercise(id, body)
            res.send('Exercise updated')
        } else {
            res.status(422).send('Unvalid ID')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteExercise(req, res) {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deleteExerciseByID(id)
            res.send(`Exercise with id ${id} deleted`)
        } else {
            res.status(422).send('Unvalid ID')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getExercises,
    getExercise,
    postExercise,
    patchExercise,
    deleteExercise
}

