const { Router } = require('express')
const { getExercises, getExercise, postExercise, patchExercise, deleteExercise } = require('../controladores/exercise')


const router = Router()

router.get('/', getExercises)
router.get('/:id', getExercise)
router.post('/', postExercise)
router.patch('/:id', patchExercise)
router.delete('/:id', deleteExercise)


module.exports = router