//To deploy app use: npm run deploy

import './App.css';
import {useState} from 'react'

function App() {
  const cells = document.querySelectorAll("td");
  const [letter, setletter] = useState("X");

  function changeLetter(event){
    event.target.innerText = letter;
    if(letter === "X"){
      setletter("O");
    }else if(letter === "O"){
      setletter("X");
    }

  }

  function highlight(first, second, third){
    cells[first].style.backgroundColor = "rgb(168, 154, 204)";
    cells[second].style.backgroundColor = "rgb(168, 154, 204)";
    cells[third].style.backgroundColor = "rgb(168, 154, 204)";
  }

  function resetBoard(){
    setletter("X");
    for(let i in cells){
      cells[i].innerText = "";
      cells[i].style.backgroundColor = "";
    }
  }

  //This function checks the different conditions of how to win a tic tac toe game.
  //I'm certain that there's a more efficient solution.
  function checkForWinner(){
    if(cells[0].innerText !=="" && cells[0].innerText === cells[1].innerText && cells[1].innerText === cells[2].innerText){
      alert(cells[0].innerText + " is the winner");
      setletter("X");
      highlight(0, 1, 2);

    }else if(cells[0].innerText !=="" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText){
      alert(cells[0].innerText + " is the winner");
      highlight(0, 4, 8);
      setletter("X");

    }else if(cells[3].innerText !=="" && cells[3].innerText === cells[4].innerText && cells[4].innerText === cells[5].innerText){
      alert(cells[3].innerText + " is the winner");
      highlight(3, 4, 5);
      setletter("X");

    }else if(cells[2].innerText !=="" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText){
      alert(cells[2].innerText + " is the winner");
      highlight(2, 4, 6);
      setletter("X");

    }else if(cells[6].innerText !=="" && cells[6].innerText === cells[7].innerText && cells[7].innerText === cells[8].innerText){
      alert(cells[6].innerText + " is the winner");
      highlight(6, 7, 8);
      setletter("X");

    }else if(cells[0].innerText !=="" && cells[0].innerText === cells[3].innerText && cells[3].innerText === cells[6].innerText){
      alert(cells[0].innerText + " is the winner");
      highlight(0, 3, 6);
      setletter("X");

    }else if(cells[1].innerText !=="" && cells[1].innerText === cells[4].innerText && cells[4].innerText === cells[7].innerText){
      alert(cells[1].innerText + " is the winner");
      highlight(1, 4, 7);
      setletter("X");

    }else if(cells[2].innerText !=="" && cells[2].innerText === cells[5].innerText && cells[5].innerText === cells[8].innerText){
      alert(cells[2].innerText + " is the winner");
      highlight(2, 5, 8);
      setletter("X");
    }
  }

  function check(event){
    changeLetter(event);
    checkForWinner();
  }

  return (
    <> 
    <div className='holder'>
      <h1 className='header'>Tic Tac Toe #️⃣</h1>
      <table>
        <tbody>
          <tr>
            <td onClick={check}></td>
            <td onClick={check}></td>
            <td onClick={check}></td>
          </tr>
          <tr>
            <td onClick={check}></td>
            <td onClick={check}></td>
            <td onClick={check}></td>
          </tr>
          <tr>
            <td onClick={check}></td>
            <td onClick={check}></td>
            <td onClick={check}></td>
          </tr>
        </tbody>
      </table>

      <button onClick={resetBoard}>Restart</button>
      </div>
    </>
  );
}

export default App;
