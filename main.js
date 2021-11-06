const peopleInput = document.querySelector('.header__inputs');
const adultsInput = document.querySelector('.header__inputs_adults');
const childrenInput = document.querySelector('.header__input_children');
const roomsInput = document.querySelector('.header__inputs_rooms');
const peopleFilter = document.querySelector('.header__people_filter');

const focusPeople = () => {
  peopleFilter.classList.toggle('visible_filter');
};
peopleInput.addEventListener('click', focusPeople);

const plusChildren = document.querySelector('.header__people_children button.plus');
const minusChildren = document.querySelector('.header__people_children button.minus');
const childrenFilter = document.querySelector('.header__people_age');

const showChildren = (e) => {
  childrenFilter.style.display = 'block';
  const targetInput = e.target.parentElement.querySelector('input');
  if (targetInput.value >= 1 && targetInput.value <= 9) {
    const select = document.querySelector('select').cloneNode(true);
    document.querySelector('select').after(select);
  }
};
plusChildren.addEventListener('click', showChildren);

const hideChildren = (e) => {
  if (e.target.parentElement.querySelector('input').value < 2) {
    childrenFilter.style.display = 'none';
  } else {
    const select = document.querySelector('.header__people_age select');
    select.remove();
  }
};
minusChildren.addEventListener('click', hideChildren);

const minus = document.querySelector('.header__people_count button.minus');
const plus = document.querySelector('.header__people_count button.plus');
const minusRoom = document.querySelector('.header__people_rooms button.plus');
const plusRoom = document.querySelector('.header__people_rooms button.plus');

const clickAdults = (e) => {
  const targetAdultsInput = e.target.parentElement.querySelector('.header__people_adults input');
  if (e.target.classList.contains('plus')) {
    ++targetAdultsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetAdultsInput.value;
  }
  if (targetAdultsInput.value <= 0) {
    targetAdultsInput.value = 0;
    minus.style.border = '1px solid #CECECE';
    minus.style.color = '#CECECE';
  } else {
    minus.style.border = '1px solid #3077c6';
    minus.style.color = '#3077c6';
  }
  if (targetAdultsInput.value >= 30) {
    targetAdultsInput.value = 30;
    plus.style.border = '1px solid #CECECE';
    plus.style.color = '#CECECE';
  } else {
    plus.style.border = '1px solid #3077c6';
    plus.style.color = '#3077c6';
  }
  adultsInput.setAttribute('placeholder', `${targetAdultsInput.value}` + 'Adults -');
};

plus.addEventListener('click', clickAdults);
minus.addEventListener('click', clickAdults);

const clickChildren = (e) => {
  const targetCheldrenInput = e.target.parentElement.querySelector('.header__people_children input');
  if (e.target.classList.contains('plus')) {
    ++targetCheldrenInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetCheldrenInput.value;
  }
  if (targetCheldrenInput.value <= 0) {
    targetCheldrenInput.value = 0;
    minusChildren.style.border = '1px solid #CECECE';
    minusChildren.style.color = '#CECECE';
  } else {
    minusChildren.style.border = '1px solid #3077c6';
    minusChildren.style.color = '#3077c6';
  }
  if (targetCheldrenInput.value >= 10) {
    targetCheldrenInput.value = 10;
    plusChildren.style.border = '1px solid #CECECE';
    plusChildren.style.color = '#CECECE';
  } else {
    plusChildren.style.border = '1px solid #3077c6';
    plusChildren.style.color = '#3077c6';
  }
  childrenInput.setAttribute('placeholder', `${targetCheldrenInput.value}` + 'Children -');
};

minusChildren.addEventListener('click', clickChildren);
plusChildren.addEventListener('click', clickChildren);

const clcikRoom = (e) => {
  const targetRoomsInput = e.target.parentElement.querySelector('.header__people_rooms input');
  if (e.target.classList.contains('plus')) {
    ++targetRoomsInput.value;
  } else if (e.target.classList.contains('minus')) {
    --targetRoomsInput.value;
  }
  if (targetRoomsInput.value <= 1) {
    targetRoomsInput.value = 1;
    minusRoom.style.border = '1px solid #CECECE';
    minusRoom.style.color = '#CECECE';
  } else {
    minusRoom.style.border = '1px solid #3077c6';
    minusRoom.style.color = '#3077c6';
  }
  if (targetRoomsInput.value >= 30) {
    targetRoomsInput.value = 30;
    plusRoom.style.border = '1px solid #CECECE';
    plusRoom.style.color = '#CECECE';
  } else {
    plusRoom.style.border = '1px solid #3077c6';
    plusRoom.style.color = '#3077c6';
  }
  roomsInput.setAttribute('placeholder', `${targetRoomsInput.value}` + ' Room');
};

plusRoom.addEventListener('click', clcikRoom);
minusRoom.addEventListener('click', clcikRoom);