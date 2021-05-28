let $ = (el) => document.querySelector(el);
let $$ = (el) => document.querySelectorAll(el);

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
const weaponsArray = [];
const roomsArray = [];

function selectRandom(arr) {
  const { floor, random } = Math;
  return arr[floor(random() * arr.length)];
}

function pickMistery() {
  let suspect = selectRandom(suspectsArray);
  return {
    firstName: suspect.firstName,
    lastName: suspect.lastName,
    weapon: selectRandom(weaponsArray).name,
    room: selectRandom(roomsArray).name,
  };
}

function revealMystery(obj) {
  return `${obj.firstName} ${obj.lastName} killed Mr. Boddy using the ${obj.weapon} in the ${obj.room}!`;
}

console.log(selectRandom(suspectsArray));
