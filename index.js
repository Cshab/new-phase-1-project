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

// getDate creates holders in li's in side of the ul and put them on the html
function getDate(peopleLove,num){
    let cardId = `card_${num}`
    let card = document.createElement('li')
    card.id = cardId
    card.className = 'card'
    card.innerHTML = `
    <div class ="boxes">
    <img class = "resize" src="${peopleLove.image}">
    <div class ="content">
    <h4>${peopleLove.name}</h4>
    <p>
    <span class="age">Age:${peopleLove.age}</span>
    </p>
    <p class ="description">${peopleLove.description}</p>
    </div>
    <div class ="likeDislike">
    <button class ="like" onclick='colorLike(${cardId},"green")'> Like </button>
    <button class="dislike" onclick='colorLike(${cardId},"red")'> Dislike </button>
    </div>
    </div>
    `
    document.querySelector('#People-list').appendChild(card)
    
    card.addEventListener('click',e => console.log(cardId))
}

// color Like changes the class of cards 
 function colorLike(elementId,color){
    let cls = elementId.getAttribute('class')
    cls = cls.indexOf(color)==-1? ['card',color].join(' '):'card'
    elementId.setAttribute('class',cls)
}