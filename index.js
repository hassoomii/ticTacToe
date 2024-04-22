function User(){
  var userTurn = true;
  return{
    userTurn
  };
};

function GameBoard(){
  var userOneMessage = "User one's turn";
  var userTwoMessage = "User two's turn";
  var userOneWinMessage = "User one wins";
  var userTwoWinMessage = "User two wins";


  function displayBoard(){
    for (let i = 0; i < 3; i++){

      const gridContainer = document.getElementById('gridContainer');
      const containerRow = document.createElement('div');
      containerRow.classList.add('containerRow');

      gridContainer.appendChild(containerRow);

      for (let j = 0; j < 3; j++){

        const container = document.createElement('div');
        container.classList.add('container');

        containerRow.appendChild(container);

        container.addEventListener('click', () => {
          if (user.userTurn === true){
            container.textContent = 'X';
          } else{
            container.textContent = 'O';
          };
          user.userTurn = !user.userTurn;

        });
      };
    };
  };
  displayBoard();
  return{
    userOneMessage, userTwoMessage, userOneWinMessage, userTwoWinMessage
  };
};

const gameBoard = GameBoard();
const user = User();