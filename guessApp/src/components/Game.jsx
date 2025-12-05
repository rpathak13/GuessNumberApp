import { useState, useEffect } from "react";

const Game = () => {
  // Set up our states
  // const [stateVariable, setter] = useState(defaultState);
  const [guess, setGuess] = useState(" ");
  //store previous guesses
  const [guessArr, setGuessArr] = useState([]);
  //store number of guesses
  const [guessCount, setGuessCount] = useState(1);
  //guess result string
  const [guessResult, setGuessResult] = useState("");
  //set the number to guess
  const [noToGuess, setNoToGuess] = useState(0);

  //Functions
  //Generate the random number
  //params none
  //returns random number
  const getRandNumber = () => {
    const randNumber = Math.floor(Math.random()* 1000 + 1);
    return randNumber;
  }

  //Function to compare user guess to number
  //parameter: the guess 
  //return: guess result(string)

  const compare = (guessEntered) => {
    console.log('Compare function');
    console.log(guessCount);
    //test for a win
    if(Number(guessEntered)===noToGuess){
      console.log('Winner!');
      if(guessCount === 10){
        return ' Excellent, you guessed the number! Either you know the secret or you got lucky'
      }
      if(guessCount < 10){
        return ' Excellent, you have guessed the number. Ahaha! You know the secret'
      }
      if(guessCount > 10){
        return 'excellent! you have guessed the number! you should be able to do better'
      }
    }

    //test for too high or too low
    if (guessEntered > noToGuess){
      console.log("Too high")
      return ' Your guess is too high'
    }

    if (guessEntered < noToGuess){
      console.log('too low');
      return ' your guess is too low!'
    }
  }
  // end of compare function

  //onChange function
  const onChange = e => setGuess(e.target.value);

  //run guess function
  //this will run when we press submit
  const runGuess = (e) => {
    console.log('Run Guess');
    e.preventDefault();
    console.log(guess);
    console.log(guessCount);
    // compare the guess to the number to guess 
    const compareResult = compare(guess);
    setGuessResult(compareResult);
    console.log(compareResult);

    // increase the number of guesses 
    setGuessCount(guessCount +1 );
    console.log(guessCount);

    //store the guess in the guess array 
    setGuessArr([guess, ...guessArr]);
    setGuess(' ');
  }

  //reset button
  const reset = e => {
    e.preventDefault();
    setGuess('');
    setGuessArr([]);
    setGuessCount(1);
    setGuessResult('');
    setNoToGuess(getRandNumber());
    console.log('State Reset')
    console.log(noToGuess);
  }

  // use effect hook. this function will run after the page has loaded
  // the array at the end of the function is known as the dependancy array 
  // leaving this array empty tells react that this use effect will run only once

  useEffect(() => {
    const numberToBeGuessed = getRandNumber();
    console.log(numberToBeGuessed);
    setNoToGuess(numberToBeGuessed);
  }, [])

  return (
    <div className="container text-center bg-light py-4">
      <h1>Guessing Game! </h1>
      <p className="lead mb-3">Can you guess the number?</p>
      <section className="row">
        <div className="col-md-7 instructions">
          <h2>Guess the Number</h2>
          <p>I have selected a number between 1 and 1000</p>
          <p>Can you guess the number?</p>
          <form className="mt-3" onSubmit={(e) => runGuess(e)}>
            <div className="row mb-3">
              <label htmlFor="guess" className="mb-1">
                Type your guess
              </label>
              <input
                type="text"
                name="guess"
                id="gues"
                value={guess}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-success">Submit</button>
            </div>
            <div className="d-grid mb-3">
              <button className="btn btn-danger" onClick={(e) => reset(e)}>Play Again?</button>
            </div>
          </form>
        </div>
        {/* end of first column*/}
        <section className="col-md-4 status">
          <h2>Status</h2>
          <p>{guessResult}</p>
          <p>Number of Guesses: {guessCount - 1}</p>
          <p>previous guesses.</p>
          <p>The most current guess is at the top of the list</p>
          <ol reversed>
            {
              guessArr.map((g, index) =>(
                <li key = {index}>{g}</li>
              ))
            }
          </ol>
          </section>
        {/*end of second column*/}
      </section>
    </div>
  );
};

export default Game;
