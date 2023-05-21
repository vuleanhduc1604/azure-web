const router = require('express').Router();

let Members = require('../models/members.model');

router.route('/').get((req, res) => {
    Members.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const avatar = req.body.avatar;
    const name = req.body.name;
    const stat = req.body.stat;
    const contact = req.body.contact;
    const link = req.body.link

    const newMembers = new Members({
        avatar,
        name,
        stat,
        contact,
        link
    });

    newMembers.save()
        .then(() => res.json('Members added'))
        .catch((err) => res.status(400).json('Error: '+ err))
})
module.exports = router