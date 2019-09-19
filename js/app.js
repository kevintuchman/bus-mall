'use strict';

var votesRemaining = 25;

var busMallOneEl = document.getElementById('picture1');
var busMallTwoEl = document.getElementById('picture2');
var busMallThreeEl = document.getElementById('picture 3');

var containerEl = document.getElementById('busmall-container');

var allBusMall = [];

function busMall(name){
  this.alt = name;
  this.title = name;
  this.src = `img/${name.jpg}`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

function imageGenerator(){

  var index = random(allBusMall.length);

  busMallOneEl.src = allBusMall[index].src;
  busMallOneEl.alt = allBusMall[index].alt;
  busMallOneEl.title = allBusMall[index].title;

  allBusMall[index].views++;

  var indexTwo = random(allBusMall.length);

  while(indexTwo === index){
    indexTwo = random(allBusMall.length);
  }

  busMallTwoEl.src = allBusMall[indexTwo].src;
  busMallTwoEl.alt = allBusMall[indexTwo].alt;
  busMallTwoEl.title = allBusMall[indexTwo].title;

  allBusMall[indexTwo].views++;
}

busMallThreeEl.src = allBusMall[indexThree].src;
busMallThreeEl.alt = allBusMall[indexThree].alt;
busMallThreeEl.title = allBusMall[indexThree].title;

// allBusMall[indexThree].views++;

function handleClick(event){
  var clickedBusMall = event.target.title;

  for(var i = 0; i < allBusMall.length; i++){
    if(clickedBusMall === allBusMall[i].title{
      allBusMall[i].votes++;
    }
  }

  imageGenerator();
}

containerEl.addEventListener('click', handleClick);

imageGenerator();