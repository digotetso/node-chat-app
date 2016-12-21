const express = require('express');

const path = require('path');
const publicpath = path.join(__dirname, '../public');

console.log(publicpath);


var  app = express();
app.use(express.static(publicpath));
app.listen(3000, (req, res)=>{
  console.log('Server up on port 3000');
});
