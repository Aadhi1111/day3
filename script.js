var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);

    //Question 2 : Solution
    for(var i=0;i<res.length;i++){
        console.log(res[i].flags.svg);
    }

    //Question 3 : solution
    for(var i=0;i<res.length;i++){
        //if(res[i].name.common){
            console.log("Country Name : "+res[i].name.common +",Region : "+ res[i].region +",Sub Region : "+res[i].subregion +",Population : "+res[i].population);
        //}
        //else{
           // console.log("NIL");
        //}
        
    }
}



