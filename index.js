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

// targeting the form and adding a submit with the function of selectedRadioButton to make json objects into arrays and loop through the targeted arrays, calls getDate which pushes them into a li
document.querySelector('form').addEventListener('submit', selectedRadioButton)

function selectedRadioButton(e){
    e.preventDefault()
    let girl = document.getElementById('girl')
    let boy = document.getElementById('boy')
    let ul = document.querySelector('#People-list')
    ul.innerHTML = ''
    if(girl.checked==true){
        Object.entries(peopleObj).filter(findGirl => findGirl[1].Gender==='female').forEach((girls,i) => getDate(girls[1],i) )  
    }
    else if(boy.checked==true){
        Object.entries(peopleObj).filter(findBoy => findBoy[1].Gender==='male').forEach((boys,i) => getDate(boys[1],i))
    }   
}