const React = require('react');

class UserGuess extends React.Component {
  render() {
    return (
      <div>
        <h1>Your last guess: {this.props.showGuess}</h1>
        <h1>{this.props.message}</h1>
        <input
          className="user-guess"
          type="number"
          onChange={this.props.handleUserGuess}
          value={this.props.inputs}
        />
        <button
         className="submit-button"
         onClick={this.props.handleShowGuess}
        >
         Submit Guess
        </button>
      </div>
    )
  }
}

export default UserGuess;
