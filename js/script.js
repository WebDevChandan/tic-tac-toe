//Step-1 [Getting References]
let btnRef = document.querySelectorAll('.button-option'),
  resrtBtn = document.querySelector('#restart'),
  popup = document.querySelector('.popup'),
  msgRef = document.querySelector('#message'),
  newGmBtn = document.querySelector('#new-game');

// Step-3 Winning Logic for the Game
/* Tic Tac Toe Board:-
       0 1 2
       3 4 5
       6 7 8
*/
const winLogic = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Step-2  [Display, 'X' & 'O' one by one]
let xTurn = true,
  count = 0;

btnRef.forEach((button) => {
  button.addEventListener('click', () => {
    if (xTurn) {
      xTurn = false;
      button.innerText = 'X';
      button.disabled = true;
    } else {
      xTurn = true;
      button.innerText = 'O';
      button.disabled = true;
    }
    count++;

    //Draw Game
    if (count === 9) matchDraw();
    chkWinner();
  });
});

// Step-4 [Check Winner]
// Traverse through winner Logic Array for every Click and check whether the Winning pattern Got or not. (means Every 3 Box in each row/column filled or not. for instance: [[3,4,5]] --> [],[],[] Boxes Filled or not)
const chkWinner = () => {
  for (let i = 0; i < winLogic.length; i++) {
    let [btn1, btn2, btn3] = [
      btnRef[winLogic[i][0]].innerText,
      btnRef[winLogic[i][1]].innerText,
      btnRef[winLogic[i][2]].innerText,
    ];

    if (btn1 !== '' && btn2 !== '' && btn3 !== '') {
      if (btn1 === btn2 && btn2 === btn3) {
        setTimeout(() => {
          showWinner(btn1);
        }, 200);
      }
    }
  }
};

//Step-5 [Show Winner]
const showWinner = (winnerName) => {
  btnRef.forEach((button) => (button.disabled = true));
  popup.classList.remove('hide');
  msgRef.innerText = `🎉 '${winnerName}' Wins`;
};

//Step-5 [Draw Game]
const matchDraw = () => {
  btnRef.forEach((button) => (button.disabled = true));
  popup.classList.remove('hide');
  msgRef.innerText = '🙂Match Draw';
};

//Step6 [Start New Game]
newGmBtn.addEventListener('click', () => {
  (xTurn = true), (count = 0);
  popup.classList.add('hide');
  btnRef.forEach((button) => {
    button.disabled = false;
    button.innerText = '';
  });
});

// //Step6 [Restart New Game]
resrtBtn.addEventListener('click', () => {
  (xTurn = true), (count = 0);
  popup.classList.add('hide');
  btnRef.forEach((button) => {
    button.disabled = false;
    button.innerText = '';
  });
});
