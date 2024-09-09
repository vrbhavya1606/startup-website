const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://vrbhavya1606:Bhavya123@cluster0.yflct.mongodb.net/',{
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(( )=> console.log('Connected to MaongooseDB '))
.catch((error) => console.error('MongoDB connection error:',error));

const formData = require('./models/FormData');

app.get('/',(req,res) => {
    res.send('Server is Working')
})

app.post('/submit',async (req,res) => {
    const { email ,password } = req.body;
    try{
        const forData = new FormData({email,password});
        await formData.sava();
        res.status(201).json({password:'form data saved sucessfully'});
    }  
    catch(error)   {
        res.status(402).json({error:'failed to save from data'});
    }
});   

  app.listen(PORT,() =>{
    console.log(`server runing on port ${PORT}`);
  });

    
