const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

const GrievanceapplyViewotherthenstf = mongoose.Schema({
    
    userId: String,
    NameofComplainant: String,
    MobileNumber: Number,
    complaintCategory:String,
    complaintype:String,
    Address: String,
    ComplaintDescrption:String,
    status:String
      });
module.exports = mongoose.model('GrievanceapplyViewotherthenstf', GrievanceapplyViewotherthenstf);