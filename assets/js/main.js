let $ = (el) => document.querySelector(el);
let $$ = (el) => Array.from(document.querySelectorAll(el));
let $on = (el, ev, fn) =>
  Array.isArray(el)
    ? el.forEach((o) => $on(o, ev, fn))
    : el.addEventListener(ev, fn);

const suspectsArray = [
  {
    firstName: 'Jacob',
    lastName: 'Green',
    occupation: 'Entrepreneur',
    age: 45,
    description: 'He has a lot of connections',
    img: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    color: 'green',
  },
  {
    firstName: 'Doctor',
    lastName: 'Orchid',
    occupation: 'Scientist',
    age: 26,
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy ',
    img: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    color: 'white',
  },
  {
    firstName: 'Victor',
    lastName: 'Plum',
    occupation: 'Designer',
    age: 22,
    description: 'Billionaire video game designer ',
    img: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg ',
    color: 'purple',
  },
  {
    firstName: 'Kasandra',
    lastName: 'Scarlet',
    occupation: 'Actress',
    age: 31,
    description: 'She is an A-list movie star with a dark past',
    img: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/07/04/10/cluedo-miss-scarlett.jpg',
    color: 'red',
  },
  {
    firstName: 'Eleanor',
    lastName: 'Peacock',
    occupation: 'Socialité',
    age: 36,
    description:
      'She is from a wealthy family and uses her status and money to earn popularity',
    img: 'https://pm1.narvii.com/6722/3bd0d86d367315d9e81a12390c17343a27d8a4d9_hq.jpg ',
    color: 'blue',
  },
  {
    firstName: 'Jack',
    lastName: 'Mustard',
    occupation: 'Retired Football player ',
    age: 62,
    description:
      'He is a former football player who tries to get by on his former glory i',
    img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg ',
    color: 'yellow',
  },
];
const weaponsArray = [
  {
    name: 'rope',
    weight: 10,
  },
  {
    name: 'knife',
    weight: 8,
  },
  {
    name: 'candlestick',
    weight: 2,
  },
  {
    name: 'dumbbell',
    weight: 30,
  },
  {
    name: 'poison',
    weight: 2,
  },
  {
    name: 'axe',
    weight: 15,
  },
  {
    name: 'bat',
    weight: 13,
  },
  {
    name: 'trophy',
    weight: 25,
  },
  {
    name: 'pistol',
    weight: 20,
  },
];
const roomsArray = [
  { name: 'Dining Room' },
  { name: 'Conservatory' },
  { name: 'Kitchen' },
  { name: 'Study' },
  { name: 'Library' },
  { name: 'Billiard Room' },
  { name: 'Lounge' },
  { name: 'Ballroom' },
  { name: 'Hall' },
  { name: 'Spa' },
  { name: 'Living Room' },
  { name: 'Observatory' },
  { name: 'Theater' },
  { name: 'Guest House' },
  { name: 'Patio' },
];

function selectRandom(arr) {
  const { floor, random } = Math;
  return arr[floor(random() * arr.length)];
}

function pickMistery() {
  let suspect = selectRandom(suspectsArray);
  let { firstName, lastName, color, description, occupation, img, age } =
    suspect;
  return {
    firstName,
    lastName,
    color,
    description,
    occupation,
    img,
    age,
    weapon: selectRandom(weaponsArray).name,
    room: selectRandom(roomsArray).name,
  };
}

function revealMystery(obj) {
  let { color, firstName, lastName, weapon, occupation, room, img, age } = obj;
  $(
    '.kiler'
  ).innerHTML = `<span style="color: ${color}">${firstName} ${lastName}</span> killed Mr. Boddy using the ${weapon} in the ${room}!`;
  $('.img').setAttribute('src', img);
  $('.kiler-name').innerHTML = `${firstName} ${lastName} (${age})`;
  $('.kiler-desc').innerHTML = occupation;
}

console.log(selectRandom(suspectsArray));
console.log(pickMistery());
console.log(revealMystery(pickMistery()));

$on($('.run-game'), 'click', () => {
  revealMystery(pickMistery());
});
