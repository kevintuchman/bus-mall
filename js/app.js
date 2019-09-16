'use strict';

var votesRemaining = 25;

var busContainerEl = document.getElementById('bus-contianer');

var resultsEl = document.getElementById('results');

var busOneEl = document.getElementById('bus-1');
var busTwoEl = document.getElementById('bus-2');
var busThreeEl = document.getElementById('bus-3');

var allBus = [];

function bus(name){
  this.name = name;
  this.filepath = 'img/${name}.jpg';
  this.votes = 0;
  this.views = 0;

  allBus.push(this);
}

new Bus('bag');
new Bus('banana');
new Bus('bathroom');
new Bus('boots');
new Bus('breakfast');
new Bus('bubblegum');
new Bus('chair');
new Bus('cthulhu');
new Bus('dog-duck');
new Bus('dragon');
new Bus('pen');
new Bus('pet-sweep');
new Bus('scissors');
new Bus('shark');
new Bus('sweep');
new Bus('tauntaun');
new Bus('unicorn');
new Bus('usb');
new Bus('water-can');
new Bus('wine-glass');

var recentRandomNumbers = [];

function random(min, max){
  return Math.floor(Math.random( * (max - min +1) + min);)
}

function render(){

  var randomIndex = random(0, allBus.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBus.length-1);
  }
}

recentRandomNumbers.push(randomIndex);

if(recentRandomNumbers.length > 6){
  recentRandomNumbers.shift();
}

allBus[randomIndex].views++;

busTwoEl.src = allBus[randomIndex].filepath;
busTwoEl.alt = allBus[randomIndex].name;
busTwoEl.title = allBuss[randomIndex].name;