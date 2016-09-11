const React = require('react');
import Number from './Number';
import UserGuess from './UserGuess';
import Reset from './Reset';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      randomNumber: '',
      userGuess: '',
      showGuess: '',
      message: '',
      inputValue: ''
    };
    this.handleUserGuess = this.handleUserGuess.bind(this)
    this.handleShowGuess = this.handleShowGuess.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  componentWillMount() {
    this.generateRandomNumber()
  }

  generateRandomNumber(){
   this.setState({ randomNumber: Math.floor(Math.random() * (100-1) + 1)});
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
  this.generateRandomNumber()
  this.setState({
    showGuess: "",
    message: "",
    randomNumber: this.generateRandomNumber(),
    inputValue: ""
  })
}

clearInput() {
  this.setState({ inputValue: '' })
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
       />
       <Reset
         reset={this.resetGame}
        />
      </div>
    )
  }

}

export default App;
