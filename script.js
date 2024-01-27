var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = funtion(){
    var res = JSON.parse(request.response);
    console.log(res);
}


//Question 2 : Solution
