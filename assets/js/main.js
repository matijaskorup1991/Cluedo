let $ = (el) => document.querySelector(el);
let $$ = (el) => document.querySelectorAll(el);

const suspectsArray = [];
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

function revealMystery(obj) {}
