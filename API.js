
//get 

fetch("https://reqres.in/api/users?page=2").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}) 







// create with post 
const headers = new Headers();
headers.append('Content-type', 'application/json');



const options1 ={
    method:'POST',
    headers ,
    
    body:JSON.stringify({
        
            'name': 'morpheus',
            'job': 'leader'
        })
       
    };

fetch("https://reqres.in/api/users",options1).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
} )

//put 




const options2 ={
    method:'PUT',
    headers ,
    
    body:JSON.stringify({
        
            'name': 'Ahmmad',
            'job': 'Senior'
        })
       
    };

fetch("https://reqres.in/api/users/2",options2).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
} )

// delete

const headers = new Headers();
headers.append('Content-type', 'application/json');



const options3 ={
    method:'DELETE',
    
    
    
       
    };

fetch("https://reqres.in/api/users/2",options3).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
} )




// patch

const headers = new Headers();
headers.append('Content-type', 'application/json');
const options4 ={
    method:'PATCH',
    headers ,
    
    body:JSON.stringify({
        
            'name': 'Rami',
            
        })
       
    };

fetch("https://reqres.in/api/users/2",options4).then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
} )





