'use strict';

var votesRemaining = 25;

var busMallOneEl = document.getElementById('picture1');
var busMallTwoEl = document.getElementById('picture2');
var busMallThreeEl = document.getElementById('picture 3');

var containerEl = document.getElementById('busmall-container');

var allBusMall = [];

function busMall(name) {
  this.alt = name;
  this.title = name;
  this.src = `img/${name.jpg}`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

new BusMall('bag');
new BusMall('banana');
new BusMall('bathroom');
new BusMall('boots');
new BusMall('breakfast');
new BusMall('bubblegum');
new BusMall('chair');
new BusMall('cthulhu');
new BusMall('dog-duck');
new BusMall('dragon');
new BusMall('pen');
new BusMall('pet-sweep');
new BusMall('scissors');
new BusMall('shark');
new BusMall('sweep');
new BusMall('tauntaun');
new BusMall('unicorn');
new BusMall('usb');
new BusMall('water-can');
new BusMall('wine-glass');

function render() {

  var randomxIndex = random(0, allBusMall.length - 1);

  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = random(0, allBusMall.length - 1);
  }
}

if (recentRandomNumbers.length > 4) {
  recentRandomNumbers.shift();
}
recentRandomNumbers.push(randomIndex)

allBusMall[randomIndex].views++;

busMallOneEl.src = allBusMall[randomIndex].filepath;
busMallOneEl.alt = allBusMall[randomIndex].name;
busMallOneEl.title = allBusMall[randomIndex].name;

var randomIndex = random(0, allBusMall.length - 1);

while (recentRandomNumbers.includes(randomIndex)) {
  randomIndex = random(0, allBusMall.length - 1);
}

if (recentRandomNumbers.length > 4) {
  recentRandomNumbers.shift();
}

allBusMall[randomxIndex].views++;

busMallTwoEl.src = allBusMall[randomIndex].filepath;
busMallTwoEl.alt = allBusMall[randomIndex].name;
busMallTwoEl.title = allBusMall[randomIndex].name;

var randomxIndex = random(0, allBusMall.length - 1);

while (recentRandomNumbers.includes(randomIndex)) {
  randomIndex = random(0, allBusMall.length - 1);
}

if (recentRandomNumbers.length > 4) {
  recentRandomNumbers.shift();
}
recentRandomNumbers.push(randomIndex)

busMallThreeEl.src = allBusMall[randomIndex].filepath;
busMallThreeEl.alt = allBusMall[randomIndex].name;
busMallThreeEl.title = allBusMall[randomIndex].name;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imageGenerator() {

  var index = random(allBusMall.length);

  busMallOneEl.src = allBusMall[index].src;
  busMallOneEl.alt = allBusMall[index].alt;
  busMallOneEl.title = allBusMall[index].title;

  allBusMall[index].views++;

  var indexTwo = random(allBusMall.length);

  while (indexTwo === index) {
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

allBusMall[indexThree].views++;

function handleClick(event) {
  var clickedBusMall = event.target.title;

  if (e.target.id === 'busmall-container') {
    alert('click');
  }

  if (votesRemaining === 0) {
    busMallContainerEl.removeEventListener('click', handleClick);
    // render the results to the DOM
    renderChart();
  }

  for (var i = 0; i < allBusMall.length; i++) {
    if (clickedBusMall === allBusMall[i].title) {
      allBusMall[i].votes++;
    }
  }
  render();
  imageGenerator();
}

busMallContainerEl.addEventListener('click, handleClick');
containerEl.addEventListener('click', handleClick);

imageGenerator();
render();

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
