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


const PORT= 8080

app.listen(PORT,() =>{
    console.log(`Escuchando el puerto ${PORT}`);
})