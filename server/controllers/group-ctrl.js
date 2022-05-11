const Group = require('../models/group-model')

const createGroup = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a group',
        })
    }

    const group = new Group(body)

    if (!group) {
        return res.status(400).json({ success: false, error: 'error' })
    }

    group
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: group._id,
                message: 'Group created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Group not created!',
            })
        })
}

const updateGroup = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Group.findOne({ _id: req.params.id }, (err, group) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Group not found!',
            })
        }
        group.name = body.name
        group.currentStory = body.currentStory
        group.author = body.author
        group.members = body.members
        group.storiesRead = body.storiesRead
        group.sessionLength = body.sessionLength
        group.save().then(() => {
                return res.status(200).json({
                    success: true,
                    id: group._id,
                    message: 'Group updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Group not updated!',
                })
            })
    })
}

const deleteGroup = async (req, res) => {
    await Group.findOneAndDelete({ _id: req.params.id }, (err, group) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!group) {
            return res
                .status(404)
                .json({ success: false, error: `Group not found` })
        }

        return res.status(200).json({ success: true, data: group })
    }).catch(err => console.log(err))
}

const getGroupById = async (req, res) => {
    await Group.findOne({ _id: req.params.id }, (err, group) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!group) {
            return res
                .status(404)
                .json({ success: false, error: `Group not found` })
        }
        return res.status(200).json({ success: true, data: group })
    }).catch(err => console.log(err))
}

const getGroups = async (req, res) => {
    await Group.find({}, (err, groups) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!groups.length) {
            return res
                .status(404)
                .json({ success: false, error: `Group not found` })
        }
        return res.status(200).json({ success: true, data: groups })
    }).catch(err => console.log(err))
}

module.exports = {
    createGroup,
    updateGroup,
    deleteGroup,
    getGroups,
    getGroupById,
}