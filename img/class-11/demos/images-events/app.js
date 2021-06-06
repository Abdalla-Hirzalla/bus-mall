'use strict';

/*
  Practice domain modeling by planning out an app w that allows users to choose their favorite between two goats

  App Flow:
  - Welcome and instructions
  - Randomly put 2 goats on the screen
    - Random number generator
    - a function to display goats
  - A user clicks on a goat
    - event listener needs to be on the image to fire the event handler
    - the event handler fires
      - ? check if total clicks is 25 ?
        - stop letting the user click
        - display the clicks
      -? If not ?
        - track which goat was clicked on
        - update clicke images count of how many times it has been clicked on
        - update both images'count of times shown
        - Randomly Pick 2 goats, run the same code that put them on the screen to begin with

  HTML
    - have a left and right image container in the html
    - Give them id's so we can select them
    - let the user know what they are supposed to do
      - instructions

  More javascript details
  We need Objects with all the image properties
  var Image = function ()
  {
    name : 'cool goat',
    clicks: 0,
    times shown: 0,
    url : 'cool-goat.jpg'
  }

  We need an Array to hold all image Objects

  function to randomly pick an image{
    Prevent last picked goats from being picked
      - STRETCH pick all goats evenly as possible
    Math.floor  Math.random() * array.length()
    make sure left and right image are unique
  }

  click on an image, targetted by id
  add event listener('click', function(){
    keep track of the image that is clicked
    prevent all currently displayed images from being re clicked {
    }
  })

  function to display all the clicks at the end () {
    generate a table or list
    populate the data - adds to the inner html of an existing element (table or list)
    divide object's times clicked by total shown
  }

*/

let leftImageElement=document.getElementById('left-image');
let rightImageElement=document.getElementById('right-image');

let maxAttempts=10;
let userAttemptsCounter=0;

// the random number index for the left image
let leftImageIndex; 

// the random number index for the right image
let rightImageIndex;



function Goat(name,source) {
  this.name=name;
  this.source=source;
  this.votes=0;

  Goat.allGoats.push(this);
}

// will contain all of the goats that will be created

Goat.allGoats=[];


new Goat('cruisin-goat','images/cruisin-goat.jpg');//0
new Goat('float-your-goat', 'images/float-your-goat.jpg');//1
new Goat('goat-away', 'images/goat-away.jpg');//2
new Goat('goat-out-of-hand', 'images/goat-out-of-hand.jpg');//3
new Goat('kissing-goat', 'images/kissing-goat.jpg');//4
new Goat('sweater-goat', 'images/sweater-goat.jpg');//5
new Goat('sassy-goat', 'images/sassy-goat.jpg');//6
new Goat('smiling-goat', 'images/smiling-goat.jpg');//7


function generateRandomIndex() {
  // 0 => 7
  return Math.floor(Math.random() * Goat.allGoats.length); 
}

// console.log(generateRandomIndex());


function renderTwoImages() {
  // 0=>7
  leftImageIndex=generateRandomIndex();
  // 0=>7
  rightImageIndex=generateRandomIndex();

  while (leftImageIndex===rightImageIndex) {
    rightImageIndex=generateRandomIndex();
    
  }

  // Goat.allGoats[0];
  // Goat.allGoats[1];
  // Goat.allGoats[2];
  // Goat.allGoats[3];
  // Goat.allGoats[4];


  console.log(Goat.allGoats[leftImageIndex].source);

  // make the source for the left and right image equal to the random goat source
  leftImageElement.src=Goat.allGoats[leftImageIndex].source;

  rightImageElement.src=Goat.allGoats[rightImageIndex].source;
}
renderTwoImages();

// add event listner
// container
leftImageElement.addEventListener('click',handleUserClick);
rightImageElement.addEventListener('click',handleUserClick);


function handleUserClick(event) {
  
  console.log(event.target.id);

  // adding to attempts
  userAttemptsCounter++;
  // console.log(userAttemptsCounter);

  // if the attempts is lower than the max:
  // -add to the votes based on the id
  // -render two new images

  // ELSE
  // show the list
  // remove the clicking


  if (userAttemptsCounter<=maxAttempts) {


    if (event.target.id==='left-image') {
      // the random number
      // Goat.allGoats[5].votes++
      Goat.allGoats[leftImageIndex].votes++

    }else{
      Goat.allGoats[rightImageIndex].votes++
    }

    console.log(Goat.allGoats);
    renderTwoImages();


  }else{
    // show results
    let list=document.getElementById('results-list');
    for (let i = 0; i < Goat.allGoats.length; i++) {
      let goatResult=document.createElement('li');

      list.append(goatResult);

      goatResult.textContent=`${Goat.allGoats[i].name} has ${Goat.allGoats[i].votes} votes`;
      
    }

    // stop the clicking
    leftImageElement.removeEventListener('click',handleUserClick);
    rightImageElement.removeEventListener('click',handleUserClick);
  }

}



