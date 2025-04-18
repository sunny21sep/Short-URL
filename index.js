const express=require('express');
const {connectToMongoDB}=require('./connect')

const urlRoute=require("./routes/url");
const { connect } = require('mongoose');
const URL=require('./models/url')

const app=express();
const PORT=8001;

connectToMongoDB("mongodb://localhost:27017/short-url").then(()=>console.log('MongoDB connected')
)
.catch(err=>console.log('MongoDB connection error:',err));

app.use(express.json());

app.use("/url",urlRoute);

app.get('/:shortId',async(req,res)=>{
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate(
        {
        shortId
        }, 
        {
            $push:{
            visitHistory:{
               timestamp: Date.now(),
            },
            },
    }
);
return res.redirect(entry.redirectURL);
});

app.listen(PORT,()=>console.log(`Server Started at PORT : ${PORT}`)
)