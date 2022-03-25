const express = require("express");

const app = express();

//root "home page"
app.get("/", function(request, response){
  response.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req, res){
  res.send("Contact me at: gabrieldkvl@icloud.com")
})

app.get("/about", function(req, res){
  res.send("I'm Gabriel the owner of this website,  I like technology and work as BI Analyst at Millpar.");
});

app.listen(3000, function() {
   console.log("Server started on port 3000");
});
