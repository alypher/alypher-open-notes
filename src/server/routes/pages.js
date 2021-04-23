const express = require('express');
const router = express.Router();

const pages = {}

router.get('/:page', (req,res) => {
    res.sendFile('index.html', { root: 'dist' });
})

router.get('/get/:page', (req, res, next) => {
    res
    .status(200)
    .send({
        method: 'GET',
        success: true,
        message: 'PAGE CONTENT LOADED!',
        data: pages[req.params.page]
    })
})

router.post('/:page', (req, res, next) => {
    pages[req.params.page] = req.body.text || ''

    res
    .status(201)
    .send({
        method: 'POST',
        success: true,
        message: 'NEW PAGE CONTENT SAVED!',
        body: req.body
    })
})

router.delete('/:page', (req, res, next) => {
    delete pages[req.params.page] 

    res
    .status(201)
    .send({
        method: 'DELETE',
        success: true,
        message: 'PAGE CONTENT DELETED!',
        data: pages
    })
})

module.exports = router