//whenever we create an api method we need to give some sort of label 

const   asyncHandler = require("express-async-handler")

//@desc Get all contacts 
//@route GET /api/contacts
//@access public 

const getContacts = asyncHandler(async(req,res) => {
    res.status(200).json({message: "Get all contacts"});
});

//@desc Create all contacts 
//@route  POST  /api/contacts 
//@access public 

const createContact = asynCHandler(async (req,res) => {
    console.log("The requested body is :",req.body);
    const {name,email,phone } = req.body;
    if (!name || !email || !phone ){
        res.status(400);
        throw new Error("All field are mandatory ")
    }
    res.status(201).json({message: "Create Contact "});
})

//@desc Create all contacts 
//@route  GET  /api/contacts/:id
//@access public 

const getContact = async(req,res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`})
}

//@desc Create all contacts 
//@route  PUT  /api/contacts/:id
//@access public 

const upadateContact = async(req,res) => {
    res.status(200).json({message: `update contacts for ${req.params.id}`});
}

//@desc Create all contacts 
//@route  DELETE  /api/contacts/:id
//@access public 

const deleteContact = async (req,res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
}

module.exports = {
    getContacts ,
    getContact , 
    createContact ,
    upadateContact , 
    deleteContact,
};
