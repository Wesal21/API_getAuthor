
function getUsers(){
    const authors=document.getElementById("authors");
         fetch("https://fakerestapi.azurewebsites.net/api/v1/Authors").then(function(response){
    return response.json();
}).then(function(data){
 
    for(let i=0;i<10;i++){
        authors.insertAdjacentHTML("afterbegin",`<div><h3>firstName:${data[i].firstName}   lastName:${data[i].lastName}</h3>
                                                        <h4>idBook:${data[i].idBook}
                                                         </div>`);
        }
}) 
}
 
const but=document.getElementById("button");

but.onclick = getUsers;




