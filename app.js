import express, { response } from 'express';
import productManager from './ProductManager.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));








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