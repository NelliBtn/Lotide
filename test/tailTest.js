const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');