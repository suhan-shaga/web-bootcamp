const express = require('express');
const app = express();
const port = process.env.port || 8080;
app.use(express.static("frontend"));
app.use(express.json());
var users=[
    {
        "id":1,
        "name":"Jagath Reddy",
        "gender":"Male",
        "imge":"https://randomuser.me/api/portraits/men/61.jpg"
    },
    {
        "id":2,
        "name":"Kavya",
        "gender":"Female",
        "imge": "https://randomuser.me/api/portraits/women/29.jpg"
    },
     {
        "id":3,
        "name":"Vinay",
        "gender":"Male",
        "imge": "https://randomuser.me/api/portraits/men/98.jpg"
    },
     {
        "id":4,
        "name":"Nagaraju",
        "gender":"Male",
        "imge":  "https://randomuser.me/api/portraits/men/37.jpg"
    },
     {
        "id":5,
        "name":"Vijay",
        "gender":"Male",
        "imge": "https://randomuser.me/api/portraits/men/75.jpg"
    },
     {
        "id":6,
        "name":"Sanjana",
        "gender":"Female",
        "imge":  "https://randomuser.me/api/portraits/women/29.jpg"
    },
     {
        "id":7,
        "name":"Arjun",
        "gender":"Male",
        "imge":"https://randomuser.me/api/portraits/men/82.jpg"
    },
     {
        "id":8,
        "name":"Bunny",
        "gender":"Male",
        "imge": "https://randomuser.me/api/portraits/men/12.jpg"
    },
     {
        "id":9,
        "name":"Lahari",
        "gender":"Female",
        "imge": "https://randomuser.me/api/portraits/women/58.jpg"
    },
     {
        "id":10,
        "name":"Gagan",
        "gender":"Male",
        "imge":"https://randomuser.me/api/portraits/men/82.jpg"
    }
]
var nextId=11;
function findIndex(id){
for(var i= 0; i < users.length; i++){
if(id === users[i].id){
return i;
}
}
return -1;
}
app.get("/api/users", function(req,res){
return res.json(users);

});
app.get("/api/users/:id", function(req, res){
var id = Number(req.params.id);
var index = findIndex(id);

if(index === -1){
return res.status(404).json({"message" :"User not found with id:"+id});
}
var user = users [index] ;
return res.json(user);
});

app.get("/api/random-user", function(req, res){
if(users.length === 0){
return res.status(404).json({"message" : "No user found"});
}

var randomIndex = Math. floor(users. length * Math. random());
return res.json(users [randomIndex]);
});


app.post("/api/users", function(req, res){
var newUser = req.body;
var tempUser = {
"id" : nextId,
"name" : newUser. name,
"gender" : newUser.gender,
"imge" : newUser. image
};
nextId = nextId + 1;
users.push(tempUser) ;
return res.status(201).json({"message" : "User created successfully",
"user" : tempUser});

});



app.listen(port,function(){
    console.log("server running on http://localhost:"+port);
});