// getting all my json data then calling it to the global scope plus initializing the function
function getAllPeople(){
    fetch('http://localhost:3000/People')
    .then(res => res.json())
    .then(People => {peopleObj = People})
}

let peopleObj 

function initialize(){
    getAllPeople()
}
initialize()