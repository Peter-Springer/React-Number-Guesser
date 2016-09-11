const React = require('react');
import Number from './Number';
import UserGuess from './UserGuess';
import Reset from './Reset';
import Range from './Range';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      randomNumber: '',
      userGuess: '',
      showGuess: '',
      message: '',
      inputValue: '',
      enableButton: true,
      max: 100,
      min: 1,
      rangeMax: 0,
      rangeMin: 0
    };
    this.handleUserGuess = this.handleUserGuess.bind(this)
    this.handleShowGuess = this.handleShowGuess.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.enableSubmitButton = this.enableSubmitButton.bind(this)
    this.handleUserMinRange = this.handleUserMinRange.bind(this)
    this.handleUserMaxRange = this.handleUserMaxRange.bind(this)
    this.userUpdateRange = this.userUpdateRange.bind(this)
  }

  componentWillMount() {
    this.generateRandomNumber()
  }

  generateRandomNumber(){
   const { max, min } = this.state
   this.setState({ randomNumber: Math.floor(Math.random() * (max-min) + min)});
 }

 userUpdateRange() {
   debugger;
  // alert('yo')
   const { rangeMax, rangeMin } = this.state
   this.setState({ max: +rangeMax, min: +rangeMin })
  //  const { max, min } = this.state
  //  this.setState({ max: 500, min: 600 });
  //  //  this.setState({ min: rangeMin });
   this.generateRandomNumber();
 }

 handleUserGuess(event){
   const guess = event.target.value
   this.setState({ userGuess: guess, inputValue: guess })
 }

 handleShowGuess(event) {
   const { userGuess } = this.state
   this.setState({ showGuess: userGuess })
   this.checkGuess();
   this.clearInput();
   this.enableResetButton();
 }

 handleUserMinRange(event){
   const minRange = event.target.value
   this.setState({ rangeMin: minRange })
 }

 handleUserMaxRange(event){
   const maxRange = event.target.value
   this.setState({ rangeMax: maxRange })
 }


checkGuess() {
  debugger;
  const { randomNumber, userGuess, max, min } = this.state
  if (randomNumber === +userGuess) {
    this.setState({
      message: "You win! The range has increased and decreased by 10. Guess again!",
      max: max + 10,
      min: min - 10})
    this.generateRandomNumber()
  }
  if (randomNumber > +userGuess) {
    this.setState({ message: "Too low guess again"})
  }
  if (randomNumber < +userGuess) {
    this.setState({ message: "Too high guess again"})
  }
  if (+userGuess > max || +userGuess < min ) {
    this.setState({ message: "Out of range current range:" + min + "-" + max})
  }
}

resetGame() {
  this.setState({
    showGuess: "",
    message: "",
    randomNumber: this.generateRandomNumber(),
    inputValue: "",
    max: 100,
    min: 1,
    enableButton: true
  })
  this.generateRandomNumber()
}

clearInput() {
  this.setState({ inputValue: '' })
}

enableResetButton() {
  const { userGuess } = this.state
  if (userGuess.length > 0) {
    this.setState({ enableButton: false})
  }
}

enableSubmitButton() {
  this.setState({ enableButton: false})
}

  render() {
    return (
      <div>
       <Number number={this.state.randomNumber} />
       <UserGuess
         showGuess={this.state.showGuess}
         handleUserGuess={this.handleUserGuess}
         handleShowGuess={this.handleShowGuess}
         message={this.state.message}
         inputs={this.state.inputValue}
         enable={this.state.enableButton}
         enableSubmit={this.enableSubmitButton}
       />
       <Reset
         reset={this.resetGame}
         enable={this.state.enableButton}
        />
       <Range
        handleMinRange={this.handleUserMinRange}
        handleMaxRange={this.handleUserMaxRange}
        setRange={this.userUpdateRange}
        />
      </div>
    )
  }

}

export default App;
