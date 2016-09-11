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
      min: 1
    };
    this.handleUserGuess = this.handleUserGuess.bind(this)
    this.handleShowGuess = this.handleShowGuess.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.clearInput = this.clearInput.bind(this)
    this.enableSubmitButton = this.enableSubmitButton.bind(this)
  }

  componentWillMount() {
    this.generateRandomNumber()
  }

  generateRandomNumber(){
   const { max, min } = this.state
   this.setState({ randomNumber: Math.floor(Math.random() * (max-min) + min)});
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
   this.enableResetButton()
 }

checkGuess() {
  const { randomNumber, userGuess } = this.state
  if (randomNumber === +userGuess) {
    return this.setState({ message: "You win!"})
  }
  if (randomNumber > +userGuess) {
    return this.setState({ message: "Too low guess again"})
  }
  if (randomNumber < +userGuess) {
    return this.setState({ message: "Too high guess again"})
  }
}

resetGame() {
  this.setState({
    showGuess: "",
    message: "",
    randomNumber: this.generateRandomNumber(),
    inputValue: "",
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
  // alert('yo')
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
       <Range />
      </div>
    )
  }

}

export default App;
