const path=require('path');
const publicpath=path.join(__dirname,'../public');
// console.log(__dirname+'/../public');
// console.log(publicpath);
const port=process.env.PORT||3000;
const express = require('express');
var app=express();
app.use(express.static(publicpath));
// app.get('/',(req,res)=>
// {
//   res.render('../public/index.html');
// });
app.listen(port,()=>
{
  console.log(`server is above to start at port number ${port} `);
});
