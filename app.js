var wrapperEle = document.body.querySelector(".wrapper");


var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

function renderList(){
    wrapperEle.innerHTML="";
    for(var i=0; i<list.length; i++) {
        var ele = document.createElement("div");
        var nameEle = document.createElement("h2");
        var ageEle = document.createElement("h4")
        nameEle.innerHTML = "Name: " + list[i].name;
        ageEle.innerHTML = "Age: " + list[i].age;
        if (list[i].age > 25) {
            ageEle.style.color = "green";
        }
        ele.appendChild(nameEle);
        ele.appendChild(ageEle);
        wrapperEle.appendChild(ele);

    }
}


renderList();

document.body.querySelector(".butt").addEventListener("Click", function (){
    var count = 0;

    function increment(var1){
        count++;
        if (var1==1)
        {document.getElementById("age").value = count};
    }
})





