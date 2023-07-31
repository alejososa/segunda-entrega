import express from 'express';
import productRouter from './routes/products.router.js';
import cartRouter from './routes/cart.router.js';




const app = express();

//estas dos lineas son claves para que el servidor entienda e interprete lo que pasa
app.use(express.json());
app.use(express.urlencoded({extended: true}));




//rutas

app.use('/api/products', productRouter)    
app.use('/api/carts', cartRouter)
//get



//-----------------product hasta probar-------------


/*
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
*/


const PORT= 8080

app.listen(PORT,() =>{
    console.log(`Escuchando el puerto ${PORT}`);
})