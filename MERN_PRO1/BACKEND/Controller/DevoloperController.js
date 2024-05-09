const DevoloperSchema = require("../Schema/DeveloperSchema");

exports.CreateDevoloper = async(req,res)=>{
    let payload = await DevoloperSchema.create(req.body);
    res.status(201).json({success:true,message:"REGISTRED SUCCESSFULLY",payload})
}


exports.updateDevolper= async(req,res)=>{
    let payload = await DevoloperSchema.updateOne(
         {
            _id: req.params.id
          },
          {
            $set:req.body
          }
    )
    res.status(201).json({success:true,message:"UPDATED SUCCESSFULLY",payload})
}

exports.DeleteDevoloper = async(req,res)=>{
    await DevoloperSchema.findByIdAndDelete({_id: req.params.id})
    res.status(201).json({success:true,message:"DELETED SUCCESSFULLY"})

}