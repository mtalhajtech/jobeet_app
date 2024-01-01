import Category from "../models/category.js";

const getCategories = async (req, res) => {
  const categories = await Category.find();
  if (categories.length === 0) {
    return res.status(404).json("Categorries Not Found");
  }
  res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  console.log("log");
  const { categoryName } = req.body;
  try {
    const categoryCreated = await Category.create({
      name: categoryName,
    });
    res.status(200).json(categoryCreated);
  } catch (error) {
    
    res.status(500).json({ error: "internal server error" });
  }
};

const deleteCategory = async (req,res)=>{
  const categoryId = req.params.categoryId
  try {
       const deletedCategory = await Category.deleteOne({_id:categoryId})
       if(deletedCategory.deletedCount===0){
        res.status(404).json({message:"Category Not Found"})
       }
       res.status(200).json({message:"Category deleted Successfully"})
      
  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Error Occurred"})
  }
}

const editCategory = async (req,res)=>{
  const categoryId = req.params.categoryId
  const {name}  = req.body
      try {
        const updatedCategory = await Category.updateOne({_id:categoryId},{name:name})
        res.status(200).json({message:"Category Updated Successfully"})

      } catch (error) {
         res.status(500).json({message:"Error occured"})
      }
 }
 
export { getCategories, createCategory, deleteCategory,editCategory };
