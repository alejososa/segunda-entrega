import fs from 'fs';
const FILE_NAME=  "cart.json";



class CartManager{
    constructor(path){
        this.path= path;
    }

    async getCart() {
        try {
            if (fs.existsSync(this.path)) {
                const cart = await fs.promises.readFile(this.path, "utf-8");
                return JSON.parse(cart);
            } else {
                fs.writeFileSync(FILE_NAME, '[]', 'utf-8');
            }
        } catch (error) {
            return error;
        }//
    }
  //creando el cart

    async createCart(){
        const carts = await this.getCart();
        const id = carts[carts.length - 1]?.id + 1 || 1;
        const newCArt ={id}
        try {
                carts.push(newCArt);
                await fs.promises.writeFile(this.path, JSON.stringify(carts));
                return `Cart created`;
            
        } catch (error) {
            
        }
    }
// buscamos el cart
    async getCartById(id) {
        try {
            const carts = await this.getCarts();
            const cart = carts.find((cart) => cart.id === id);
            if (!cart) {
                return undefined;
            }
            console.log(cart);
            return cart;
        } catch (error) {
            return error;
        }
    }
}


const cartManager = new CartManager(FILE_NAME);
export default cartManager;