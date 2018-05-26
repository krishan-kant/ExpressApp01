var express=require("express");
var app=express();
 
app.get("/", function (req,res) {
	res.send("Hi there, welcome to the home page.");
});

app.get("/speak/:anim", function (req,res) {
	var anim=req.params.anim;
	var sound="";
	if(anim=="pig"){
		sound="oink";
	}
	else if(anim=="cow"){
		sound="Moo";
	}
	else{
		sound="Woof Woof";
	}
	res.send("The "+anim+" says "+sound);
});

app.get("/repeat/:mess/:num", function(req,res){
	var mess=req.params.mess;
	var num=parseInt(req.params.num);
	var str="";
	for(var i=0;i<num;i++){
		str=str+" "+mess;
	}
	res.send(str);
});

app.get("/:anything", function (req,res) {
	res.send("No page here.. go back");
});

app.get("/:anything/:any", function (req,res) {
	res.send("No page here.. go back");
});

app.get("/:anything/:any/:anyt", function (req,res) {
	res.send("No page here.. go back");
});


app.listen(3000,function(){
	console.log("Server running on port 3000");
});
