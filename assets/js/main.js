const images = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// select dom elements
const slides_dom_element = document.querySelector('.slides')
const thumbs_dom_element = document.querySelector('.thumbs')
const prev_dom_element = document.querySelector('.prev')
const next_dom_element = document.querySelector('.next')

let active_slide = 0

// add images dynamically to the .slides DOM Element
// - add an active css class to the slide we want to activate

// add thumbs dynamically to the .thumbs DOM element
// - add an active css class to the thumb to activate
images.forEach((slide, i) => {
 const markup = `
  <div class="slide ${i === active_slide ? 'active' : ''}">
    <img src="./assets/${slide.image}" alt="${slide.title} image" >
    <div class="text">
      <h3>${slide.title}</h3>
      <p>${slide.text}</p>
    </div>
  </div>
  ` 
  slides_dom_element.insertAdjacentHTML('beforeend', markup)

  const thumb = `<img src="./assets/${slide.image}" alt="" class="${i === active_slide ? 'active' : ''}">`

  thumbs_dom_element.insertAdjacentHTML('beforeend', thumb)

})


// add event listener to the prev button
// - select the current active slide
// - remove from the node the active class
// - increment a counter to track the active slide
// - select the next image from the images list
// - add to it the active classe
// - select current thumbnail 
// - remove the active class form the thumb
// - select the next thumb
// - add the active class
prev_dom_element.addEventListener('click', prev);

// add event listener to the next button
next_dom_element.addEventListener('click', next);

function next() {

  if (active_slide === images.length - 1) {
    active_slide = 0
  } else {
    active_slide++
  }

  const activeSlide = document.querySelector('.slide.active')
  //console.log(activeSlide);
  activeSlide.classList.remove('active')
  const next_slide = document.querySelectorAll('.slide')[active_slide]
  next_slide.classList.add('active')

  const activeThumb = document.querySelector('.thumbs img.active')
  activeThumb.classList.remove('active')

  const next_thumb = document.querySelectorAll('.thumbs img')[active_slide]
  next_thumb.classList.add('active')

}

function prev () {

  if (active_slide === 0) {
    active_slide = images.length - 1
  } else {
    active_slide--
  }

  const activeSlide = document.querySelector('.slide.active')
  //console.log(activeSlide);
  activeSlide.classList.remove('active')
  const next_slide = document.querySelectorAll('.slide')[active_slide]
  next_slide.classList.add('active')

  const activeThumb = document.querySelector('.thumbs img.active')
  activeThumb.classList.remove('active')

  const next_thumb = document.querySelectorAll('.thumbs img')[active_slide]
  next_thumb.classList.add('active')

}

// Bonus 2 Autoplay carousel
// - increment the active slide value every 3 seconds
let autoplay;
autoplay = setInterval(next, 3000)

// Bonus 3 Start stop carousel
// - on mouse enter inside the slider stop the autoplay
const slider_dom_element = document.querySelector('.slider')
slider_dom_element.addEventListener('mouseenter', ()=> {

  clearInterval(autoplay)

})
// - on mouse leave restart the autoplay
slider_dom_element.addEventListener('mouseleave', ()=> {
  autoplay = setInterval(next, 3000)
})

// Invert the autoplay on button click
// - attach event listener to the revert button
// - when clicked stop the autoplay
// - restart the autoplay using the prev callback

document.querySelector('button.revert').addEventListener('click', ()=>{
  console.log('clicket on revert');
  clearInterval(autoplay)
  autoplay = setInterval(prev, 3000)
})


// Bonus 4
// when the user clicks on a thumb the main image changes 
// - select all thumbs
// - add an event listener
// - update the current active slide image

const thumbs_list = document.querySelectorAll('.thumbs img')
thumbs_list.forEach((thumb, index) => {
  thumb.addEventListener('click', function(){
    active_slide = index
    console.log(active_slide);
    // remove the active class form the active image
    document.querySelector('.slide.active').classList.remove('active')
    // update the thumbnail
    document.querySelector('.thumbs img.active').classList.remove('active')
    document.querySelectorAll('.slide')[active_slide].classList.add('active')
    thumb.classList.add('active')
    

  })
})