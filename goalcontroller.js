const express = require('express')
const router = express.Router()
const {
    getGoals
} = require('../controllers/goalcontroller')

router.get('/', getGoals)

router.post('/', (req, res) => {
    res.status(200).json({
        message: `Set Goal ${req.params.id}`
    })
})
router.put('/:id', (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})
router.delete('/:id', (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})
module.export = router

//@desc Get goals
//@route Get/api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
}

//@desc Set goals
//@route Post/api/goals
//@access Private 
const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400).json({
            message: 'Please add a text field'
        })
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'set Goal'
    })

}
//@desc Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
}

//@desc Delete goal
//route Delete/api/goals/:id
//@access Private
const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
}
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}