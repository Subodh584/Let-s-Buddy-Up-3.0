import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
import cors from "cors";
import multer from "multer";
import path from "path";


const { Pool } = pkg;
const app = express();
const port = 3000;
const storage = multer.diskStorage({
  destination: function (req,file,cb){
      cb(null,'../client/my-app/public/uploads')
  },
  filename: function(req,file,cb){
      const suffix = Date.now()+'-'+file.originalname;
      cb(null,file.fieldname+'-'+suffix);
  }
});
const upload = multer({storage:storage});








app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Let's Buddy Up",
  password: "Archanachauhan@123",
  port: 5432,
});







app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await checkUser(email, password);
    if (userData.rowCount > 0) {
      res.json({ canLogin: true, name: userData.name, userId: userData.userId });
    } else {
      res.json({ canLogin: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});


app.post("/register", async (req, res) => {
    const alreadyUser = await checkUserEmail(req.body.email);
    if(alreadyUser.rowCount===1){
        res.send(false);
    }else{
  res.json(await registerUser(req.body.name,req.body.email,req.body.password,req.body.userId))}
});


app.post("/uploadproductdata",upload.array('image',12),async (req,res)=>{
  const categoryId = await checkProductId(req.body.category);
  const productId = Date.now();
  const userId = req.body.userId;
  const productName = req.body.productName;
  const productPrice = req.body.price;
  const description = req.body.description;
  const imagePaths = req.files.map(file => '/uploads/' + file.filename); 
  const response = await registerProduct(productId,userId,categoryId,productName,description,productPrice,imagePaths);

});


app.post("/retrieveproduct",async (req,res)=>{
  try{
    const query = "SELECT * FROM products WHERE user_id = $1";
    const list = [req.body.userId];
    const response = await pool.query(query,list);
    res.send(response.rows);
  }catch(err)
  {console.log(err.stack)}

});


app.post("/retrieveNoOfProducts",async (req,res)=>{
  try{
    const query1 = "SELECT * FROM products WHERE category_id = $1";
    const query2 = "SELECT MIN(price) as min_price FROM products WHERE category_id = $1";
    const list = [req.body.category_id];
    const response1 = await pool.query(query1,list);
    const response2 = await pool.query(query2,list);
    res.send({response1:response1.rows,response2:response2});
  }catch(err)
  {console.log(err.stack)}

});



app.post("/usernamefromid",async (req,res)=>{
  try{
    const query = "SELECT * FROM users WHERE user_id = $1";
    const list = [req.body.productUserId];
    const response = await pool.query(query,list);
    res.send(response.rows);
  }catch(err){
    console.log(err.stack)}
});



app.post("/imagesfromproductid",async (req,res)=>{
  try{
    const query = "SELECT image_url FROM product_image WHERE product_id = $1";
    const list = [req.body.productId];
    const response = await pool.query(query,list);
    res.send(response.rows);

}catch(err){console.log(err.stack)}
});




async function registerProduct(pdtId,usrId,catId,pdtNam,des,pdtPrc,imgpths){
    try{
      const query1 = "INSERT INTO products (product_id,user_id,category_id,product_name,description,price) VALUES($1,$2,$3,$4,$5,$6)";
      const list1 =[pdtId,usrId,catId,pdtNam,des,pdtPrc];
      const response1 = await pool.query(query1,list1);
      const imgId = Date.now();
      const query2 = "INSERT INTO product_image (image_id,product_id,image_url) VALUES($1,$2,$3)";
      const list2 =[imgId,pdtId,imgpths];
      const response2 = await pool.query(query2,list2)
      return ({response:response1,response2:response2});
    }catch(err)
    {console.log(err.stack)}
}


async function checkProductId(catnam){
  try{
    const query = "SELECT * FROM categories WHERE category_name = $1";
    const list = [catnam];
    const response = await pool.query(query,list);
    console.log(response.rows[0]);
    return(response.rows[0].category_id);
  }catch(err){
    console.log(err.stack);
  }
}


async function checkUserEmail(em) {
    try {
      const query = "SELECT * FROM users WHERE email = $1";
      const creds = [em];
  
      const res = await pool.query(query, creds);
      return { rowCount: res.rowCount};
    } catch (err) {
      console.log("Database query error:", err.stack);
      throw err; 
    }
  }


async function checkUser(em, pass) {
  try {
    const query = "SELECT * FROM users WHERE email = $1 AND password = $2";
    const creds = [em, pass];
    const res = await pool.query(query, creds);

    return { rowCount: res.rowCount, name: res.rows[0]?.username || "", userId: res.rows[0]?.user_id};
  } catch (err) {
    console.log("Database query error:", err.stack);
    throw err;
  }
}


async function registerUser(nam, em, pas, uid) {
  try {
    const query = "INSERT INTO users (user_id,username,email,password) VALUES ($1,$2,$3,$4)"
    const creds = [uid,nam,em,pas];
    const res = await pool.query(query,creds);
    return res;
  } catch (err) {
    console.log("Database query error:", err.stack);
  }
}




app.listen(port, () => {
  console.log(`The server is listening at port ${port}`);
});
