const peopleObj = []


function getAllPeople(){
    fetch('http://localhost:3000/People')
    .then(res => res.json())
    .then(people => {people.forEach(person => peopleObj.push(person))})
}

// targeting the form and adding a submit with the function of selectedRadioButton to make json objects into arrays and loop through the targeted arrays, calls getDate which pushes them into a li
document.querySelector('form').addEventListener('submit', selectedRadioButton)

function selectedRadioButton(e){
    e.preventDefault()
    const girl = document.getElementById('girl')
    const boy = document.getElementById('boy')
    const ul = document.querySelector('#People-list')
    ul.innerHTML = ''
    if(girl.checked==true){
       peopleObj.filter(findGirl => findGirl.Gender==='female').forEach((girls,i) => getDate(girls,i) )  
    }
    else if(boy.checked==true){
        peopleObj.filter(findBoy => findBoy.Gender==='male').forEach((boys,i) => getDate(boys,i))
    }   
}

// getDate creates holders in li's in side of the ul and put them on the html
function getDate(peopleLove,num){
    const cardId = `card_${num}`
    const card = document.createElement('li')
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
    
    // card.addEventListener('click',e => console.log(cardId))
}

// color Like addes a class to cards 
 function colorLike(elementId,color){
    const cls = elementId.getAttribute('class')
    clsUpdated = cls.indexOf(color)==-1? [color].join(' '):'card'
    elementId.setAttribute('class',clsUpdated)
}

// selecting the header twice so I can run changeThePinkToDarkerPink and changeBack functions to change the header
document.querySelector('.header').addEventListener('mouseover',changeThePinkToDarkerPink)
document.querySelector('.header').addEventListener('mouseout',changeBack)

function changeThePinkToDarkerPink(){
    document.querySelector('.header').style.background = '#F81894'
}
function changeBack(){
    document.querySelector('.header').style.background = ''
}
getAllPeople()


