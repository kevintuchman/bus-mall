'use strict';
var recentRandomNumbers = [];

var votesRemaining = 25;

var busMallOneEl = document.getElementById('picture1');
var busMallTwoEl = document.getElementById('picture2');
var busMallThreeEl = document.getElementById('picture3');

var containerEl = document.getElementById('busmall-container');

var allBusMall = [];

function BusMall(name) {
  this.alt = name;
  this.title = name;
  this.src = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function populateData(){
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
}



function render() {

  var randomIndex = random(0, allBusMall.length - 1);

  // while (recentRandomNumbers.includes(randomIndex)) {
  //   randomIndex = random(0, allBusMall.length - 1);
  // }

  // if (recentRandomNumbers.length > 3) {
  //   recentRandomNumbers.shift();
  // }
  // recentRandomNumbers.push(randomIndex)

  allBusMall[randomIndex].views++;
  console.log(randomIndex);
  busMallOneEl.src = allBusMall[randomIndex].src;
  busMallOneEl.alt = allBusMall[randomIndex].title;
  busMallOneEl.title = allBusMall[randomIndex].title;

  var randomIndexTwo = random(0, allBusMall.length - 1);
  allBusMall[randomIndexTwo].views++;
  console.log(randomIndexTwo);
  busMallTwoEl.src = allBusMall[randomIndexTwo].src;
  busMallTwoEl.alt = allBusMall[randomIndexTwo].title;
  busMallTwoEl.title = allBusMall[randomIndexTwo].title;

  var randomIndexThree = random(0, allBusMall.length - 1);
  allBusMall[randomIndexThree].views++;
  console.log(randomIndexThree);
  busMallThreeEl.src = allBusMall[randomIndexThree].src;
  busMallThreeEl.alt = allBusMall[randomIndexThree].title;
  busMallThreeEl.title = allBusMall[randomIndexThree].title;
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

  var indexThree = random(allBusMall.length);

  busMallThreeEl.src = allBusMall[indexThree].src;
  busMallThreeEl.alt = allBusMall[indexThree].alt;
  busMallThreeEl.title = allBusMall[indexThree].title;

  allBusMall[indexThree].views++;
}

//clicker

function handleClick(event) {
  var clickedBusMall = event.target.title;
  console.log('You clicked on', clickedBusMall);
  for (var i = 0; i < allBusMall.length; i++) {
    if (clickedBusMall === allBusMall[i].title) {
      allBusMall[i].votes++;
      votesRemaining = votesRemaining - 1;
    }
  }

  if (votesRemaining === 0) {
    console.log('voting is done');
    containerEl.removeEventListener('click', handleClick);
    // render the results to the DOM
  //   renderChart();
  }
  else{
    render();
  }
}

containerEl.addEventListener('click', handleClick);
//main functions
populateData();
console.log(allBusMall);
render();

// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//       label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     }
//   }
// });

//local storage

// var stringifyBusMall = JSON.stringify(allBusMall);

// localStorage.setItem('busmall', 'stringifyedBusMall');

// var localStorageBusMall = localStorage.getItem('busmall');

// var parsedBusMall = JSON.parse(localStorageBusMall);