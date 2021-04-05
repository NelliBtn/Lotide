const assertEqual = require('../assertEqual');

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual('Light', 'Light');
assertEqual(5, 5);
assertEqual('5', 5);

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");