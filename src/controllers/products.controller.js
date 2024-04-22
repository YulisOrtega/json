import productDAO from "../DAO/productdao.js";
export const getAll = (req, res) => {
    productDAO.getAll()
        .then(products => res.json({ data: products })) // Devolver los productos dentro de un objeto "data"
        .catch(err => res.status(500).json({ error: err.message })); // Manejar los errores adecuadamente
}

export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
        .then(result => {
            if (!result) {
                res.status(404).json({ message: "Product not found" }); // Devolver un 404 si el producto no se encuentra
            } else {
                res.json({ data: result }); // Devolver el producto dentro de un objeto "data"
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

export const insertOne = (req, res) => {
    productDAO.insertOne(req.body)
        .then(result => res.status(201).json({ message: "Product inserted successfully" })) // Devolver un 201 para indicar que se ha insertado correctamente
        .catch(err => res.status(500).json({ error: err.message }));
}
