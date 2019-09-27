const path=require('path')
const express= require('express');
const app=express()

const dir=(path.join(__dirname,'../public'))

app.use(express.static(dir))

app.get('/help',(req,res)=>{
    res.send([{a:'ss',age:24}]);
})
app.get('/about',(req,res)=>{
    res.send("about page");
})
app.get('/weather',(req,res)=>{
    res.send("weather page");
})
app.listen(3000,()=>{
    console.log("server is up");
});