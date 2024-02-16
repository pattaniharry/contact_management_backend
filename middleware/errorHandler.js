const {Constants} = require("../middleware/Constants");
const errorHandler  = (err,req,res,next) => {
    const StatusCode = res.StatusCode ? res.StatusCode :500;
    switch(StatusCode){
        case Constants.VALIDATION_ERROR:
        res.json ({titlle:"Validation Failed " ,message: err.message , stackTrace: err.stack}); 
        break;

        case Constants.NOT_FOUND:
            res.json ({titlle:"not Found" ,message: err.message , stackTrace: err.stack}); 
        break;

        case Constants.UNAUTHORIZED:
            res.json ({titlle:"UNAUTHORIZED" ,message: err.message , stackTrace: err.stack}); 
        break;

        case Constants.FORBIDDEN: 
            res.json ({titlle:"FORBIDDEN" ,message: err.message , stackTrace: err.stack}); 
        break;

        case Constants.SERVER_ERROR: 
            res.json ({titlle:"Server Error" ,message: err.message , stackTrace: err.stack}); 
        break;
        
        default:
            console.log("NO ERROR , All good ")
        break;

        
    }

    

};




module.exports = errorHandler;//used to export middleware in this case its errorHandler