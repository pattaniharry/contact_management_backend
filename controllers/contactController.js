//whenever we create an api method we need to give some sort of label 

//@desc Get all contacts 
//@route GET /api/contacts
//@access public 

const getContacts = (req,res) => {
    res.status(200).json({message: "Get all contacts"});
};

//@desc Create all contacts 
//@route  POST  /api/contacts 
//@access public 

const createContact = (req,res) => {
    console.log("The requested body is :",req.body)
    res.status(201).json({message: "Create Contact "});
}

//@desc Create all contacts 
//@route  GET  /api/contacts/:id
//@access public 

const getContact = (req,res) => {
    res.status(200).json({message: `get contact for ${req.params.id}`})
}

//@desc Create all contacts 
//@route  PUT  /api/contacts/:id
//@access public 

const upadateContact = (req,res) => {
    res.status(200).json({message: `update contacts for ${req.params.id}`});
}

//@desc Create all contacts 
//@route  DELETE  /api/contacts/:id
//@access public 

const deleteContact = (req,res) => {
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
}

module.exports = {
    getContacts ,
    getContact , 
    createContact ,
    upadateContact , 
    deleteContact,
};
