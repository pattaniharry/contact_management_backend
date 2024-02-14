/*
In higerlevel project we use a different route file to use our routes instead of directly writing in our server.js file */

const express = require ("express");
const router = express.Router();
const {
    getContacts ,
    getContact , 
    createContact ,
    upadateContact , 
    deleteContact,
}  = require("../controllers/contactController")

router.route("/").get(getContacts).post( createContact);


router.route("/").get( getContact).put(upadateContact).delete(deleteContact);

module.exports = router;    /*when we create a router we need to export it */ 