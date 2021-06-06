'use strict';

// getting the element from html
let button=document.getElementById('randomizer');

button.addEventListener('click',randomize);




// let volume=prompt('set the volume 0.0 until 1.0');

// let audioElement=document.getElementById('levees');
// audioElement.volume=volume;


function randomize() {
    let audioElement=document.getElementById('levees');

    // console.log(audioElement);
    // Math.random 0=>1
    audioElement.volume=Math.random();
    // audioElement.volume=0.5;
    console.log(audioElement.volume);
}
