//importing express
import express from "express";
//importing mangoose
import mongoose from "mongoose";

//Initializing express
const app = express();
const PORT = 3001;

app.use(express.json());

(async function connectDB(){
    const connection = await mongoose.connect("mongodb+srv://ojashri:WkzRayr5bohcvks5@nodecluster.kip9fzm.mongodb.net/restful?retryWrites=true&w=majority")
    console.log('MongoDb Connected')
})();

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});
const Product = new mongoose.model('product', productSchema)

// Get API (Read Data)
app.get('/get', async(req,res)=>{
    const products = await Product.find();
    res.send(products);
})
// Post APi (Create Data)
app.post('/post', async function(req,res){
    // console.log(req.body)
    await Product.create(req.body)
    res.send('producted added succesfully')
})
//Put API (Update Data)
app.put('/put/:id', async(req,res)=>{
    console.log(req.params)
    const product = await Product.findByIdAndUpdate({_id: req.params.id}, req.body);
    console.log(product)
    res.send('producted updated sucessfully')
})
//Delete API (Delete Data)
app.delete('/delete/:id', async(req,res)=>{
    const product = await Product.findByIdAndDelete({_id: req.params.id}, req.body);
    res.send('producted deleted sucessfully')
})


app.listen(PORT, 'localhost', ()=>{
    console.log(`server is running on port ${PORT}`)
})