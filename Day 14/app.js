//jshint eversion:6

const express =require ("express");
const body-parser =require ("body-parser")

const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.listen(3000, functon(){
  console.log("server started om port 3000")
});
