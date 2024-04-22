import Product from "../models/products.model.js";
const productDAO = {
};
productDAO.getAll = async () => {
    const products = await Product.find();
    return products;
}
productDAO.getOne = async (barcode) => {
    const products = await Product.findOne({ barcode: barcode });
    return products;
}
productDAO.insertOne = async (product) => {
    return await Product.create(product);
}
export default productDAO;