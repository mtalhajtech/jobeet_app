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
export { getCategories, createCategory };
