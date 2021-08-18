function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1
let dezDaysList = [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysDez = document.querySelector('#days');

  for (let days in dezDaysList) {
    let day = dezDaysList[days];
    let dayItem = document.createElement('li');
    dayItem.className = 'day';
    getDaysDez.appendChild(dayItem);
    dayItem.innerHTML = day;

    if (day === 24 || day === 31) {
      dayItem.className += ' holiday';
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className += ' friday';
    } else if (day === 25) {
      dayItem.className += ' holiday friday';
    }
  }
}
createDaysOfTheMonth();

// Exercício 2
function createButton (name) {
  let holidayButton = document.getElementsByClassName('buttons-container')[0];
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerHTML = name;
  holidayButton.appendChild(button);
}

createButton('Feriados');

// Exercício 3
function backgroundHoliday() {
  let button = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'rgb(221, 158, 115)';

  button.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor !== newColor) {
        getHolidays[index].style.backgroundColor = newColor;
      } else {
        getHolidays[index].style.backgroundColor = backgroundColor;
      }
    }
  })
};

backgroundHoliday();

// Exercício 4
function newButton(name) {
  let button = document.getElementsByClassName('buttons-container')[0];
  let newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = name;
  button.appendChild(newButton); 
}

newButton('Sexta-feira');

// Exercício 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';
  let originalColor = 'rgb(119,119,119)';
  let newColor = 'red';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
        fridays[index].style.color = newColor;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
        fridays[index].style.color = originalColor;
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

// Exercício 6
function zoomInDays() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '25px';
  event.target.style.fontWeight = '600';
  event.target.style.color = 'rgb(218, 103, 27)';
  })
}

function zoomOutDays() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
    event.target.style.color = 'rgb(119, 119, 119)'
  })
}

zoomInDays();
zoomOutDays();

// Exercício 7
function addTask(name) {
  let task = document.getElementsByClassName('my-tasks')[0];
  let newTask = document.createElement('span');
  task.appendChild(newTask);
  newTask.innerHTML = name;
}

addTask('projeto');

// Exercício 8
function addColoredDescription (color) {
  let task = document.getElementsByClassName('my-tasks')[0];
  let description = document.createElement('div');
  task.appendChild(description);
  description.style.backgroundColor = color;
}

addColoredDescription('lightsalmon');

// Exercício 9


// Exercício 10


// Bônus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();