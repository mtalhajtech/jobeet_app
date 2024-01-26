import Category from "../models/category.js";
import mongoose from "mongoose";
const getCategories = async (req, res) => {
  const categories = await Category.find();
  if (categories.length === 0) {
    return res.status(404).json("Categorries Not Found");
  }
  res.status(200).json(categories);
};
const getCategoriesByJobCount= async(req,res)=>{
  
  const categoriesByJob = await Category.aggregate([{
  $lookup:{from: 'jobs',
   localField: "_id",
   foreignField: "categoryId",
   as: "jobs"}},
    {
   $addFields: {
      totalJobs: { $size: "$jobs" }
    }}
  ,{
    $project: {
      jobs: 0
    }}
  
])
  
  if(categoriesByJob.lenght==0 || categoriesByJob==null )
  {
    res.status(200).send({message:'No Category Found'})
  }
  
  res.status(200).send({data:categoriesByJob})
}
const createCategory = async (req, res) => {
  
  const {name:categoryName} = req.body;

  try {
    const categoryCreated = await Category.create({
      name: categoryName,

    });
    res.status(200).json(categoryCreated);
  } catch (error) {
    console.log(error.code)
    if(error.code==11000){
      return res.status(409).json({ error: "Category Name Already Exits Choose Different " });
      
    }
    res.status(500).json({ error: "internal server error" });
  }
};

const deleteCategory = async (req,res)=>{
  const categoryId = new mongoose.Types.ObjectId(req.params.categoryId)

  console.log(categoryId)
  try {
       const deletedCategory = await Category.deleteOne({_id:categoryId})
       if(deletedCategory.deletedCount===0){
        res.status(404).json({message:"Category Not Found"});
       }
       res.status(200).json({message:"Category deleted Successfully"})
      
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"Error Occurred"});
  }
}

const editCategory = async (req,res)=>{
  const categoryId = new mongoose.Types.ObjectId(req.params.categoryId)
  const {name}  = req.body;
      try {
        const updatedCategory = await Category.updateOne({_id:categoryId},{name:name},{runValidators: true});
        res.status(200).json({message:"Category Updated Successfully"});

      } catch (error) {
        if(error.code==11000){
          return res.status(409).json({ error: "Category Name Already Exits Choose Different " });
    
        }
         res.status(500).json({message:"Error occured during category Updated"});
      }
 }


 const getCategory = async (req,res)=>{
   console.log(req.params.categoryId)
  const categoryId = new mongoose.Types.ObjectId(req.params.categoryId)
  console.log(categoryId)
  try {
       const category = await Category.find({_id:categoryId})
       console.log(category)
       if( category==null){
       return res.status(404).json({message:"Category Not Found"});
       }
      return res.status(200).json({message:"Category Retrieved Successfully",data:category})
      
  } catch (error) {
    console.log(error);
   return res.status(500).json({message:"Error Occurred"});
  
 }
}
 
export { getCategories, createCategory, deleteCategory,editCategory,getCategoriesByJobCount,getCategory }
