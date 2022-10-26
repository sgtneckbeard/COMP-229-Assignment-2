let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let passport = require('passport');
let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//connect to our contact model
let Contact = require('../model/contacts');

//GET ROUTE for the contact list page - READ OPERATION
router.get('/',contactController.displaycontactList);

/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,contactController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,contactController.processAddPage);

/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/edit/:id',requireAuth,contactController.displayEditPage);

/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/edit/:id',requireAuth,contactController.processEditPage);

/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,contactController.performDelete);

module.exports = router;