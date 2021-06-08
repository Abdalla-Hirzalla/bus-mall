'use strict';

let divImages = document.getElementById('busMall');
let leftImage = document.getElementById('leftImage');
let rightImage = document.getElementById('rightImage');
let centerImage = document.getElementById('centerImage');

let leftImageindex;
let centerImageindex;
let rightImageindex;

let displayArray = [];

let maxAttempts = 25;

let counter = 0;

let imageNames = [];

let votes = [];

let shown = [];

function BusMall(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.votes = 0;

    imageNames.push(this.name);

    BusMall.allImages.push(this);

}


BusMall.allImages = [];





new BusMall('bag', 'img/class-11/assets/bag.jpg');

new BusMall('banana', 'img/class-11/assets/banana.jpg');

new BusMall('bathroom', 'img/class-11/assets/bathroom.jpg');

new BusMall('boots', 'img/class-11/assets/boots.jpg');

new BusMall('breakfast', 'img/class-11/assets/breakfast.jpg');

new BusMall('bubblegum', 'img/class-11/assets/bubblegum.jpg');

new BusMall('chair', 'img/class-11/assets/chair.jpg');

new BusMall('cthulhu', 'img/class-11/assets/cthulhu.jpg');

new BusMall('dog-duck', 'img/class-11/assets/dog-duck.jpg');

new BusMall('dragon', 'img/class-11/assets/dragon.jpg');

new BusMall('pen', 'img/class-11/assets/pen.jpg');

new BusMall('pet-sweep', 'img/class-11/assets/pet-sweep.jpg');

new BusMall('scissors', 'img/class-11/assets/scissors.jpg');

new BusMall('shark', 'img/class-11/assets/shark.jpg');

new BusMall('sweep', 'img/class-11/assets/sweep.png');

new BusMall('tauntaun', 'img/class-11/assets/tauntaun.jpg');

new BusMall('unicorn', 'img/class-11/assets/unicorn.jpg');

new BusMall('usb', 'img/class-11/assets/usb.gif');

new BusMall('water-can', 'img/class-11/assets/water-can.jpg');

new BusMall('wine-glass', 'img/class-11/assets/wine-glass.jpg');



function randomIndex() {
    let randomIndex1 = Math.floor(Math.random() * BusMall.allImages.length);
    return randomIndex1;


}


BusMall.shownVotes = [];

function updateStorage() {
    let arrayString = JSON.stringify(BusMall.allImages);

    localStorage.setItem('showandvote', arrayString);
    // console.log(arrayString);

  
}


function getShownAndVotes() {

    let data = localStorage.getItem('showandvote');
    let showandvoteData =JSON.parse(data);

    if (showandvoteData !== null) {
        BusMall.allImages=showandvoteData;

    //    localStorage.setItem('user',userClick());
     

    }
   chart();


    renderThreeImages();

}
getShownAndVotes() ;

// let newImages=[];




function renderThreeImages() {

    leftImageindex = randomIndex();
    centerImageindex = randomIndex();
    rightImageindex = randomIndex();



    while (leftImageindex === centerImageindex || leftImageindex === rightImageindex || centerImageindex === rightImageindex || displayArray.includes(leftImageindex) || displayArray.includes(centerImageindex) || displayArray.includes(rightImageindex)) {


        rightImageindex = randomIndex();
        centerImageindex = randomIndex();
        leftImageindex = randomIndex();


    }


   displayArray = [];
 
    displayArray.push(leftImageindex);
    displayArray.push(centerImageindex);
    displayArray.push(rightImageindex);

    console.log(leftImageindex, centerImageindex, rightImageindex);



    leftImage.src = BusMall.allImages[leftImageindex].source;
    BusMall.allImages[leftImageindex].shown++;

    centerImage.src = BusMall.allImages[centerImageindex].source;
    BusMall.allImages[centerImageindex].shown++;

    rightImage.src = BusMall.allImages[rightImageindex].source;
    BusMall.allImages[rightImageindex].shown++;






}


renderThreeImages();


//add Event ;


divImages.addEventListener('click', userClick);


function userClick(event) {
    counter++;
    console.log(event.target.id);


    if (counter <= maxAttempts) {


        if (event.target.id === 'leftImage') {


            BusMall.allImages[leftImageindex].votes++;


        }
        else if (event.target.id === 'rightImage') {

            BusMall.allImages[rightImageindex].votes++;
        }
        else if (event.target.id === 'centerImage') {

            BusMall.allImages[centerImageindex].votes++;
        }
        else {
           alert('Please Click in the Images ');
            counter--;
            
         
        }
        renderThreeImages();

    } else {
        // console.log(BusMall.allImages);
        let button = document.getElementById('button');
        button.hidden = false;
        button.addEventListener('click', getList);
      
        divImages.removeEventListener('click', userClick);


        // for (let i = 0; i < BusMall.allImages.length; i++) {

        //     votes.push(BusMall.allImages[i].votes);
        //     shown.push(BusMall.allImages[i].shown);
        // }
        updateStorage();
        chart();
        
    }
  
  

}

function getList() {
    let ul = document.getElementById('list');
    for (let i = 0; i < BusMall.allImages.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${BusMall.allImages[i].name} had 
           ${BusMall.allImages[i].votes} votes, and was seen ${BusMall.allImages[i].shown} times.`;



    }
    button.removeEventListener('click', getList);
}

// add chart

function chart() {

    for (let i = 0; i < BusMall.allImages.length; i++) {

        votes.push(BusMall.allImages[i].votes);
        shown.push(BusMall.allImages[i].shown);
    }
    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imageNames,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    '#5e8b7e',
                    '#5e8b7e',
                    '#5e8b7e',
                    '#5e8b7e',
                    '#5e8b7e',
                    '#5e8b7e'
                ],
                borderColor: [
                    'tomato',
                    'tomato',
                    'tomato',
                    'tomato',
                    'tomato',
                    'tomato'
                ],
                borderWidth: 2
            },
            {
                label: '# of shown',
                data: shown,
                backgroundColor: [
                    '#fb9300',
                    '#fb9300',
                    '#fb9300',
                    '#fb9300',
                    '#fb9300',
                    '#fb9300'
                ],
                borderColor: [
                    'green',
                    'green',
                    'green',
                    'green',
                    'green',
                    'green'
                ],
                borderWidth: 2
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}

getShownAndVotes();
