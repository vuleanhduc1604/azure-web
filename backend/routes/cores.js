const router = require('express').Router();

let Cores = require('../models/cores.model');

router.route('/').get((req, res) => {
    Cores.find()
        .then(news => res.json(news))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const avatar = req.body.avatar;
    const name = req.body.name;
    const stat = req.body.stat;
    const contact = req.body.contact;
    const link = req.body.link

    const newCores = new Cores({
        avatar,
        name,
        stat,
        contact,
        link
    });

    newCores.save()
        .then(() => res.json('Cores added'))
        .catch((err) => res.status(400).json('Error: '+ err))
})
module.exports = router