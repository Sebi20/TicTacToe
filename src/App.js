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

  function resetBoard(){
    for(let i in cells){
      cells[i].innerText = "";
    }
  }

  //This function checks the different conditions of how to win a tic tac toe game.
  //I'm certain that there's a more efficient solution.
  function checkForWinner(){
    if(cells[0].innerText !=="" && cells[0].innerText === cells[1].innerText && cells[1].innerText === cells[2].innerText){
      alert(cells[0].innerText + " is the winner");

    }else if(cells[0].innerText !=="" && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText){
      alert(cells[0].innerText + " is the winner");

    }else if(cells[3].innerText !=="" && cells[3].innerText === cells[4].innerText && cells[4].innerText === cells[5].innerText){
      alert(cells[3].innerText + " is the winner");

    }else if(cells[2].innerText !=="" && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText){
      alert(cells[2].innerText + " is the winner");

    }else if(cells[6].innerText !=="" && cells[6].innerText === cells[7].innerText && cells[7].innerText === cells[8].innerText){
      alert(cells[6].innerText + " is the winner");

    }else if(cells[0].innerText !=="" && cells[0].innerText === cells[3].innerText && cells[3].innerText === cells[6].innerText){
      alert(cells[0].innerText + " is the winner");

    }else if(cells[1].innerText !=="" && cells[1].innerText === cells[4].innerText && cells[4].innerText === cells[7].innerText){
      alert(cells[1].innerText + " is the winner");

    }else if(cells[2].innerText !=="" && cells[2].innerText === cells[5].innerText && cells[5].innerText === cells[8].innerText){
      alert(cells[2].innerText + " is the winner");
    }
  }

  function check(event){
    changeLetter(event);
    checkForWinner();
  }

  return (
    <> 
    <div className='holder'>
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

      <button onClick={resetBoard}>Reset</button>
      </div>
    </>
  );
}

export default App;
