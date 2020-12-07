console.log('Hello from js/scripts.js!');
const customName = document.getElementById('customname');
const customNamE = document.getElementById('customnamE');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'Sarikka and Marianna were dreaming of a vacation, somewhere in the alps.  To their luck, they entered a contest for a free vacation and won! The vacation was valued at 10000 dollars. They packed their bags, boarded their flight and were on their way to :inserta: for their all-inclusive trip.  As soon as they got off their flight, a taxi picked them up from their airport to go to the hotel. It was 45 degrees fahrenheit. To their surprise, they had the penthouse suite with a view overlooking :insertb:.  To top it off, the hotel provided a spa package with room service.  They decided to order the most expensive thing on the menu, :insertc:. As they relaxed in the spa with their full bellies, they were excited with what the next day had in store…';
let insertA = ['Switzerland','Jamaica','Mount Fuji'];
let insertB = ['a glacier','the ocean','the most scenic mountain'];
let insertC = ['the salmon topped with caviars','the buttered lobster','the tender, juicy wagyu beef'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let aItem = randomValueFromArray(insertA);
  let bItem = randomValueFromArray(insertB);
  let cItem = randomValueFromArray(insertC);

  newStory = newStory.replace(':inserta:',aItem);
  newStory = newStory.replace(':insertb:',bItem);
  newStory = newStory.replace(':insertc:',cItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Sarikka',name);
  }

  if(customName.value !== '') {
    const name = customNamE.value;
    newStory = newStory.replace('Marianna',name);
  }

  if(document.getElementById("tropics").checked) {
    document.body.className += ' tropics';
  }

  if(document.getElementById("tropics").checked) {
    const currency = Math.round(10000*145) + ' Jamaican Dollars';
    const temperature =  Math.round((45-32) * 5 / 9) + 'celsius';
    newStory = newStory.replace('10000 dollars',currency);
    newStory = newStory.replace('45 degrees fahrenheit',temperature);
    newStory = newStory.replace('the alps','the tropics');
  }

  if(document.getElementById("ice").checked) {
    document.body.className += ' ice';
  }

  if(document.getElementById("ice").checked) {
    const currency = Math.round(10000*.89) + ' swiss franc';
    const temperature =  Math.round((45-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('10000 dollars',currency);
    newStory = newStory.replace('45 degrees fahrenheit',temperature);
    newStory = newStory.replace('the alps','the snow');
  }

  if(document.getElementById("mountains").checked) {
    document.body.className += ' mountains';
  }

  if(document.getElementById("mountains").checked) {
    const currency = Math.round(10000*104) + ' yen';
    const temperature =  Math.round((45-32) * 5 / 9) + ' celsius';
    newStory = newStory.replace('10000 dollars',currency);
    newStory = newStory.replace('45 degrees fahrenheit',temperature);
    newStory = newStory.replace('the alps','nature');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

$(document).ready(function() {
  $('.randomize').click(function () {

    if($('.randomize').is('click')){

      $('.reset').hide();
    }

    else {
      $('.reset').show();
    }
  });
});

function refreshPage(){
  window.location.reload();
}
