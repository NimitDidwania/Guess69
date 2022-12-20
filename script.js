
var points=0;
var save;
function show(idx){
    save = idx;
    console.log(idx);
    var cardArray = document.getElementsByClassName("card") ;
    var ind = Math.floor((Math.random()*10 )%3) ;
    cardArray[ind].firstChild.innerHTML = "69";
    var flag=1;
    console.log(ind);
    console.log(idx) ;
    if(ind == idx ){

        console.log("wonnnnn");
        points+=5;
        document.getElementById("score").innerHTML = points;
    }

   else {
        points-=3;
        document.getElementById("score").innerHTML = points;
    }
   

    setTimeout(function(){
        cardArray[ind].firstChild.innerHTML = "?";
       
    },2000);
}
function help(){
    
}

