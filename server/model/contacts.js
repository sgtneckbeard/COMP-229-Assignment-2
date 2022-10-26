let mongoose = require('mongoose');

//model class
let contactModel = mongoose.Schema({
    
    name: String,
    number: String,
    email: String
},

{
    collection: "business_contacts"
});

module.exports = mongoose.model('contact',contactModel);