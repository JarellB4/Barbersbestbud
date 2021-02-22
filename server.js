const express = require('express');
const path = require('path')


const app = express():
const Port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json())


const clippers = [
    {
        clippername: 'whal',
        name: 'magic',
        type: 'cordless',
        specialty: 'blending'

    },
    {
        clippername: 'andis',
        name: 'masters',
        type: 'cordless',
        specialty: 'blending/even cutds',

    },
    {
        clippername: 'andis',
        name: 'outliners',
        type: 'cord',
        specialty: 'line ups',

    },
    {
        clippername: 'andis',
        name: 'slimline',
        type: 'cordless',
        specialty: 'line ups',

    },
]
app.get('/'(req, res) => res.sendFile(path.join(__dirname, 'index.html')));