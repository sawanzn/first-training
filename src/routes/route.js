const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason


const months = ["jan" , "feb" ,"mar" ,"apr" ,"may" , "june" , "july" , "aug" ,"sept" ,"oct" ,"nov" ,"dec"]
// chunk function to make arrays of four and print them on the console 

const odd = [1,3,5,7,9,11,13,15,17,19,]
// using tail function return the last 9 elements from the array


const duplicate1 = [ 2,4,6,4,6,4,9]
const duplicate2 = [ 2,3,6,5,6,4,1]
const duplicate3 = [ 2,8,6,3,6,7,9]
const duplicate4 = [ 2,4,6,4,6,7,8]
const duplicate5 = [ 999,4,1,4,9]

// union to merge and return unique values


const toObject =[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

// Use the function fromPairs to create an object containing key value pairs.