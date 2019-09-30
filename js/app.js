'use strict';

//array to put in pictures
var recentRandomNumbers = [];

var votesRemaining = 25;

var busMallOneEl = document.getElementById('picture1');
var busMallTwoEl = document.getElementById('picture2');
var busMallThreeEl = document.getElementById('picture3');

var containerEl = document.getElementById('busmall-container');
var ctx = document.getElementById('myChart').getContext('2d');

//arrays
var allBusMall = [];
var itemNames = [];
var itemLikes = [];

//chart
function renderChart(){
  var chartData = {
    labels: itemNames,
    datasets: [{
      label: 'Number of Likes',
      data: itemLikes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(245, 150, 40, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
    }],
  };
  var chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        },
      }],
    },
  };
  var chart = {
    type: 'bar',
    data: chartData,
    options: chartOptions,
  };
  for(var i in allBusMall){
    itemNames.push(allBusMall[i].title);
    itemLikes.push(allBusMall[i].votes);
  }

  var myChart = new Chart(ctx, chart);
  console.log(itemNames);
  console.log(itemLikes);
}
//constructor function
function BusMall(name, fileextension) {
  this.alt = name;
  this.title = name;
  this.src = `img/${name}.${fileextension}`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function populateData() {
  if(!localStorage.getItem('votesTotal')){
    new BusMall('bag', 'jpg');
    new BusMall('banana', 'jpg');
    new BusMall('bathroom', 'jpg');
    new BusMall('boots', 'jpg');
    new BusMall('breakfast', 'jpg');
    new BusMall('bubblegum', 'jpg');
    new BusMall('chair', 'jpg');
    new BusMall('cthulhu', 'jpg');
    new BusMall('dog-duck', 'jpg');
    new BusMall('dragon', 'jpg');
    new BusMall('pen', 'jpg');
    new BusMall('pet-sweep', 'jpg');
    new BusMall('scissors', 'jpg');
    new BusMall('shark', 'jpg');
    new BusMall('sweep', 'png');
    new BusMall('tauntaun', 'jpg');
    new BusMall('unicorn', 'jpg');
    new BusMall('usb', 'gif');
    new BusMall('water-can', 'jpg');
    new BusMall('wine-glass', 'jpg');
  }else{
    allBusMall = JSON.parse(localStorage.getItem('votesTotal'));
  }
}
//make it random
function getRandomIndex() {

  var randomIndex = random(0, allBusMall.length - 1);
  recentRandomNumbers.push(randomIndex);
  recentRandomNumbers.push(randomIndex);

  if (recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }
  return randomIndex;
}
//random generator
function render() {
  var randomIndex = getRandomIndex();
  var randomIndexTwo = getRandomIndex();
  var randomIndexThree = getRandomIndex();

  allBusMall[randomIndex].views++;
  busMallOneEl.src = allBusMall[randomIndex].src;
  busMallOneEl.alt = allBusMall[randomIndex].title;
  busMallOneEl.title = allBusMall[randomIndex].title;

  allBusMall[randomIndexTwo].views++;
  busMallTwoEl.src = allBusMall[randomIndexTwo].src;
  busMallTwoEl.alt = allBusMall[randomIndexTwo].title;
  busMallTwoEl.title = allBusMall[randomIndexTwo].title;

  allBusMall[randomIndexThree].views++;
  busMallThreeEl.src = allBusMall[randomIndexThree].src;
  busMallThreeEl.alt = allBusMall[randomIndexThree].title;
  busMallThreeEl.title = allBusMall[randomIndexThree].title;
}

//image generator
function imageGenerator() {

  var index = getRandomIndex();

  busMallOneEl.src = allBusMall[index].src;
  busMallOneEl.alt = allBusMall[index].alt;
  busMallOneEl.title = allBusMall[index].title;

  allBusMall[index].views++;

  var indexTwo = getRandomIndex();

  while (indexTwo === index ) {
    indexTwo = getRandomIndex();
  }

  busMallTwoEl.src = allBusMall[indexTwo].src;
  busMallTwoEl.alt = allBusMall[indexTwo].alt;
  busMallTwoEl.title = allBusMall[indexTwo].title;

  allBusMall[indexTwo].views++;

  var indexThree = getRandomIndex();

  while (indexThree === index || indexThree === indexTwo){
    indexThree = getRandomIndex();
  }
  busMallThreeEl.src = allBusMall[indexThree].src;
  busMallThreeEl.alt = allBusMall[indexThree].alt;
  busMallThreeEl.title = allBusMall[indexThree].title;

  allBusMall[indexThree].views++;
}

//results
function showResults() {
  var labels = [];
  var dataResults = [];
  for (var i = 0; i < allBusMall.length; i++) {
    var title = allBusMall[i].title;
    labels.push(title);
    var temp = allBusMall[i].votes;
    var shown = allBusMall[i].views;
    dataResults.push(100 * temp / shown);
  }


}
//clicker
function handleClick(event) {
  var clickedBusMall = event.target.title;
  imageGenerator();
  for (var i = 0; i < allBusMall.length; i++) {
    if (clickedBusMall === allBusMall[i].title) {
      allBusMall[i].votes++;
      votesRemaining = votesRemaining - 1;
    }
  }
  if (votesRemaining === 0){
    containerEl.removeEventListener('click', handleClick);
    localStorage.setItem('votesTotal', JSON.stringify(allBusMall));
    renderChart();
  }
}


votesRemaining = 25;
showResults();

containerEl.addEventListener('click', handleClick);
//main functions
populateData();
render();
