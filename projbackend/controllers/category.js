const Category = require("../models/category");

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if(err){
            return res.status(400).json({
                error: "Category not found in DB"
            });
        }
    req.category = cate;
    next();
    });
};
//create a new category
exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, category) => {
        if(err){
            return res.status(400).json({
                error: "NOT able to save category in DB"
            });
        }
        res.json({category});

    });
};
exports.getCategory = (req , res) => {
    return res.json(req.category);
}
exports.getAllCategory = (req , res) => {
    Category.find().exec((err , categories) => {
        if(err){
            return res.status(400).json({
                error: "NO categories found"
            });
        }
        res.json(categories );

    });

};

//update category
exports.updateCategory = (req , res) => {
    const category = req.category;
    category.name = req.body.name;
    category.save((err, updatedCategory) => {
        if(err){
            return res.status(400).json({
                error: "failed to update category"
            });
        }
        res.json(updatedCategory);

    });
};
//delete categorg
exports.deleteCategory = (req , res) => {
    const category = req.category;
    category.delete((err, category) =>{
    if(err){
        return res.status(400).json({
            error: "its not delete category"
        });
    }
    res.json({
        message: "Successfull deleted"
    });
    });
};
    
