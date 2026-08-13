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