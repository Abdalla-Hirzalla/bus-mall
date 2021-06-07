'use strict';

let divImages = document.getElementById('busMall');
let leftImage = document.getElementById('leftImage');
let rightImage = document.getElementById('rightImage');
let centerImage = document.getElementById('centerImage');

let leftImageindex;
let centerImageindex;
let rightImageindex;



let maxAttempts = 25;

let counter = 0;



function BusMall(name, source) {
    this.name = name;
    this.source = source;
    this.timeShown = 0;
    this.votes = 0;

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




function renderThreeImages() {

    leftImageindex = randomIndex();
    centerImageindex = randomIndex();
    rightImageindex = randomIndex();



    while (leftImageindex === centerImageindex || leftImageindex === rightImageindex || centerImageindex === rightImageindex) {

        leftImageindex = randomIndex();
        centerImageindex = randomIndex();
    }





    leftImage.src = BusMall.allImages[leftImageindex].source;
    BusMall.allImages[leftImageindex].timeShown++;

    centerImage.src = BusMall.allImages[centerImageindex].source;
    BusMall.allImages[centerImageindex].timeShown++;

    rightImage.src = BusMall.allImages[rightImageindex].source;
    BusMall.allImages[rightImageindex].timeShown++;




}


renderThreeImages();



// let button = document.getElementById('list');
// button.addEventListener('click', userClick);



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
        let button = document.getElementById('button');
        button.hidden = false;
        button.addEventListener('click', getList);

        divImages.removeEventListener('click', userClick);
    }



}

function getList() {
    let ul = document.getElementById('list');
    for (let i = 0; i < BusMall.allImages.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${BusMall.allImages[i].name} had 
           ${BusMall.allImages[i].votes} votes, and was seen ${BusMall.allImages[i].timeShown} times.`;







    }
    button.removeEventListener('click', getList);
}



