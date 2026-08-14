var user=[
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
         "name" : "Jane Doe",
        "gender" : "Female",
        "image" : "jane.png"
    }
]
var cur=0;
function toggle(){
    cur=(cur+1)%2;
    var name=document.getElementById("name");
    var gend=document.getElementById("gend");
    var imge=document.getElementById("imge");
    name.innerHTML=user[cur].name;
    gend.innerHTML=user[cur].gender;
    imge.src=user[cur].image;
}
function random(){
    fetch("https://randomuser.me/api")
         .then(function(res){
            return res.json();
         })
         .then(function(data){
            var name=document.getElementById("name");
            var gend=document.getElementById("gend");
            var imge=document.getElementById("imge");
            var rname=data.results[0].name.first+" "+data.results[0].name.last;
            var rgend=data.results[0].gender;
            var rimg=data.results[0].picture.large;
            name.innerHTML=rname;
            gend.innerHTML=rgend;
            imge.src=rimg;


         })
         .catch(function(err){
            console.log("error:"+err);
         })
}