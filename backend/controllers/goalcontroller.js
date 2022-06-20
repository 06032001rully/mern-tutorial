const asyncHandler = require(`express-async-handler`)
//@desc Get goals
//@route Get/api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get Goals'
    })
})

//@desc Set goals
//@route Post/api/goals
//@access Private 
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400).json({
            message: 'Please add a text field'
        })
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        message: 'set Goal'
    })

})
//@desc Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update Goal ${req.params.id}`
    })
})

//@desc Delete goal
//route Delete/api/goals/:id
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete Goal ${req.params.id}`
    })
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}