import {Router} from "express"
import cartManager from "../CartManager.js";


const router =Router();


router.get('/', async (req, res)=>{
    try {
        const carts = await cartManager.getCart()

        res.status(200).json({message:"Carts"})
        
    } catch (error) {
        res.status(500).json({error})
    }
})

router.post('/', async(req,res)=>{
    try {
        const newCart= cartManager.createCart(req.body)
        res.status(200).json({message:"Cart created", user: newCart})
    } catch (error) {
        
    }
})












export default router;
