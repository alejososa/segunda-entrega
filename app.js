import express, { response } from 'express';
import productManager from './ProductManager.js'



const app = express();

//estas dos lineas son claves para que el servidor entienda e interprete lo que pasa
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas
//get
app.get('/api/products', async (req, res)=>{
    try {
        const products = await productManager.getProducts()

        const limit= req.query.limit
        const resLimit= products.slice(0,limit)
        res.status(200).json({message:"Products", resLimit})
        
    } catch (error) {
        res.status(500).json({error})
    }
})

//get
app.get('/api/products/:productId', async (req, res)=>{
    const {productId}= req.params    
    try {
        const product= await productManager.getProductById(+productId)
        res.status(200).json({message:"product", product})
    } catch (error) {
        res.status(500).json({error})
    }
})
/*
const limit= req.query.limit
const resLimit= products.slice(0,limit)
res.send({resLimit})
*/
//post
app.post('/api/products', async (req, res)=>{
    try {
        const newProduct= await productManager.addProduct(req.body)
        res.status(200).json({message:"Product created", user: newProduct})
    } catch (error) {
        res.status(500).json({error})
    }
})
//delete
app.delete('/api/products/:productId', async (req, res)=>{
    const {productId}= req.params
    try {
        const response = await productManager.deleteProduct(+productId)
        res.status(200).json({message:'Product deleted'})
    } catch (error) {
        res.status(500).json({error})
    }
})

//put
app.put('/api/products/:productId', async (req, res)=>{
    const {productId}= req.params
    try {
        const updatedProduct= await productManager.updateProduct(+productId, req.body)
        res.status(200).json({message:'Product updated'})
    } catch (error) {
        res.status(500).json({error})
    }
})






/* probando ando

app.get('/saludo',(req, res)=>{
    res.send("holis")
})

app.get('/despedida',(req, res)=>{
    res.send("chau")
})
*/



app.listen(8080,() =>{
    console.log("server on");
})