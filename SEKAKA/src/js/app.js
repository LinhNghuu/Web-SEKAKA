// ------About-Contact Me------
handleRadio();

function handleRadio() {
  document.getElementById('question').addEventListener('change', () => {
    changeRadio(1);
  });
  document.getElementById('comment').addEventListener('change', () => {
    changeRadio(2);
  });
  document.getElementById('hiring').addEventListener('change', () => {
    changeRadio(3);
  });
}

function changeRadio(type) {
  // 1 = question, 2 = comment, 3 = hiring

  let remove;
  if ((remove = document.getElementById('message'))) {
    let parent = remove.parentNode;
    parent.removeChild(remove);
  }

  if ((remove = document.getElementById('hourlyRate-div'))) {
    let parent = remove.parentNode;
    parent.removeChild(remove);
  }

  if (type == 1 || type == 2) {
    let parent = document.getElementById('input-node');
    let box = document.createElement('textarea');
    box.rows = 5;
    box.setAttribute('id', 'message');
    box.required = true;

    if (type == 1) {
      let comment = document.getElementById('comment-label');
      box.placeholder = 'Enter your question here...';
      parent.insertBefore(box, comment);
    } else if (type == 2) {
      box.placeholder = 'Enter your comment here...';
      let hiring = document.getElementById('hiring-label');
      parent.insertBefore(box, hiring);
    }
  } else if (type == 3) {
    let div = document.createElement('div');
    div.setAttribute('id', 'hourlyRate-div');
    let parent = document.getElementById('input-node');
    let label = document.createElement('label');
    label.for = 'hourlyRate';
    let input = document.createElement('input');
    input.type = 'number';
    input.name = 'hourlyRate';
    input.min = '20';
    input.required = true;
    input.placeholder = 'Enter Hourly Wage Here...';
    input.style.fontsize = '5px';
    input.style.width = '15vw';
    input.setAttribute('id', 'hourlyRate');

    div.appendChild(label);
    div.appendChild(input);

    let number = document.getElementById('number-label');
    parent.insertBefore(div, number);
  }
}
