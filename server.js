const express = require('express');
const port = 4000;
const app = express();

app.use(express.static(__dirname+'/public'))

app.use('/',require('./routes/view'))
app.listen(port ,(err)=>{
    if(err) throw err
    else console.log('server is running on port ' + port )
})