//global variables and event listeners
document.querySelector("input").addEventListener("keyup",getResults)
let resultsDisplay=document.querySelector(".search-results");


const data=[ // sample data
"java tutorials",
"sql tutorials",
"web development",
"how to learn jquery online",
"how to create responsive web pages",
"computer security",
"Learn data structures",
"Ruby tutorials"
];
function removePreviousResults(){ // function to remove all child elements of search-results.
  let items=document.querySelector(".search-results");
  while (items.hasChildNodes()) {
    items.removeChild(items.lastChild);
}



}

function getResults(){

removePreviousResults(); // clear any previous results
let u_keywords=document.querySelector("input").value.toLowerCase(); // get input from user
document.querySelector(".search-results").style.padding="15px";

let searchData=data.filter(titles=>{  // search for the items
  return titles.includes((String)(u_keywords));
});

if(u_keywords.length<1){
  document.querySelector(".search-results").style.padding="0";
  removePreviousResults();
}
else if(searchData.length<1){
  let result=document.createElement("p");
  result.appendChild(document.createTextNode("No results to display. please check your keywords"));
  resultsDisplay.appendChild(result);
}

else{
searchData.forEach(element => {
  let result=document.createElement("p");
  result.classList.add("search-results-items")
  result.appendChild(document.createTextNode(element));
  resultsDisplay.appendChild(result);});
}

}


