import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import multer from 'multer';
const port = 3000;


const app= express();

app.use(cors());

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


app.post("/upload",upload.array('image',12),(req,res)=>{
    console.log(req.files)
});




app.listen(port,()=>{console.log(`Server is running at port ${port}`)});






