// write js code here corresponding to favourites.html
var arr=JSON.parse(localStorage.getItem("favourites")) ;
var fav=JSON.parse(localStorage.getItem("favourites")) ;
arr.map(function(ele){




var tr=document.createElement("tr") ;

var td1=document.createElement("td");
td1.innerText=elem.matchNum ;
var td2=document.createElement("td");
td2.innerText=elem.teamA;
var td3=document.createElement("td");
td3.innerText=elem.teamB;
var td4=document.createElement("td");
td4.innerText=elem.Date;
var td5=document.createElement("td");
td5.innerText=ele.Venue
var td6=document.createElement("td");
td6.innerText="Favourites"
td6.style.color="green"  ;
td6.style.cursor="pointer"  ;


td6.addEventListener("click",function(){
    display(ele);
}) 
tr.append(td1,td2,td3,td4,td5,td6)
document.querySelector("tbody").append(tr)

}) ;


