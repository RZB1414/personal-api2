const fs = require('fs')

function getAllExercises(){
    return JSON.parse(fs.readFileSync('exercises.json'))
}

function getExerciseById(id){
    const exercises = getAllExercises()
    return exercises.filter(exercise => exercise.id === id)
}

function createExercise(newExercise){
    const exercises = getAllExercises()
    const newExerciseList = [...exercises, newExercise]
    fs.writeFileSync('exercises.json', JSON.stringify(newExerciseList))
}

function updateExercise(id, modifications){
    let currentExercises = getAllExercises()
    const modifiedIndex =  currentExercises.findIndex(exercise => exercise.id === id)
    const modifiedContent = {...currentExercises[modifiedIndex], ...modifications}
    currentExercises[modifiedIndex] = modifiedContent
    fs.writeFileSync('exercises.json', JSON.stringify(currentExercises))
}

function deleteExerciseByID(id) {
    const exercises = getAllExercises()
    const filteredList = exercises.filter(exercise => exercise.id !== id)
    fs.writeFileSync('exercises.json', JSON.stringify(filteredList))
}

module.exports = {
    getAllExercises,
    getExerciseById,
    createExercise,
    updateExercise,
    deleteExerciseByID
}
