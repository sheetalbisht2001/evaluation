// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiform").addEventListener("submit",myfun)  ;
var mplarr = JSON.parse(localStorage.getItem("mplobj"))   || []  ;

// if(localStorage.getItem("jobApplications")==null{
// jobArr=[]
// }
// else{
// jobArr=JSON.parse(localStorage.getItem("jobApplications"))
// }

function myfun () {
    event.preventDefault() ;

    var mpllist= {
        matchnum:masaiForm.matchNum.Value,
        teama:masaiForm.teamA.Value,
     teamb:masaiForm.teamB.Value,
        Date:masaiForm.date.Value,
       Venue:masaiForm.venue.Value,

    } 

  mplarr.push(mpllist)
console.log(mplarr)
localStorage.setItem("schedule",JSON.stringify(mplarr))
window.location.href="matches.html"




}






























